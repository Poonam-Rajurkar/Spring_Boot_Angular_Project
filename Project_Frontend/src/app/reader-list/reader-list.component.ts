import { Component } from '@angular/core';
import { Reader } from '../reader';
import { ReaderService } from '../reader.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.scss']
})
export class ReaderListComponent {

  readers : Reader[];
  
  constructor(private readerService : ReaderService,
    private router : Router){}

  ngOnInit(): void {
    this.readerService.getReaders().subscribe((data : Reader[]) => {
      console.log(data);
      this.readers = data;
    });
  }

  private getReaders(){
    this.readerService.getReaders().subscribe((data : Reader[]) => {
      console.log(data);
      this.readers = data;
    });
  }

  updateReader(user_id : any){
    this.router.navigate(['update-reader', user_id]);
  }

  deleteReader(user_id : any){
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
      this.readerService.deleteReader(user_id).subscribe(data => {
      console.log(data);
      this.getReaders();
    })

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

  }

  viewReader(user_id : any){
    this.router.navigate(['reader-details', user_id]);
  }
}
