import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	items: Array<{id: any,name: any}>;

	constructor(public navCtrl: NavController) {

         this.getitems()

  }

  getitems(){
    this.items  = [{id: 1,name: "abc"},{id: 2,name: "def"},{id: 3,name: "ghi"}];
  }

	handleOverslide(id){
    console.log(id);
    this.items.splice(id,1);
	}

}
