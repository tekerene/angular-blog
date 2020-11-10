import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarCollapsed = true;
  auth: boolean;

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }

  constructor(public authenticate: AuthService) { }

  ngOnInit() {
    this.auth = this.authenticate.isAuthenticated()
  }
login(){
  this.auth = false;
}
  logout(){
    this.auth = true
    this.authenticate.logout();
    console.log("user login out successfully")
    
  }
}
