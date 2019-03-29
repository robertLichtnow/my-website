import { Component, OnInit } from '@angular/core';
import { NavbarMenuOptions } from './navbar/navbar-menu-options';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Robddev';

  constructor(private router: Router,
              private titleService: Title){
    this.titleService.setTitle(this.title);
  }

  parseRoute(): NavbarMenuOptions{
    switch(this.router.url){
      case '/bio':
        return NavbarMenuOptions.BIO;
      case '/skills':
        return NavbarMenuOptions.SKILLS;
      case '/hobbies':
        return NavbarMenuOptions.HOBBIES;
      case '/contact':
        return NavbarMenuOptions.CONTACT;
      case '/home':
      default:
        return NavbarMenuOptions.HOME;
    }
  }

  parseLeftLink(){
    switch(this.router.url){
      case '/bio':
        return NavbarMenuOptions.HOME;
      case '/skills':
        return NavbarMenuOptions.BIO;
      case '/hobbies':
        return NavbarMenuOptions.SKILLS;
      case '/contact':
        return NavbarMenuOptions.HOBBIES;
      case '/home':
      default:
        return '';
    }
  }

  parseRightLink(){
    switch(this.router.url){
      case '/home':
        return NavbarMenuOptions.BIO;
      case '/bio':
        return NavbarMenuOptions.SKILLS;
      case '/skills':
        return NavbarMenuOptions.HOBBIES;
      case '/hobbies':
        return NavbarMenuOptions.CONTACT;
      case '/contact':
      default:
        return '';
    }
  }

}
