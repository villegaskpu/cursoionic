import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopoinfoComponent } from './popoinfo/popoinfo.component';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, PopoinfoComponent],
  exports: [HeaderComponent, MenuComponent, PopoinfoComponent],
  imports: [CommonModule, IonicModule, RouterModule],
})
export class ComponentsModule {}
