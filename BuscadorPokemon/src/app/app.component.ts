import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
  @Component ({ 
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [ ], 
    styleUrls: ['./app.component.css']
  })

  export class AppComponent {
    titulo = 'Centro de control pokemon';
  }