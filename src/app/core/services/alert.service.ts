import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async displayAlert(title: string, message: any) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: [{
        text: 'OK',
        role: 'cancel',
      }]
    })

    await alert.present();

  }
}
