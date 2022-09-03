var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

//추가한 부분
var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'rsv715.cw0mqhawwwhk.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'pknu715job',
  database: 'rsv715'
});
// Connect
connection.connect(function (err) {
  if (err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
});

// Sign Up
router.post('/signUp', function (req, res) {
  const user = {
    'userid': req.body.user.userid,
    'password': req.body.user.password,
    'studentid': req.body.user.studentid,
    'name': req.body.user.name,
    'position': req.body.user.position,
    'course': req.body.user.course,
    'passwordanswer': req.body.user.passwordanswer,
    'email': req.body.user.email
  };
  connection.query('SELECT userid FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
    if (row[0] == undefined) { //  동일한 아이디가 없을경우,
      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(user.password, salt);
      connection.query('INSERT INTO users (userid,password,studentid,name,position,course,passwordanswer,email) VALUES ("' + user.userid + '","' + encryptedPassword + '","' + user.studentid + '","' + user.name + '","' + user.position + '","' + user.course + '","' + user.passwordanswer + '","' + user.email + '")', user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: '회원가입이 완료되었습니다!'
      });
    }
    else {
      res.json({
        success: false,
        message: '중복된 ID가 있습니다. 다른 ID를 입력해주세요!'
      })
    }
  });
});

let isloggedin = 0;
let loggedinuserid = '';

// Log In
router.post('/logIn', function (req, res) {
  const user = {
    'userid': req.body.user.userid,
    'password': req.body.user.password
  };

  isloggedin = 1;
  connection.query('SELECT userid, password FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
    if (row[0] !== undefined && row[0].userid === user.userid) {
      bcrypt.compare(user.password, row[0].password, function (err, res2) {
        if (res2 === true) {
          connection.query('UPDATE users SET loggedin="' + isloggedin + '" WHERE userid="' + user.userid + '"', user, function (err, row2) {
            if (err) throw err;
          });
          res.json({ // 로그인 성공 
            success: true,
            message: '로그인에 성공했습니다!'
          });
          loggedinuserid = user.userid;
        }
        else {
          res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            
            success: false,
            message: 'ID 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요!'
          });
        }
      })
    } else {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'ID 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요!'
      })
    }
  });
});

// 로그인 되어 있는지
router.post('/', function (req, res) {
  res.json({
    loggedinuserid: loggedinuserid,
    isloggedin: isloggedin
  });
});

// Log Out
router.post('/logOut', function (req, res) {
  const user = {
    'userid': req.body.user
  };
  isloggedin = 0;
  loggedinuserid = '';
  connection.query('UPDATE users SET loggedin="' + isloggedin + '" WHERE userid="' + user.userid + '"', user, function (err, row) {
    if (err) throw err;
  })
  res.json({
    loggedinuserid: loggedinuserid,
    isloggedin: isloggedin
  });
});

// rsv 기본 입력
router.post('/rsv', function (req, res) {
  connection.query('SELECT userid, name FROM users WHERE userid="' + loggedinuserid + '"', function (err, row) {
    if (err) throw err;
    res.send(row[0]);
  });
});

// make Rsv
router.post('/makeRsv', function (req, res) {
  const rsv = {
    'userid': req.body.rsv.userid,
    'name': req.body.rsv.name,
    'rsvdate': req.body.rsv.rsvdate,
    'tablenumber': req.body.rsv.tablenumber
  };
  const rsvstarttime = req.body.start_time;
  const rsvendtime = req.body.end_time;
  const numofrsvpeople = req.body.numofrsvpeople;
  const rsvtext = req.body.rsvtext;
  connection.query('INSERT INTO rsvs (userid, name, rsvdate, rsvstarttime, rsvendtime, tablenumber, numofrsvpeople, rsvtext) VALUES ("' + rsv.userid + '","' + rsv.name + '","' + rsv.rsvdate + '","' + rsvstarttime + '","' + rsvendtime + '","' + rsv.tablenumber + '","' + numofrsvpeople + '","' + rsvtext + '")', rsv, function (err, row) {
    if (err) throw err;
  });
});

//rsvInfo
router.post('/rsvInfo', function (req, res) {
  connection.query('SELECT rsvid, name, rsvdate, rsvstarttime, rsvendtime, tablenumber, numofrsvpeople, rsvtext FROM rsvs WHERE userid="' + loggedinuserid + '" AND rsvdate > date_sub(now(), interval 1 day) ORDER BY rsvdate, rsvstarttime, rsvendtime, tablenumber', function (err, row) {
    if (err) throw err;
    res.send(row);
  });
});

//deleteRsv
router.post('/deleteRsv', function (req, res) {
  connection.query('DELETE FROM rsvs WHERE rsvid="' + req.body.rsvid + '"', function (err, row) {
    if (err) throw err;
  });
});


// 기존에 있는 예약 전체 불러오기
router.post('/existingRsv', function (req, res) {
  const existingRsv = {
    'rsvdate': req.body.rsvdate,
    'tablenumber': req.body.tablenumber
  };
  connection.query('SELECT rsvstarttime, rsvendtime FROM rsvs WHERE rsvdate="' + existingRsv.rsvdate + '" AND tablenumber="' + existingRsv.tablenumber + '"', function (err, row) {
    if (err) throw err;
    res.send(row)
  })
})


module.exports = router;
