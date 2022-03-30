import { Component, OnInit } from '@angular/core';
import {finalize, Observable} from "rxjs";
import {CharactersApiService} from "./shared/characters-api.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  allCharacters: any[] = [];
  paginaAtual: number = 1;
  itemsPerPage: number = 8;
  total: number = 10;
  //1560

  constructor(private characterSvc: CharactersApiService) { }
  ngOnInit(): void {
    this.getCharacters(this.paginaAtual);
  }

  getCharacters(pageNumber: number){
     this.characterSvc.getAllCharacters (this.itemsPerPage, pageNumber)
      .subscribe(
        (resposta)=>{
          //dispara quando success
          this.allCharacters = resposta
            console.log(resposta)
        }
        , (erro) => {
          //dispara se der erro
        });
  }

  consultaPagina(e: number) {
    this.paginaAtual = e;
    this.getCharacters(this.paginaAtual)
  }
}
