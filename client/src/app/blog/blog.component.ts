import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { CategoryService } from '../_services/category.service';
import { HomeService } from '../_services/home.service';

@Component({selector: 'app-blog', templateUrl: './blog.component.html', styleUrls: ['./blog.component.scss']})
export class BlogComponent implements OnInit {


    /**
   * filter
   */
    // postFilter: string;
    selectedUser : string;
    posts = [];
    isLoadingResults = true;
    // data: Array<any>
    totalRecords : any;
    page :any = 1;
    pageOfItems : Array<any>;
    categories = [];
    users = [];
    singleUser = [];

    constructor(
      private route: ActivatedRoute,
      private authApi : AuthService, 
      private catApi : CategoryService, 
      private api : HomeService) {
        this.posts = new Array<any>();
    }

    ngOnInit() {
        this.api.getPosts().subscribe((res : any) => {
            this.posts = res;
            // this.data = res.results;
            // console.log(this.data = res.results);

            console.log(this.posts);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
        this.filterPost();
        this.getCategories();
        this.getusers();
        this.getuser(this.route.snapshot.params.id)
    }

    /**
 * @filter blog
 */

    filterPost() {
        this.api.getPosts().subscribe((res : any) => {
            this.posts = res.map(o => { // console.log(o)
                o.search_label = ` ${
                    o.category
                } ${
                    o.id
                } ${
                    o.postTitle
                } ${
                    o.postAuthor
                } 
        ${
                    o.postDesc
                } ${
                    o.postContent
                } ${
                    o.postReference
                } ${
                    o.postImgUrl
                }
         ${
                    o.created
                } ${
                    o.updated
                }
      `
                return o
            });
            console.log(this.posts);
        }, error => {
            console.log(error);
        });

    }

    getCategories() {
        this.catApi.getCategories().subscribe((res : any) => {
            this.categories = res;
            console.log(this.categories);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }
    getusers() {
        this.authApi.getUsers().subscribe((res : any) => {
            this.users = res;
            console.log(this.users);
            this.isLoadingResults = false;
        }, err => {
            console.log(err);
            this.isLoadingResults = false;
        });
    }

    getuser(id: any) {
      this.authApi.getUser(id).subscribe((res : any) => {
          this.singleUser = res;
          console.log(this.singleUser);
          this.isLoadingResults = false;
      }, err => {
          console.log(err);
          this.isLoadingResults = false;
      });
  }
}

