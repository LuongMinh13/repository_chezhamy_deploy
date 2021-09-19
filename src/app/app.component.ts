import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chezhamy';

  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }

  toMenu(){
    document.getElementById("menu")?.scrollIntoView({behavior:"smooth"});
  }

  toLivraison(){
    document.getElementById("livraison")?.scrollIntoView({behavior:"smooth"});
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }
}

