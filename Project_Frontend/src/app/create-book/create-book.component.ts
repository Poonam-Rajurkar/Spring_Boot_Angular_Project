import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  book : Book = new Book();

  constructor(private bookService : BookService,
    private router : Router){ }
  
  saveBook(){
    this.bookService.createBook(this.book).subscribe(data => {
      console.log(data);
      this.goToBookList();
    }),
    (error:any) => console.log(error);
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

  onSubmit(){
    console.log(this.book);
    this.saveBook();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Book added succesfully!",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
