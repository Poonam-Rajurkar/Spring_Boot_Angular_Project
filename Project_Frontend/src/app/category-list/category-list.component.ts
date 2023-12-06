import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  categories : Category[];

  constructor(private categoryService : CategoryService,
   private router : Router) { }

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe((data : Category[]) => {
      console.log(data);
      this.categories = data;
    });
  }

  private getCategory(){
    this.categoryService.getCategoryList().subscribe((data : Category[]) => {
      console.log(data);
      this.categories = data;
    });
  }

  updateCategory(category_id : number){
    this.router.navigate(['update-category',category_id]);
  }

  deleteCategory(category_id : number){
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
    this.categoryService.deleteCategory(category_id).subscribe(data => {
      console.log(data);
      this.getCategory();
    })

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

  }
}
