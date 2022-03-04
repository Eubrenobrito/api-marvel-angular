import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CharactersApiService} from "./character/shared/characters-api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  allCharacters: Observable<any> | undefined;
  paginaAtual: number = 1;
  itemsPerPage: number = 8;
  total: number = 1559;

  constructor(private characterSvc: CharactersApiService) { }
  ngOnInit(): void {
    this.getCharacters(this.paginaAtual);
  }

  getCharacters(pageNumber: number){
    this.allCharacters = this.characterSvc.getAllCharacters (this.itemsPerPage, pageNumber);
  }

  consultaPagina(e: number) {
    this.paginaAtual = e;
    this.getCharacters(this.paginaAtual)
  }
}
