import { Component, OnInit } from '@angular/core';
import {Planina} from '../Models/Planina'

@Component({
  selector: 'app-planina',
  templateUrl: './planina.component.html',
  styleUrls: ['./planina.component.css']
})
export class PlaninaComponent implements OnInit {
  planina:Planina;

  constructor()
  {
    this.planina=new Planina();
    this.planina.Id='1';
    this.planina.Title='Triglav'
    this.planina.Url='../../../assets/Imgs/Triglav.jpg'
    this.planina.Text='Some quick example text to build on the card title and make up the bulk of the card'
  }

  ngOnInit(): void {
  }

}
