<template>
  <v-container fluid>
    <v-row id="info">
      <v-col class="px-0 my-0 py-0">
        <div class="img-wrap">
          <div class="text">
            <p
              class="ma-0 banner_title_text text-center text-h6 text-md-h5 text-lg-h4 text-sm-h4 text-xs-h4"
            >
              한국표준육묘는 어떤곳인가요?
            </p>
            <br />
            <p class="pa-0 ma-0 banner_content_text">
              한국표준육묘는 국내 최초의 수직형 LED 육묘업체입니다. 지속가능하며
              혁신적인 기술을 통해 최적의 육묘 솔루션을 제공하여 우수한 품질의
              묘를 생산합니다.
            </p>
          </div>
          <v-img class="blur" src="../content/photo/banner.png" />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center ">
      <v-col cols="12" sm="10" md="8" lg="6" class="d-flex">
        <v-img
          class="mid_img mr-1"
          src="../content/photo/vertical_farm_1.png"
        ></v-img>
        <v-img
          class="mid_img mr-1"
          src="../content/photo/vertical_farm_2.jpg"
        ></v-img>
        <v-img
          class="mid_img mr-1"
          src="../content/photo/vertical_farm_3.jpg"
        ></v-img>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-row>
          <v-col>
            <p
              class="pa-0 ma-0 list_title_text text-start text-lg-h5 text-sm-h6"
            >
              <span class="list_title_text_green">한국표준육묘</span>의 묘를
              믿고 써보신 농가
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="6" xs="2" md="8" lg="6">
        <v-row>
          <v-col>
            <p class="pa-0 ma-0 list_title_sm_text text-start text-body-2">
              20만평에 해당하는 많은 농가에서
              <br />
              이미 저희 한국표준육묘를 이용하고 계십니다.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- pc버젼 -->
    <v-row justify="center " v-if="isShowValue">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-carousel
          style="height: 210px"
          :interval="3000"
          cycle
          hide-delimiter-background
        >
          <template v-for="(item, index) in farmsInfo">
            <v-carousel-item
              v-if="(index + 1) % columns === 1 || columns === 1"
              :key="index"
            >
              <v-row class="flex-nowrap">
                <template v-for="(n, i) in columns">
                  <template v-if="+index + i < farmsInfo.length">
                    <v-col :key="i" class="">
                      <v-card class="mx-0" outlined height="100%">
                        <v-list-item three-line>
                          <v-list-item-content>
                            <div class="text-overline mb-4">
                              {{ farmsInfo[+index + i].item }}
                            </div>
                            <v-list-item-title class="text-h6 mb-1">
                              <p class="mid_text">
                                {{ farmsInfo[+index + i].name }}
                              </p>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                              {{ farmsInfo[+index + i].locate }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              {{ farmsInfo[+index + i].scale }}
                            </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-avatar
                            size="100"
                            width="100px"
                            class="mt-10"
                          >
                            <img src="../content/photo/자산 9.png" />
                          </v-list-item-avatar>
                        </v-list-item>
                      </v-card>
                    </v-col>
                  </template>
                </template>
              </v-row>
            </v-carousel-item>
          </template>
        </v-carousel>
      </v-col>
    </v-row>
    <!-- 모바일버젼 -->
    <v-row justify="center" v-else>
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-carousel
          height="100"
          hide-delimiters
          :interval="2000"
          cycle
          class="custom"
        >
          <v-carousel-item v-for="(slide, i) in farmsInfo" :key="i">
            <v-row class="fill-height" align="center" justify="center">
              <v-col cols="12">
                <v-card class="mx-0" outlined height="100px">
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">
                        {{ slide.locate }}
                      </div>
                      <v-list-item-title class="text-h6 mb-1">
                        <p class="mid_text">
                          {{ slide.name }}
                        </p>
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar size="50" class="mt-6">
                      <img src="../content/photo/자산 9.png" />
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-row>
          <v-col>
            <p
              class="pa-0 ma-0 list_title_text text-start text-lg-h5 text-sm-h6"
            >
              <span class="list_title_text_green">한국표준육묘</span>의 장점은
              무엇인가요?
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="card_titletext-sm-h6 mb-1">
                <p class="card_title">
                  <v-icon color="#104b00"> mdi-bug-outline</v-icon> 병해충,
                  바이러스에 강하다
                </p>
              </v-list-item-title>

              <v-card-text class="pa-0">
                밀폐형 수직 육묘장은 엄격한 위생관리로 외부의 바이러스와 해충의
                유입을 원천적으로 차단합니다.
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="card_titletext-sm-h6 mb-1">
                <p class="card_title">
                  <v-icon color="#104b00"> mdi-sprout</v-icon> 연중 내내 균일한
                  품질 생산
                </p>
              </v-list-item-title>
              <v-card-text class="pa-0">
                7-8월 고온기 육묘의 경우 고온 스트레스나 열해가 발생하기
                쉽습니다. 하지만 한국표준육묘는 모종의 최적 생장 환경을 유지하여
                이상 고온 등의 외부 요인들로부터 안전합니다.
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="card_titletext-sm-h6 mb-1">
                <p class="card_title">
                  <v-icon color="#104b00"> mdi-virus</v-icon> 성장억제제 처리를
                  하지 않는다.
                </p>
              </v-list-item-title>
              <v-card-text class="pa-0">
                한국표준육묘 시스템은 실시간으로 작물 특성에 맞는 환경( 광량 및
                광질, 온도, 습도, 공기, 양분 등)을 최적으로 제어하여 육묘하기
                때문에 성장억제제를 전혀 사용 할 필요가 없습니다.
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="card_titletext-sm-h6 mb-1">
                <p class="card_title">
                  <v-icon color="#104b00"> mdi-watering-can</v-icon> 국내 최단
                  육묘기간
                </p>
              </v-list-item-title>
              <v-card-text class="pa-0">
                생육에 최적의 환경을 제공하여 육묘기간이 2/3 정도로 짧습니다.
                뿌리노화 걱정이 없어 정식 시 활착과 성장이 빠릅니다.
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" id="sample">
      <v-col class="px-0 my-0">
        <div class="img-wrap">
          <div class="text">
            <p
              class="ma-0 banner_title_text text-center text-h6 text-md-h5 text-lg-h4 text-sm-h4 text-xs-h4"
            >
              수직농장에서 육묘한 묘를 무료로 나눠드립니다.
            </p>
            <br />
            <p class="pa-0 ma-0 banner_content_text">
              (1000평 이상 2판, 3000평 이상 5판)
            </p>
          </div>
          <v-img class="blur" src="../content/photo/seedling_banner.png" />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-row>
          <v-col>
            <p
              class="pa-0 ma-0 list_title_text text-start text-lg-h5 text-sm-h6"
            >
              신청서
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5" class="d-flex box-input pb-0">
        <input
          id="id"
          type="text"
          placeholder="이름"
          v-model="userInfo.customerName"
          class="my-1 input-default is-delete"
          title="이름"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5" class="box-input py-0">
        <input
          oninput="this.value = this.value.slice(0, 10).replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          type="number"
          placeholder="재배면적 (평) ex) 3000"
          v-model="userInfo.area"
          name="c_name"
          id="c_name"
          class="my-1 input-default is-delete"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5" class="box-input py-0">
        <input
          oninput="this.value = this.value.slice(0, 11).replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          type="number"
          placeholder="전화번호 ex) 01012341234"
          v-model="userInfo.phoneNumber_1"
          name="c_name"
          id="c_name"
          class="my-1 input-default is-delete"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5" class="box-input py-0">
        <input
          type="text"
          placeholder="요청사항 ex) 토마토 2판 부탁드립니다."
          v-model="userInfo.item"
          name="c_name"
          id="c_name"
          maxlength="200"
          class="my-1 input-default is-delete"
        />
      </v-col>
    </v-row>

    <!-- 개인정보수집동의 -->
    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-card class="mx-auto" outlined height="100px" style="overflow: auto">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="card_titletext-sm-h6 mb-1">
                <strong class=""
                  >개인정보 수집,이용,위탁,양도에 대한 동의</strong
                >
              </v-list-item-title>

              <v-card-text class="pa-0">
                <br />
                한국표준육묘는 이벤트 참여자분들께 정보제공에 필요한 최소한의
                개인정보를 수집하고 있습니다.
                <br />이에 개인정보의 수집 및 이용에 관하여 아래와 같이 안내
                하오니 충분히 읽어 보신 후 동의하여 주시기 바랍니다.<br />
                <br />
                <strong class="h6"
                  >1. 개인정보 취급방침에 대한 동의 (필수) </strong
                ><br />
                개인정보 수집 주체 : 한국표준육묘<br />
                개인정보 수집/이용 항목 : 이름, 연락처<br />
                개인정보 수집/이용 목적 : 이벤트 응모<br />
                개인정보 동의를 거부할 권리 : 귀하께서는 개인정보 수집/이용을
                거절할 수 있으며, <br />거절하실 경우 서비스를 제공해 드릴 수
                없습니다.<br />
                <br />
                <strong class="h6">2. 개인정보 수집 및 이용 기간</strong><br />
                한국표준육묘는 개인정보수집 및 이용목적이 달성된 후에는 예외
                없이 해당정보를 지체없이 파기합니다.<br />
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        xl="6"
        lg="6"
        md="6"
        sm="6"
        xs="5"
        class="d-flex justify-center py-0"
      >
        <!-- <strong> ※ (필수) 개인정보취급방침에 </strong> -->
        <p class="text-subtitle-2 text-lg-subtitle-1">
          ※ (필수) 개인정보취급방침에
        </p>
        <span class="agree_radio_01 text-subtitle-2 text-lg-subtitle-1"
          ><label for="e01_agree_y" class="strong">
            <input
              class="ml-2"
              type="radio"
              @click="getBtnValue()"
              v-model="radioValues"
              value="Y"
            />
            동의합니다.</label
          ></span
        >
        <span class="agree_radio_02 text-subtitle-2 text-lg-subtitle-1"
          ><label for="agree02" class="strong">
            <input
              class="ml-2"
              type="radio"
              @click="getBtnValue()"
              v-model="radioValues"
              value="N"
            />
            동의하지 않습니다.</label
          ></span
        >
      </v-col>
    </v-row>

    <!-- 참여하기 -->
    <v-row class="pb-12 mt-0" justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
        <v-btn
          :style="
            radioValues === 'Y'
              ? 'background: linear-gradient(to right, #a6d254, #8cb83a)'
              : 'background: linear-gradient(to right, #bebebe, rgb(155, 155, 155));'
          "
          block
          @click="radioValues === 'Y' ? preSubmit() : null"
          :disabled="radioValues === 'N'"
          large
          elevation="0"
        >
          <span style="color: white">참여하기</span>
        </v-btn>
      </v-col>
    </v-row>
    <!-- float -->
    <a
      class="uk-position-bottom-right uk-text-center"
      style="
        z-index: 20000;
        position: fixed !important;
        bottom: 40px;
        right: 40px;
      "
      uk-toggle=""
      aria-expanded="false"
    >
      <a id="go_event01_pc" @click="MoveToSample()"
        ><img src="../content/photo/자산 3.png" width="80"
      /></a>
      <a id="go_event02_pc" @click="MoveToInfo()"
        ><img src="../content/photo/자산 4.png" width="80"
      /></a>
    </a>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as api from "@/api/index.js";
import cfg from "./farmsInfo.js";
@Component({
  components: {},
})
export default class AppContent extends Vue {
  userInfo: any = {
    customerName: "",
    item: "",
    area: "",
    phoneNumber: "",
    phoneNumber_1: "",
    phoneNumber_2: "",
    phoneNumber_3: "",
  };
  userPhoneNumberEl: any = {
    phoneNumber_1: "",
    phoneNumber_2: "",
    phoneNumber_3: "",
  };
  radioValues: string = "Y";
  columns: number = 3;
  items: any = [
    {
      src: require("./photo/vertical_farm_1.png"),
    },
    {
      src: require("./photo/vertical_farm_2.jpg"),
    },
    {
      src: require("./photo/vertical_farm_3.jpg"),
    },
  ];
  width: number = 0;
  isShowValue: boolean = true;

  get farmsInfo() {
    return cfg.farmsInfo;
  }
  mounted() {
    window.addEventListener("resize", this.handleResize);
  }
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize(event: any) {
    //모바일화면일때만 v-if해주기
    this.width = window.innerWidth;

    if (this.width > 600) {
      this.isShowValue = true;
    } else {
      this.isShowValue = false;
    }
  }

  MoveToSample() {
    var element = document.querySelector("#sample");
    if (element !== null) {
      var location = (element as HTMLElement).offsetTop;
      window.scrollTo({ top: location, behavior: "smooth" });
    }
  }
  checkPhoneNumber1() {
    if (this.userInfo.phoneNumber_2.length === 4) {
      const phoneNumber2Input = this.$refs.phoneNumber2 as HTMLInputElement;
      phoneNumber2Input.focus();
    }
  }
  checkPhoneNumber2() {
    if (this.userInfo.phoneNumber_3.length === 4) {
      const requestInput = this.$refs.requestInput as HTMLInputElement;
      requestInput.focus();
    }
  }
  MoveToInfo() {
    var element = document.querySelector("#info");
    if (element !== null) {
      var location = (element as HTMLElement).offsetTop;
      window.scrollTo({ top: location, behavior: "smooth" });
    }
  }
  preSubmit() {
    let body = {
      area: this.userInfo.area,
      customerName: this.userInfo.customerName,
      phoneNumber:
        this.userInfo.phoneNumber_1 +
        this.userInfo.phoneNumber_2 +
        this.userInfo.phoneNumber_3,
      request: this.userInfo.item,
    };
    if (body.customerName == "") {
      alert("이름을 입력해주세요.");
    } else if (body.area == "") {
      alert("재배면적을 입력해주세요.");
    } else if (body.phoneNumber == "") {
      alert("연락처를 입력해주세요.");
    } else if (body.request == "") {
      alert("요청사항을 입력해주세요.");
    } else {
      api.landing
        .postCustomerInfo(body)
        .then((res: any) => {
          alert("참여가 완료되었습니다.");
          this.userInfo = "";
        })
        .catch((error: any) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    }
  }
}
</script>

<style src="./AppContent.scss" scoped lang="scss" scoped></style>
