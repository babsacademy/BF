import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FunPage } from '../../pages/fun/fun';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 fun(){
    this.navCtrl.push(FunPage);
  }
}
