import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reader } from '../reader';
import { ReaderService } from '../reader.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-reader',
  templateUrl: './update-reader.component.html',
  styleUrls: ['./update-reader.component.scss']
})
export class UpdateReaderComponent {

  user_id : number;
  reader : Reader = new Reader();

  constructor(private readerService : ReaderService,
    private route : ActivatedRoute,
    private router : Router) {}

    ngOnInit() : void {

      this.user_id = this.route.snapshot.params['user_id'];
 
      this.readerService.getReaderById(this.user_id).subscribe(data => {
        this.reader = data;
      }),
        (error: any) => console.log(error);   
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
    this.readerService.updateReader(this.user_id, this.reader).subscribe(data => {
      this.goToReaderList();
    }),
      (error: any) => console.log(error);

      Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        this.goToReaderList();
      }
    });
    
  }

  goToReaderList(){
    this.router.navigate(['/readers']);
  }
}
