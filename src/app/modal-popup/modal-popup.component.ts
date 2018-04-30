import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css']
})
export class ModalPopupComponent implements OnInit {

	ShowPopUp:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  OpenPopUp( e ){
  	e.preventDefault();
  	this.ShowPopUp = true;
  }
  ClosePopUp( e ){
  	e.preventDefault();
  	this.ShowPopUp = false;
  }

}