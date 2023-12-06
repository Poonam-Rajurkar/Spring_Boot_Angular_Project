import { Component } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.scss']
})
export class CreateStaffComponent {

  staff : Staff = new Staff();

  constructor(private staffService : StaffService,
    private router : Router){ }

  saveStaff(){
    this.staffService.createStaff(this.staff).subscribe(data => {
      console.log(data);
      this.goToStaffList();
    }),
      (error: any) => console.log(error);
    
  }

  goToStaffList(){
    this.router.navigate(['/staffs']);
  }

  onSubmit(){
    console.log(this.staff);
    this.saveStaff();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Staff added succesfully!",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
