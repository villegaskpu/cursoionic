import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Flash', 'Mujer maravilla'];
  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', this.personajes);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.personajes = event.detail.complete(this.personajes);

    // After complete is called the items will be in the new order
    console.log('After complete', this.personajes);
  }

}
