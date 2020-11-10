import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule, 
  MatPaginator} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BycategoryComponent } from './bycategory/bycategory.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { MatContenteditableModule } from 'mat-contenteditable';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { DisqusModule } from 'ngx-disqus';
import { DISQUS_SHORTNAME } from 'ngx-disqus';
import { CommonModule } from '@angular/common';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { NgSelectConfig } from '@ng-select/ng-select';
//  import { ɵs } from '@ng-select/ng-select';
// import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactComponent } from './contact/contact.component';
import { LoginAdminComponent } from './auth/login-admin/login-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DetailsComponent,
    CategoryComponent,
    PostComponent,
    CategoryDetailsComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    PostDetailsComponent,
    PostAddComponent,
    PostEditComponent,
    BycategoryComponent,
    AdminComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    JwPaginationComponent,
    ContactComponent,
    LoginAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatOptionModule,
    CKEditorModule,
    MatContenteditableModule,
    NgxPaginationModule,
    DisqusModule.forRoot('sarkblog'),
    CommonModule,
    Ng2SearchPipeModule,
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
