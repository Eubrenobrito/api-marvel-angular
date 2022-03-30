import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  @Input()
  character: any;


  constructor() { }

  ngOnInit(): void {
  }

}
