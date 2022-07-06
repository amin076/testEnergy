import { Component } from '@angular/core';
import { FestivalDataService } from './core/data-services/festival-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ea-coding-test';
  constructor(private api:FestivalDataService)
  {

  }
  ngOnInit(): void{
 this.api.getFestivalsData().subscribe((data)=>{
    console.warn("data",data)
 })

  }
}

