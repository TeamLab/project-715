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

router.get('/', function (req, res) {
  connection.query('SELECT * FROM users', function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});
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
    if (row[0] == undefined){ //  동일한 아이디가 없을경우,
      const salt = bcrypt.genSaltSync();
      const encryptedPassword = bcrypt.hashSync(user.password, salt);
      connection.query('INSERT INTO users (userid,password,studentid,name,position,course,passwordanswer,email) VALUES ("' + user.userid + '","' + encryptedPassword + '","' + user.studentid + '","' + user.name + '","' + user.position + '","' + user.course + '","' + user.passwordanswer + '","' + user.email + '")', user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: '회원가입이 완료되었습니다!'
      })
    }
    else {
      res.json({
        success: false,
        message: '중복된 ID가 있습니다. 다른 ID를 입력해주세요!'
      })
    }
  });
});
router.post('/login', function (req, res) {
  const user = {
    'userid': req.body.user.userid,
    'password': req.body.user.password
  };
  connection.query('SELECT userid, password FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
    if (err) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'ID 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요!'
      })
    }
    if (row[0] !== undefined && row[0].userid === user.userid) {
      bcrypt.compare(user.password, row[0].password, function (err, res2) {
        if (res2) {
          res.json({ // 로그인 성공 
            success: true,
            message: '로그인에 성공했습니다!'
          })
        }
        else {
          res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            
            success: false,
            message: 'ID 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요!'
          })
        }
      })
    }
  })
});
module.exports = router;
