import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio using NG5';

  menu = [{
  	ComponentName:"Slider",
  	url:"/slider"
  },{
  	ComponentName:"Accordion",
  	url:"/accordion"
  },{
  	ComponentName:"ModalPopup",
  	url:"/modalpopup"
  }];
}
