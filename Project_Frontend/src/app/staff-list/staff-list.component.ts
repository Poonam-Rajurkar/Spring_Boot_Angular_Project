import { Component } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent {

  staffs : Staff[];

  constructor(private staffService : StaffService,
    private router : Router) { }

  ngOnInit(): void {
    this.staffService.getStaffList().subscribe((data : Staff[]) => {
      console.log(data);
      this.staffs = data;
    });
  }

  private getStaffs(){
    this.staffService.getStaffList().subscribe((data : Staff[]) => {
      console.log(data);
      this.staffs = data;
    });
  }

  updateStaff(staff_id : number){
    this.router.navigate(['update-staff', staff_id]);
  }

  deleteStaff(staff_id :number){
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

        //Code for delete the entry
        this.staffService.deleteStaff(staff_id).subscribe(data =>{
          console.log(data);
          this.getStaffs();
        })

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
 
  }

  viewStaff(staff_id : number){
    this.router.navigate(['staff-detail', staff_id]);
  }
}
