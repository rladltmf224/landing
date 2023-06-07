<template>
  <v-container fluid>
    <v-row>
      <v-col class="px-0 my-0 py-0">
        <v-img
          class="banner_img d-flex align-center"
          src="../content/photo/banner.png"
          cover
        >
          <v-row>
            <v-col>
              <p
                class="ma-0 banner_title_text text-center text-h6 text-md-h5 text-lg-h4 text-sm-h6 text-xs-h6"
              >
                한국표준육묘는 어떤곳인가요?
              </p>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
            <v-col class="text-center" cols="10">
              <p class="ma-0 banner_title_text text-center">
                한국표준육묘는 국내 최초의 수직형 LED 육묘업체입니다.
                지속가능하며 혁신적인 기술을 통해 최적의 육묘 솔루션을 제공하여
                우수한 품질의 묘를 생산합니다.
              </p>
            </v-col>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6" class="d-flex">
        <!-- <v-carousel class="car">
          <v-carousel-item
            class="carousel_img"
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel> -->
        <v-img
          class="mid_img"
          src="../content/photo/vertical_farm_1.png"
        ></v-img>
        <v-img
          class="mid_img"
          src="../content/photo/vertical_farm_2.jpg"
        ></v-img>
        <v-img
          class="mid_img"
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

    <v-row justify="center">
      <v-col xl="6" lg="6" md="6" sm="6" xs="5">
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
      <v-col lg="6" xs="12">
        <v-card class="mx-auto" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-sm-h6 mb-1">
                <p class="list_title_text">
                  <v-icon color="#104b00"> mdi-bug-outline</v-icon> 병해충,
                  바이러스에 강하다
                </p>
              </v-list-item-title>
              <v-list-item-subtitle
                >밀폐형 수직 육묘장은 엄격한 위생관리로 외부의 바이러스와 해충의
                유입을 원천적으로 차단합니다.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
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
