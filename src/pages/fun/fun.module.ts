import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunPage } from './fun';

@NgModule({
  declarations: [
    FunPage,
  ],
  imports: [
    IonicPageModule.forChild(FunPage),
  ],
})
export class FunPageModule {}
