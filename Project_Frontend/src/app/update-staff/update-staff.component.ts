import { Component } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.scss']
})
export class UpdateStaffComponent {

  staff_id : number;
  staff : Staff = new Staff();

  constructor(private staffService : StaffService,
    private route : ActivatedRoute,
    private router : Router){ }

  ngOnInit() : void{
    this.staff_id = this.route.snapshot.params['staff_id'];

    this.staffService.getStaffById(this.staff_id).subscribe(data => {
      this.staff = data;
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
          this.staffService.updateStaff(this.staff_id, this.staff).subscribe(data => {
            this.goToStaffList();
          }),
          (error: any) => console.log(error);

        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        this.goToStaffList();
      }
    });
    
  }

  goToStaffList(){
    this.router.navigate(['/staffs']);
  }
}
