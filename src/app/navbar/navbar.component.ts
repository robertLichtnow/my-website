import { Component, OnInit, Input } from '@angular/core';
import { NavbarMenuOptions } from './navbar-menu-options';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  navbarOption: NavbarMenuOptions;

  NavbarMenuOptions = NavbarMenuOptions;

  constructor() { }

  ngOnInit() {
  }

}
