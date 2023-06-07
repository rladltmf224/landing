<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row id="info" class="d-flex justify-center">
      <v-col cols="12" class="ma-0 pa-0">
        <v-card elevation="0" variant="text" rounded="0">
          <v-img
            class="banner_img"
            src="../content/photo/banner.png"
            cover
          ></v-img>
          <div class="user-text px-6">
            <h2 class="img_text">한국표준육묘는 어떤 곳인가요?</h2>
            <br />
            <p class="img__sub_text pa-0 ma-0">
              한국표준육묘는 국내 최초의 수직형 LED 육묘업체입니다.
              <br />
              지속가능하며 혁신적인 기술을 통해 최적의 육묘 솔루션을 제공하여
              우수한 품질의 묘를 생산합니다.
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- 사진부분 -->
    <v-row class="d-flex justify-center">
      <v-col class="d-flex" sm="6" xs="6">
        <v-img
          class="mx-2 mid_img"
          src="../content/photo/vertical_farm_1.png"
        ></v-img>
        <v-img
          class="mx-2 mid_img"
          src="../content/photo/vertical_farm_2.jpg"
        ></v-img>
        <v-img
          class="mx-2 mid_img"
          src="../content/photo/vertical_farm_3.jpg"
        ></v-img>
      </v-col>
    </v-row>
    <!-- 고객사부분 -->
    <v-row class="sub1_5 d-flex justify-center">
      <v-col class="sec1" lg="6" xl="6" md="8" sm="6" xs="6">
        <v-col class="txt_box">
          <p class="txt_tit mid_text">
            <span class="txt_green">한국표준육묘</span>의 묘를 믿고 써보신 농가
          </p>
          <br />
          <p class="sub1_5_sub_tit mid_text">
            20만평에 해당하는 많은 농가에서 이미 저희 한국표준육묘를 이용하고
            계십니다.
          </p>
        </v-col>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5" class="px-6">
        <v-carousel style="height: 200px" :interval="3000" cycle>
          <template v-for="(item, index) in farmsInfo">
            <v-carousel-item
              v-if="(index + 1) % columns === 1 || columns === 1"
              :key="index"
            >
              <!-- Carousel  -->
              <v-row class="flex-nowrap" style="height: 100%">
                <template v-for="(n, i) in columns">
                  <template v-if="+index + i < farmsInfo.length">
                    <v-col :key="i">
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

    <!-- 2페이지 부분 -->
    <v-row class="d-flex justify-center">
      <v-col sm="10" xs="10" lg="6" class="content_second">
        <div class="sub_bis_CON1 page_sect5 px-4">
          <p class="title">
            <i class="xi xi-spa"></i
            ><i class="ti">한국표준육묘의 장점은 무엇인가요?</i>
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <v-col sm="10" xs="10" lg="6" class="px-6">
        <div class="sub_CON_Tit_1">
          <p class="ti">
            <v-icon color="#104b00"> mdi-bug-outline</v-icon> 병해충, 바이러스에
            강하다
          </p>
        </div>
        <div class="sub_CON_TExt_1 st1">
          <p class="tx pa-0 ma-0">
            밀폐형 수직 육묘장은 엄격한 위생관리로 외부의 바이러스와 해충의
            유입을 원천적으로 차단합니다.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col sm="10" xs="10" lg="6" class="px-6">
        <div class="sub_CON_Tit_1">
          <p class="ti">
            <v-icon color="#104b00"> mdi-sprout</v-icon> 연중 내내 균일한 품질
            생산
          </p>
        </div>
        <div class="sub_CON_TExt_1 st1">
          <p class="tx pa-0 ma-0">
            7-8월 고온기 육묘의 경우 고온 스트레스나 열해가 발생하기 쉽습니다.
            하지만 한국표준육묘는 모종의 최적 생장 환경을 유지하여 이상 고온
            등의 외부 요인들로부터 안전합니다.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col sm="10" xs="10" lg="6" class="px-6">
        <div class="sub_CON_Tit_1">
          <p class="ti">
            <v-icon color="#104b00"> mdi-virus</v-icon> 성장억제제 처리를 하지
            않는다.
          </p>
        </div>
        <div class="sub_CON_TExt_1 st1">
          <p class="tx pa-0 ma-0">
            한국표준육묘 시스템은 실시간으로 작물 특성에 맞는 환경( 광량 및
            광질, 온도, 습도, 공기, 양분 등)을 최적으로 제어하여 육묘하기 때문에
            성장억제제를 전혀 사용 할 필요가 없습니다.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col sm="10" xs="10" lg="6" class="px-6">
        <div class="sub_CON_Tit_1">
          <p class="ti">
            <v-icon color="#104b00"> mdi-watering-can</v-icon> 국내 최단
            육묘기간
          </p>
        </div>
        <div class="sub_CON_TExt_1 st1">
          <p class="tx pa-0 ma-0">
            생육에 최적의 환경을 제공하여 육묘기간이 2/3 정도로 짧습니다.
            뿌리노화 걱정이 없어 정식 시 활착과 성장이 빠릅니다.
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- 2페이지부분 -->

    <v-row class="py-12" id="sample">
      <v-col cols="12" class="pa-0 ma-0">
        <v-card elevation="0" variant="text" rounded="0">
          <v-img
            class="banner_img"
            src="../content/photo/seedling_banner.png"
            cover
          ></v-img>
          <div class="user-text px-4">
            <h2 class="img_text">
              수직농장에서 육묘한 묘를 무료로 나눠드립니다.
            </h2>
            <br />
            <p class="img__sub_text pa-0 ma-0">
              (1000평 이상 2판, 3000평 이상 5판)
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- sample 신청부분 -->
    <v-row>
      <v-col class="d-flex justify-center pa-12">
        <form>
          <input type="hidden" name="dbControl" value="setDsu2022" />
          <input type="hidden" name="apts" id="apts" value="" />
          <input type="hidden" name="offices" id="offices" value="" />
          <input type="hidden" name="returnURL" id="returnURL" value="f5" />
          <input type="hidden" name="uniqpppp" id="uniqpppp" value="" />
          <input type="hidden" name="uniqppppName" id="uniqppppName" value="" />
          <input type="hidden" name="char_num" id="char_num" value="1" />
          <table class="board_write_form">
            <tbody>
              <tr class="form_field">
                <th class="f_name" for="c_name">이름</th>
                <td class="field">
                  <input
                    type="text"
                    maxlength="20"
                    v-model="userInfo.customerName"
                    name="c_name"
                    id="c_name"
                    class="w500"
                  />
                </td>
              </tr>
              <tr class="form_field">
                <th class="f_name" for="c_name">재배면적(평)</th>
                <td class="field">
                  <input
                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    type="number"
                    placeholder="ex) 3000"
                    v-model="userInfo.area"
                    name="c_name"
                    id="c_name"
                    class="w500"
                  />
                </td>
              </tr>
              <tr class="form_field">
                <th class="f_name" for="">연락처</th>
                <td class="field">
                  <select
                    name="c_hp1"
                    v-model="userInfo.phoneNumber_1"
                    id="c_hp1"
                    class="w120"
                  >
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                  <span class="hypen">- </span>
                  <input
                    ref="phoneNumber1"
                    v-model="userInfo.phoneNumber_2"
                    type="tel"
                    placeholder=""
                    name="c_hp1"
                    id="c_hp1"
                    hpinput="true"
                    class="w120 input-num-size"
                    maxlength="4"
                    @input="checkPhoneNumber1"
                  />
                  <span class="hypen">- </span>
                  <input
                    ref="phoneNumber2"
                    v-model="userInfo.phoneNumber_3"
                    type="tel"
                    placeholder=""
                    name="c_hp2"
                    id="c_hp2"
                    hpinput="true"
                    class="w120 input-num-size"
                    maxlength="4"
                    @input="checkPhoneNumber2"
                  />
                </td>
              </tr>
              <tr class="form_field">
                <th class="f_name" for="c_name">요청사항</th>
                <td class="field">
                  <input
                    ref="requestInput"
                    type="text"
                    maxlength="500"
                    v-model="userInfo.item"
                    name="c_name"
                    id="c_name"
                    class="w500"
                    placeholder="ex) 원하는 품종,판 수 등"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <v-col class="py-0 ma-0 px-0">
            <div class="agree_wrap">
              <div class="agree_box">
                <strong class="h5"
                  >개인정보 수집,이용,위탁,양도에 대한 동의</strong
                ><br /><br />
                한국표준육묘는 이벤트 참여자분들께 정보제공에 필요한 최소한의
                개인정보를 수집하고 있습니다. <br />이에 개인정보의 수집 및
                이용에 관하여 아래와 같이 안내 하오니 충분히 읽어 보신 후
                동의하여 주시기 바랍니다.<br />
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
              </div>
              <div class="agree_radio">
                <span class="">
                  <strong>※ (필수) 개인정보취급방침에</strong>
                </span>
                <span class="agree_radio_01"
                  ><label for="e01_agree_y" class="strong">
                    <input type="radio" v-model="radioValues" value="Y" />
                    동의합니다.</label
                  ></span
                >
                <span class="agree_radio_02"
                  ><label for="agree02" class="strong">
                    <input type="radio" v-model="radioValues" value="N" />
                    동의하지 않습니다.</label
                  ></span
                >
              </div>
            </div>
          </v-col>
          <v-row class="d-flex justify-center pt-4 pb-12">
            <div class="button_box">
              <div class="buttons btn_l">
                <a
                  @click="radioValues === 'Y' ? preSubmit() : null"
                  id="registerBtn"
                  :class="radioValues === 'Y' ? 'confirm' : 'Notconfirm'"
                >
                  <p class="button_text pa-0 ma-0" style="color: white">
                    참여하기
                  </p>
                </a>
              </div>
            </div>
          </v-row>
        </form>
      </v-col>
    </v-row>

    <!-- test float -->
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
@Component
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
  get farmsInfo() {
    return cfg.farmsInfo;
  }
  @Prop() private msg!: string;
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
