import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor( public alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Ok',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Ok: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentInput() {
    const alert = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Nombre',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'ingresa tu nombre'
        }
      ],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          handler: () => {
            console.log('btn cancelar');
          }

        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('btn ok : ', data);
            this.titulo = data.name1;
          }
        }
      ]
    });
    await alert.present();
  }

}
