import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent {

  book_id : number;
  book : Book = new Book();

  constructor(private bookService : BookService,
    private route : ActivatedRoute,
    private router : Router){}
  
  ngOnInit():void{
    this.book_id = this.route.snapshot.params['book_id'];

    this.bookService.getBookById(this.book_id).subscribe(data => {
      this.book = data;
    }),
    (error : any) => console.log(error);
  }
  
  onSubmit(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

    // Code to Save Update
    this.bookService.updateBook(this.book_id, this.book).subscribe(data => {
      this.goToBookList();
    }),
    (error: any) => console.log(error);

    Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        this.goToBookList();
      }
    });
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }
}
