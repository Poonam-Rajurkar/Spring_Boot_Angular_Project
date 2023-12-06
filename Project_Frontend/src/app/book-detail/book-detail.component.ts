import { Component, numberAttribute } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  book_id : number;
  book : Book;

  constructor(private route : ActivatedRoute,
    private bookService : BookService) { }

  ngOnInit() : void {
    this.book_id = this.route.snapshot.params['book_id'];

    this.book = new Book();
    this.bookService.getBookById(this.book_id).subscribe(data => {
      this.book = data;
    })
  }

  buy(){

  }
}
