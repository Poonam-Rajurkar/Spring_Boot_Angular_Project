import { Component } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})
export class StaffDetailComponent {

  staff_id : number;
  staff : Staff;

  constructor(private route : ActivatedRoute,
    private staffService : StaffService) { }

    ngOnInit() : void {
      this.staff_id = this.route.snapshot.params['staff_id'];
  
      this.staff = new Staff();
      this.staffService.getStaffById(this.staff_id).subscribe(data => {
        this.staff = data;
      })
    }  
}
