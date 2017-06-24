import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }



  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Enter Password',
      message: "For Origin Hudson Ice Coffee",
      inputs: [
        {
          name: 'title',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Claim',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  navigate() {

  	this.navCtrl.push('OrderPage');
  }

}
