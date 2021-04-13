import { Component, Input, OnInit } from '@angular/core';
import {Planina} from '../../Models/Planina'

@Component({
  selector: 'app-planina',
  templateUrl: './planina.component.html',
  styleUrls: ['./planina.component.css']
})
export class PlaninaComponent implements OnInit {
  @Input()planina?:Planina;
  @Input()titleIn?:String;

  constructor()
  {
  }

  ngOnInit(): void {
    console.log('Težave')
  }

}
