import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popoinfo',
  templateUrl: './popoinfo.component.html',
  styleUrls: ['./popoinfo.component.scss'],
})
export class PopoinfoComponent implements OnInit {
  items = Array(40);
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick( valor: number) {
    console.log('item ', valor);
    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
