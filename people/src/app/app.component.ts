import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'game_app';

  data:any=[];
  httpCliet=inject(HttpClient)

  ngOnInit(): void {
  
    this.httpCliet.get('https://randomuser.me/api?results=50')
    .subscribe((w:any)=>{
      console.log(w.results)
      this.data=w.results;
    })
  
  }
  

  
}
