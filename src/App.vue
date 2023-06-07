<template>
  <v-app class="ma-0 pa-0">
    <v-main>
      <AppHeader
        @move-to-sample="MoveToSample"
        @move-to-info="MoveToInfo"
        class="header"
      ></AppHeader>
      <AppContent ref="methodRequest"></AppContent>
      <AppFooter></AppFooter>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppContent from "./views/content/AppContent.vue";
export default {
  name: "App",
  data: () => ({
    isSample: false,
    isInfo: false,
  }),
  components: {
    AppHeader,

    AppContent,
    AppFooter,
  },

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      /* this.isMobile = window.innerWidth < 600 */
    },
    MoveToSample(data) {
      console.log("샘플신청으로 이동  - 부모", data);

      this.$refs.methodRequest.MoveToSample(data);
    },
    MoveToInfo(data) {
      console.log("소개로 이동  - 부모", data);
      this.$refs.methodRequest.MoveToInfo(data);
    },
  },
};
</script>
<style>
  @font-face {
  font-family: "Puradak_header";
  src: url("/src/assets/fonts/Puradak\ Gentle\ Gothic.ttf") format("woff");
  font-style: normal;
  font-weight: normal;
} 

.header {
  font-family: "Puradak_header";
} 

</style>
