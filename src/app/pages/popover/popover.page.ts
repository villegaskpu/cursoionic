import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoinfoComponent } from '../../components/popoinfo/popoinfo.component';

@Component({
  selector: "app-popover",
  templateUrl: "./popover.page.html",
  styleUrls: ["./popover.page.scss"],
})
export class PopoverPage implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  async mostrarPop(event) {
    const popover = await this.popoverController.create({
      component: PopoinfoComponent,
      event,
      mode: 'ios'
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log('padre: ', data);
  }
}
