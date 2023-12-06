import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent {

  category : Category = new Category(); 

  constructor(private categoryService : CategoryService,
    private router : Router){ }

  saveCategory(){
    this.categoryService.createCategory(this.category).subscribe(data => {
      console.log(data);
      this.goToCategoryList();
    }),
    (error : any) => console.log(error);
    
  }  

  goToCategoryList(){
    this.router.navigate(['/categories'])
  }

  onSubmit(){
    console.log(this.category);
    this.saveCategory();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Category added succesfully!",
      showConfirmButton: false,
      timer: 1500
    });
  }
}
