<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Kamikaze</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ username }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-card>
            <ion-card-header>
              <ion-row class="ion-justify-content-center">
                <ion-avatar>
                  <img
                    alt="Silhouette of a person's head"
                    src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"
                  />
                </ion-avatar>
              </ion-row>
              <ion-card-title class="ion-text-center">{{
                nombre + " " + apellido
              }}</ion-card-title>
              <ion-card-subtitle class="ion-text-center">{{ username }}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <ion-item>
                <ion-label>
                  <h5>Biografia</h5>
                  <p class="ion-text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat, fuga optio obcaecati enim voluptate expedita sequi, blanditiis modi, nemo incidunt! Voluptate voluptatibus molestias esse veniam nostrum, fuga quae laborum!</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h5>Programa</h5>
                  <p>Esta es mi bio</p>
                </ion-label>
              </ion-item>
              <ion-item>
                <ion-label>
                  <h5>Semestre</h5>
                  <p>Esta es mi bio</p>
                </ion-label>
              </ion-item>
            </ion-card-content>
    
          </ion-card>
        </ion-row>
      </ion-grid>
      <ion-fab horizontal="bottom" vertical="top">
          <ion-fab-button>
            <ion-icon :icon="cog"></ion-icon>
          </ion-fab-button>
          <ion-fab-list>
            <ion-fab-button color="light">
              <ion-icon :icon="create"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light">
              <ion-icon :icon="trash"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
    </ion-content>
  </ion-page>
</template>
  
  <script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonButtons,
  IonMenuButton,
} from "@ionic/vue";
import { 
  add, 
  cog,
  create,
  trash
} from 'ionicons/icons';
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfile",
  components: {
    IonContent,
    IonMenu,
    // IonHeader,
    // IonPage,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      username: "LeoRami99",
      nombre: "Leonardo",
      apellido: "Ramirez",
    };
  },
  setup() {
    return {
      add,
      cog,
      create,
      trash
    };
  },
});
</script>
  
<style scoped>
ion-toolbar {
  --color: white;
  --backdrop-filter: blur(10px);
  --backdrop-background: rgba(0, 0, 0, 0.5);
}
</style>
  