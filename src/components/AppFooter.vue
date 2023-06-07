<template>
    <v-container id="footer" fluid class="pa-0 ma-0">
        <div class="info_wrap d-flex align-center" style="height: 200px;">
            <div class="box1 ">
                <ul class="info fl_wrap">
                    <li class="site_name_t">한국표준육묘</li>
                    <li class="">대표이사 : 정한섭</li>
                    <li class="cl">경기도 화성시 삼성 1로 4길 7-4 (석우동 19-14번지)</li>
                    <li class="">Tel. 031-831-9758</li>
                    <li class="">Fax. 031-831-9758</li>
                    <li class="">E-mail. yklee1@twim21.com</li>
                    <li class="copyright">COPYRIGHT ⓒ 2023 KOREASTANDARDSEEDLING ALL RIGHTS RESERVED.</li>
                </ul>
                <p class="logo"><img src="../components/logo_seedling.png" width="40"></p>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'FrontendAppFooter',

    data() {
        return {

        };
    },
    components:{
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
#footer .info_wrap {
    padding: 2em 0 2em 0;
    position: relative;
    background-color: rgb(245, 245, 245)
}

#footer .info_wrap .box1 {
    position: relative;
}

.box1 {
    width: 1200px;
    margin: 0 auto;
    max-width: 98%;
}

#footer .info_wrap .info {
    width: 90%;
}

ul,
ol,
li {
    list-style: none;
}

#footer .info_wrap .info>li.site_name_t {
    opacity: inherit !important;
}

#footer .info_wrap .info>li {
    margin-right: 1em;
    font-size: .875em;
    color: #bbb;
    line-height: 2;
    letter-spacing: 0;
    vertical-align: top;
}

.fl_wrap>li {
    float: left;
}

#footer .info_wrap .logo {
    position: absolute;
    right: 5%;
    top: 0;
}
</style>