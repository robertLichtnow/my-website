import { Component } from '@angular/core';
import { NavbarMenuOptions } from './navbar/navbar-menu-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-website';

  constructor(private router: Router){

  }

  parseRoute(): NavbarMenuOptions{
    switch(this.router.url){
      case '/bio':
        return NavbarMenuOptions.BIO;
      case '/experience':
        return NavbarMenuOptions.EXPERIENCE;
      case '/hobbies':
        return NavbarMenuOptions.HOBBIES;
      case '/contato':
        return NavbarMenuOptions.CONTACT;
      case '/home':
      default:
        return NavbarMenuOptions.HOME;
    }
  }
}
