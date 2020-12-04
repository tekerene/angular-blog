import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from './category/category';
import { AuthService } from './_services/auth.service';
import { HomeService } from './_services/home.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  categories: Category[] = [];
  loginStatus = false;

  constructor(private api: HomeService, private authService: AuthService, private router: Router) { }
  activeAdmin: {
    fullName: string;
    bio: string;
    username: string;
    userProfileUrl: string;
  };

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((status: any) => {
      console.log(status);
      if (status === true) {
        this.loginStatus = true;
      } else {
        this.loginStatus = false;
      }
    });
    this.api.getCategories()
      .subscribe((res: any) => {
        this.categories = res;
        console.log(this.categories);
      }, err => {
        console.log(err);
      });
  }

  // logout() {
  //   this.authService.logout()
  //     .subscribe((res: any) => {
  //       this.router.navigate(['/']);
  //     }, err => {
  //       console.log(err);
  //     });
  // }

  getActiveAdmin() {
    if (
      Boolean(localStorage.getItem("username")) &&
      Boolean(localStorage.getItem("imageurl")) &&  Boolean(localStorage.getItem("bio")) 
    ) {
      this.activeAdmin.username = localStorage.getItem("username");
      this.activeAdmin.userProfileUrl = localStorage.getItem("imageurl");
      this.activeAdmin.bio = localStorage.getItem("bio");
    } else {
      this.activeAdmin = {
        ...JSON.parse(localStorage.getItem("sark_blog_admin_details")),
      };
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
