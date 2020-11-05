import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, IHero } from '../../services/heroes.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:IHero[];
  searchValue:string;
  constructor(  private _activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                private router:Router ) { 

    
  }

  ngOnInit(): void {
    
    this._activatedRoute.params.subscribe( params => {
      this.searchValue = params.searchvalue;
      this.heroes = this._heroesService.searchHeroes(params.searchvalue);
      
    })

  }
  showHero(idx:number){
    this.router.navigate(['/hero', idx]);
  }

}
