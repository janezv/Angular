import { Component, OnInit } from '@angular/core';
import {Planina} from '../Models/Planina';


@Component({
  selector: 'app-planine',
  templateUrl: './planine.component.html',
  styleUrls: ['./planine.component.css']
})
export class PlanineComponent implements OnInit {
  planinas:Array<Planina>=[]
  tT:String='Tetni Title'

  constructor() {
    let planina=new Planina();
    planina.Id='1';
    planina.Title='Triglav';
    planina.Url='../../../assets/Imgs/Triglav.jpg';
    planina.Text='Some quick example text to build on the card title and make up the bulk of the card';
    this.planinas.push(planina);
    planina=new Planina();
    planina.Id='1';
    planina.Title='Grintovec';
    planina.Url='../../../assets/Imgs/Grintovec.jpg';
    planina.Text='Grintovec text';
    this.planinas.push(planina);
   }

  ngOnInit(): void {
  }

}
