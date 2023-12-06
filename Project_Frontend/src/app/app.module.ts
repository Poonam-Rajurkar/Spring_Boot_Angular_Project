import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateReaderComponent } from './create-reader/create-reader.component';
import { FormsModule } from '@angular/forms';
import { UpdateReaderComponent } from './update-reader/update-reader.component';
import { AdminComponent } from './admin/admin.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { ReaderDetailComponent } from './reader-detail/reader-detail.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BuyBookComponent } from './buy-book/buy-book.component';


@NgModule({
  declarations: [
    AppComponent,
    ReaderListComponent,
    HomePageComponent,
    CreateReaderComponent,
    UpdateReaderComponent,
    AdminComponent,
    StaffListComponent,
    CategoryListComponent,
    CreateStaffComponent,
    CreateCategoryComponent,
    UpdateStaffComponent,
    UpdateCategoryComponent,
    ReaderDetailComponent,
    StaffDetailComponent,
    BookListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    BookDetailComponent,
    BuyBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
