import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  
  constructor(private route : Router){ }

  username: string;
  password: string;
  invalidCredentials: boolean = false;

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Admin Login successful');
      Swal.fire('Congratulations...', 'Admin login succesfully!', 'success')
    } else {
      this.invalidCredentials = true;

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  }


  username2: string;
  password2: string;
  invalidCredentials2: boolean = false;

  login2() {
    if (this.username2 === 'poonam' && this.password2 === 'poonam') {
      console.log('User Login successful');
      Swal.fire({
        title: "User login succesfully!",
        text: "Want to move towards Books Section ?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.route.navigate(['buy-book']);
        }
      });
  
    } else {
      this.invalidCredentials2 = true;

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
  }
}





