import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp({
        apiKey: "AIzaSyAu4zpwTdJVpKGDh8ymLGh_T3d4GD3kBJg",
        authDomain: "coffeecoin-332fc.firebaseapp.com",
        databaseURL: "https://coffeecoin-332fc.firebaseio.com",
        projectID: "coffeecoin-332fc"
        storageBucket: "coffeecoin-332fc.appspot.com",
        messagingSenderId: "430230381152"
      });
    });
  }
}

