import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  Data:Array<any> = [{
    Title: "Image 1",
    URL: "assets/images/img_fjords_wide.jpg"
  },{
    Title: "Image 2",
    URL: "assets/images/img_lights_wide.jpg"
  },{
    Title: "Image 3",
    URL: "assets/images/img_mountains_wide.jpg"
  },{
    Title: "Image 4",
    URL: "assets/images/img_nature_wide.jpg"
  }];
  CurrentIndex:any = 0;
  SlideWidth:any = 1000;
  MoveBy:any;
  NumSlides:any = this.Data.length;

  constructor() { }

  ngOnInit() {
  }

  GoBack( event ){
    event.preventDefault();
    if ( this.CurrentIndex >0 ) { this.CurrentIndex--};
    let MoveByPixels = this.SlideWidth * this.CurrentIndex;
    this.MoveBy = "translateX(-"+ MoveByPixels +"px)";
  }
  MoveNext( event ){
    event.preventDefault();
    if ( this.CurrentIndex < this.NumSlides-1) { this.CurrentIndex++};
    let MoveByPixels = this.SlideWidth * this.CurrentIndex;
    this.MoveBy = "translateX(-"+ MoveByPixels +"px)";
  }
  MoveTo( _index, _event ){
    _event.preventDefault();
    this.CurrentIndex = _index || 0;
    let MoveByPixels = this.SlideWidth * this.CurrentIndex;
    this.MoveBy = "translateX(-"+ MoveByPixels +"px)";
  }

}