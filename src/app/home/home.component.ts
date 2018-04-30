import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	menu = [{
  	ComponentName:"Slider",
  	url:"/slider"
  },{
  	ComponentName:"Accordion",
  	url:"/accordion"
  },{
  	ComponentName:"ModalPopup",
  	url:"/modalpopup"
  },{
    ComponentName:"ToBeAdded",
    url:"/comingsoon"
  },{
    ComponentName:"ToBeAdded",
    url:"/comingsoon"
  },{
    ComponentName:"ToBeAdded",
    url:"/comingsoon"
  },{
    ComponentName:"ToBeAdded",
    url:"/comingsoon"
  },{
    ComponentName:"ToBeAdded",
    url:"/comingsoon"
  },{
    ComponentName:"ToBeAdded",
    url:"/comingsoon"
  }];
  constructor() { }

  ngOnInit() {
  }

  

}