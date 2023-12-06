import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent {

  category_id : number;
  category : Category = new Category();

  constructor(private categoryService : CategoryService,
    private route : ActivatedRoute,
    private router : Router){ }

  ngOnInit(){
    this.category_id = this.route.snapshot.params['category_id'];

    this.categoryService.getCategoryById(this.category_id).subscribe(data => {
      this.category = data;
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
    this.categoryService.updateCategory(this.category_id, this.category).subscribe(data => {
      this.goToCategoryList();
    }),
    (error: any) => console.log(error);

    
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
    this.goToCategoryList();
  }
});

  }

  goToCategoryList(){
    this.router.navigate(['/categories'])
  }

}
