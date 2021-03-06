import {CharactersComponent} from "./app/characters/characters.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


const routes: Routes = [
  {
    path:'', redirectTo: '/characters', pathMatch: 'full'
  },
  {
    path:'characters', component: CharactersComponent
  },
  {
    path:'hqs', component: CharactersComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
