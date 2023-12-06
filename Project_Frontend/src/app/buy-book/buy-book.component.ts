import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.scss']
})
export class BuyBookComponent {

  buy(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your book has been ordered succesfully!",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
