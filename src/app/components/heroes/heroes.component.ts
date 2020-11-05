import { Component, OnInit } from '@angular/core';
import { HeroesService, IHero } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:IHero[] = [];

  constructor(  private _heroesService: HeroesService, 
                private router:Router ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  showHero(idx:number){
    this.router.navigate(['/hero', idx]);
  }

}
