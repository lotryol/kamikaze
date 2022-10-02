<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Registro</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    <ion-label>
                      <h2>Registro</h2>
                    </ion-label>
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list>
                    <ion-item>
                      <ion-label position="floating">Nombres</ion-label>
                      <ion-input type="text" v-model="Nombres"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="floating">Apellidos</ion-label>
                      <ion-input type="text" v-model="Apellidos"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="floating">Numero de documento</ion-label>
                      <ion-input type="text" v-model="num_documento"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="floating">Numero de codigo universitario</ion-label>
                      <ion-input type="text" v-model="num_codigo_universidad"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="floating">Fecha de nacimiento</ion-label>
                      <ion-input type="text" v-model="Fecha_nacimiento"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="floating">Correo institucional</ion-label>
                      <ion-input type="text" v-model="Correo_institucional"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="floating">Constraseña</ion-label>
                      <ion-input type="password" v-model="Contrasena"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="floating">Usuario</ion-label>
                      <ion-input type="text" v-model="usuario"></ion-input>
                    </ion-item>
                  </ion-list>
                  <ion-button expand="block" @click="registrar"
                    >Registrar</ion-button
                  >
                  <ion-button expand="block" @click="login"
                    >Iniciar Sesion</ion-button
                  >
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
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
    IonLabel,
    IonCardTitle,
    IonCardHeader,
    IonItem,
    IonList,
    IonButton,
    IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonInput,
    alertController,
  } from "@ionic/vue";
  import { defineComponent } from "vue";
  import router from "@/router";
  import Usr from "../mongodb/connect"
  import dbConnection from "../mongodb/connect"
  export default defineComponent({
    name: "RegisterKamikaze",
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonLabel,
      IonCardTitle,
      IonCardHeader,
      IonItem,
      IonList,
      IonButton,
      IonCardContent,
      IonCard,
      IonCol,
      IonRow,
      IonGrid,
      IonInput,
    },
    data() {
      return {
        Nombres : "",
        Apellidos : "",
        num_documento : "",
        num_codigo_universidad : "",
        Fecha_nacimiento : "",
        Correo_institucional : "",
        Contrasena : "",
        err : ""
      };
    },
    methods: {
      async registrar() {

      },
      login() {
        router.push("/login");
      },
      home() {
        router.push("/Home");
      },
      async errorLogin() {
        const alert = await alertController.create({
          header: "Error",
          message: "Usuario o email ya registrados",
          buttons: ["OK"],
          cssClass: "my-custom-class",
        });
        await alert.present();
      },
      async comparador(){
        console.log("hola")
      }
    },
  });
  </script>
  
  <style>
  </style>