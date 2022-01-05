<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container" :fullscreen="true">
        <div class="bg-grad">
          <div class="ion-padding">
            <img
              alt="logo"
              height="40"
              src="../assests/logo/firm-text-logo-dark3.png"
            />
            <h1 class="text-white">Maintainence Manager</h1>
          </div>
        </div>
        <div class="alert-container">
          <div class="btn-grad yellow" fill="clear">
            <ion-icon
              size="large"
              slot="icon-only"
              :icon="notifications"
            ></ion-icon>
            <p>Open</p>
            <h1>2</h1>
          </div>
          <div class="btn-grad green" fill="clear">
            <ion-icon
              size="large"
              slot="icon-only"
              :icon="notifications"
            ></ion-icon>
            <p>Assigned</p>
            <h1>4</h1>
          </div>
        </div>
        <div class="alert-container">
          <div class="btn-grad purple" fill="clear">
            <ion-icon
              size="large"
              slot="icon-only"
              :icon="notifications"
            ></ion-icon>
            <p>Resolved</p>
            <h1>2</h1>
          </div>
          <a class="btn-grad blue" href="/scan">
            <div>
              <ion-icon
                size="large"
                slot="icon-only"
                :icon="notifications"
              ></ion-icon>
              <p>New Ticket</p>
              <ion-icon size="large" slot="icon-only" :icon="add"></ion-icon>
            </div>
          </a>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonIcon } from "@ionic/vue";
import { defineComponent } from "vue";
import { notifications, add } from "ionicons/icons";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonIcon,
  },
  data() {
    return { notifications, add };
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
}
#container {
  height: 100%;
}

.bg-grad {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    204deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(109, 19, 134, 1) 100%,
    rgba(74, 0, 255, 1) 100%
  );
  margin-bottom: 30px;
}

.text-white {
  color: white;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.alert-container {
  display: flex;
  padding: 10px;
}

.pd-top {
  padding-top: 60px;
}

.yellow {
  background: rgb(233, 215, 76);
}

.green {
  background: rgb(55, 177, 55);
}

.blue {
  background: rgb(49, 188, 238);
}

.purple {
  background: rgb(189, 60, 228);
}

.btn-grad {
  flex: 1;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 0;
  height: 25vh;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 6px #eee;
  border-radius: 15px;
  white-space: normal;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
  /* animation: pulse 1.5s; */
}

.btn-grad:first-child {
  margin-right: 20px;
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 1 0 10px rgba(90, 153, 212, 0);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
}
</style>