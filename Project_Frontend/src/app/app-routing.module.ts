import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateReaderComponent } from './create-reader/create-reader.component';
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

const routes: Routes = [
  { path : 'readers', component: ReaderListComponent},
  { path : 'home-page', component : HomePageComponent},
  { path : 'create-reader', component : CreateReaderComponent },
  { path : 'update-reader/:user_id', component : UpdateReaderComponent},
  { path : 'admin-page', component : AdminComponent},
  { path : 'staffs', component : StaffListComponent},
  { path : 'categories', component : CategoryListComponent},
  { path : 'create-staff', component : CreateStaffComponent},
  { path : 'create-category', component : CreateCategoryComponent},
  { path : 'update-staff/:staff_id', component : UpdateStaffComponent},
  { path : 'update-category/:category_id', component :UpdateCategoryComponent},
  { path : 'reader-details/:user_id', component : ReaderDetailComponent },
  { path : 'staff-detail/:staff_id', component : StaffDetailComponent },
  { path : 'books', component : BookListComponent},
  { path : 'create-book', component : CreateBookComponent},
  { path : 'update-book/:book_id', component : UpdateBookComponent},
  { path : 'book-detail/:book_id', component : BookDetailComponent},
  { path : 'buy-book', component : BuyBookComponent},
  { path : '', redirectTo: 'home-page',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
