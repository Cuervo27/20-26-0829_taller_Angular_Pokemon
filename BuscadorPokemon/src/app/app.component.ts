import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
  @Component ({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    styleUrls: ['./app.component.css']
  })

  export class AppComponent {
    titulo = 'Centro de control pokemon';
  }