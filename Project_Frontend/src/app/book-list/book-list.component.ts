import { Component} from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books : Book[];

  constructor(private bookService : BookService,
    private router : Router){ }

  ngOnInit() : void{
    this.bookService.getBooksList().subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

  private getBooks(){
    this.bookService.getBooksList().subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

  updateBook(book_id : any){
    this.router.navigate(['update-book', book_id]);
  }

  deleteBook(book_id : any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

      //Code to execute
    this.bookService.deleteBook(book_id).subscribe(data => {
      console.log(data);
      this.getBooks();  
    })

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }

  viewBook(book_id : number){
    this.router.navigate(['book-detail', book_id]);
  }
}
