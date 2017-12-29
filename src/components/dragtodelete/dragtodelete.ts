import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[dragtodelete]',
	host: {	'(ionDrag)': 'dragToDelete($event)' }
})

export class DragtodeleteComponent {

  @Output() dragtodelete: any = new EventEmitter();
  triggered: boolean = false;
	constructor() {
	}

	dragToDelete(ev){

		if(Math.abs(ev.getOpenAmount()) > 120 && !this.triggered){
      //console.log("-----------"+Math.abs(ev.getSlidingPercent()));
      this.triggered = true;
      this.dragtodelete.emit(true);
		}

	}
}


