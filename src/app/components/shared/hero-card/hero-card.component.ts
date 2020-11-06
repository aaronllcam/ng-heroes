import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHero } from '../../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero :IHero;
  @Input() index:number;
  @Output() selectedHero:EventEmitter<number>;
  
  constructor(private router:Router) { 
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showHero(){
    // console.log(this.index);
    // this.router.navigate(['/hero', this.index]);
    this.selectedHero.emit(this.index);
  }

}
