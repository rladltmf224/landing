<template>
    <v-container class="pa-0 ma-0">
        <v-app-bar app color="white" elevation="0">
            <v-btn text>
                <v-img src="./logo_seedling.png" width="35"></v-img>
            </v-btn>
            <div class="d-flex align-center">
                한국표준육묘
            </div>
            <v-spacer></v-spacer>
            <v-btn text  @click="MoveToInfo()">
                <span class="mr-2">소개</span>
            </v-btn>
            <v-btn text @click="MoveToSample()">
                <span class="mr-2">샘플신청</span>
            </v-btn>
        </v-app-bar>
    </v-container>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class AppHeader extends Vue {
    isSample: boolean = false;
    isInfo: boolean = false;
    MoveToSample() {
        this.$emit("move-to-sample", this.isSample)
    }
    MoveToInfo() {
        this.$emit("move-to-info", this.isInfo)
    }
}
</script> 

<style lang="scss" scoped></style>