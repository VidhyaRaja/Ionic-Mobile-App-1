<template>
  <base-layout page-default-back-link="/home">
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="center">
          <ion-button size="large" fill="solid" router-link="/new_ticket">
            <ion-icon :icon="camera"></ion-icon> &nbsp; Scan
          </ion-button>
        </div>
      </ion-content>
    </ion-page>
  </base-layout>
</template>

<script lang="ts">
import { camera } from "ionicons/icons";
import { Camera, CameraResultType } from "@capacitor/camera";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
} from "@ionic/vue";

export default {
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
  },
  setup() {
    return { camera };
  },
};
</script>
<style scoped>
.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>