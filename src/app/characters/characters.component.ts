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
  itemsPerPage: number = 20;
  total: number = 0;
  //1560

  constructor(private characterService: CharactersApiService) { }
  ngOnInit(): void {
    this.getCharacters(this.paginaAtual);
  }

  getCharacters(pageNumber: number){
     this.characterService.getAllCharacters(this.itemsPerPage, pageNumber * this.itemsPerPage)
      .subscribe(
        (resposta)=>{
          //dispara quando success
          this.allCharacters = resposta.results
          this.total = resposta.total
            console.log(resposta)
        }
        , (erro) => {
          //dispara se der erro
        });
  }

  consultaPagina(e: number) {
    this.paginaAtual = e;
    console.log(e)
    this.getCharacters(this.paginaAtual)
  }
}
