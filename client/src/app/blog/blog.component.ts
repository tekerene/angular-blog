import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../home.service';
import {PostService} from '../post.service'
import {CategoryService} from '../category.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({selector: 'app-blog', templateUrl: './blog.component.html', styleUrls: ['./blog.component.scss']})
export class BlogComponent implements OnInit {


    /**
   * filter
   */
    // postFilter: string;
    selectedUser : number;
    posts = [];
    isLoadingResults = true;
    // data: Array<any>
    totalRecords : String;
    page :number = 1;
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

    // customSearchFn(term : string, item : any) {
    //     term = term.toLowerCase();

    //     // Creating and array of space saperated term and removinf the empty values using filter
    //     let splitTerm = term.split(' ').filter(t => t);

    //     let isWordThere = [];

    //     // Pushing True/False if match is found
    //     splitTerm.forEach(arr_term => {
    //         let search = item['search_label'].toLowerCase();
    //         isWordThere.push(search.indexOf(arr_term) != -1);
    //     });

    //     const all_words = (this_word) => this_word;
    //     // Every method will return true if all values are true in isWordThere.
    //     return isWordThere.every(all_words);
    // }

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

