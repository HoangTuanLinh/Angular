import {Component} from "@angular/core";
@Component({
  selector:"forecast",
  templateUrl:"./forecast.component.html"
})
export class ForecastComponent{
  weathers = [
    {
      city:"Hanoi, Vietnam",
      temp: 15,
      hump: 95,
      press: 1005,
      desc:"Trời rét, không sương mù, không mây",
      icon:"04n"
    },
    {
      city:"Hanoi, Vietnam",
      temp: 15,
      hump: 95,
      press: 1005,
      desc:"Trời rét, không sương mù, không mây",
      icon:"04n"
    }, {
      city:"Hanoi, Vietnam",
      temp: 15,
      hump: 95,
      press: 1005,
      desc:"Trời rét, không sương mù, không mây",
      icon:"04n"
    }
  ];
}
