<template>
    <div class="main">
        <div>
            <p id="rsv-complete-ment">예약이 완료 되었습니다.</p>
            <div class="rsv-move-btn">
                <v-row
                    align="center"
                    justify="space-around"
                >
                <div class="btn-row">
                    <router-link to="/mypage/psninfo">
                        <v-btn
                            class="mr-4"
                            color="#ffffff"
                            height="45px"
                            width="130px"
                            :style='{"border-radius": "15px", "border":"1px solid #002448", "font-family": "Fira Sans", "color":"#002448"}'
                        >
                            예약 확인하기
                        </v-btn>
                    </router-link>
                    <router-link to="/">
                        <v-btn
                            class="mr-4"
                            dark
                            color="#002448"
                            height="45px"
                            width="130px"
                            :style='{"border-radius": "15px", "font-family": "Fira Sans",}'
                        >
                        다른 예약하기
                        </v-btn>
                    </router-link>
                </div>
                </v-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>

<style>
* {
    text-decoration: none;
    list-style: none;
}
.main {
    width: 70%;
    height: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
#rsv-complete-ment{
    text-align: center;
    font-size: 30px;
    padding-top: 40px;
}
.rsv-move-btn{
    padding-top:10%;
}
.btn-row{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
