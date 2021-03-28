import { Component, OnInit } from '@angular/core';
import {Planina} from '../Models/Planina'

@Component({
  selector: 'app-planina',
  templateUrl: './planina.component.html',
  styleUrls: ['./planina.component.css']
})
export class PlaninaComponent implements OnInit {

  Ime:String='Jalovec';
  planinas: Array<Planina>=[];

  constructor() {
    let planina=new Planina();
    planina.Id=1;
    planina.Ime="Grintovec";
    planina.Opis="Hec to ni Grintovec"
    planina.ImgUrl="assets/Img/Jalovec.jpg"
    this.planinas.push(planina)
  }

  ngOnInit(): void {
  }

}
