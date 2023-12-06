import { Component } from '@angular/core';
import { Reader } from '../reader';
import { ReaderService } from '../reader.service';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-reader',
  templateUrl: './create-reader.component.html',
  styleUrls: ['./create-reader.component.scss']
})
export class CreateReaderComponent {

  reader : Reader = new Reader();

  constructor(private readerService : ReaderService,
    private router : Router) {}

  saveReader(){
    this.readerService.createReader(this.reader).subscribe(data => {
      console.log(data);
      this.goToReaderList();
    }),
      (error: any) => console.log(error);
  }

  goToReaderList(){
    this.router.navigate(['/readers']);
  }

  onSubmit(){
    console.log(this.reader);
    this.saveReader();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Reader created succesfully!",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
