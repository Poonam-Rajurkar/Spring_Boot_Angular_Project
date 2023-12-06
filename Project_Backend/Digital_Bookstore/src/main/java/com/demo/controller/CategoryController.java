package com.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.exception.ClassNotFoundException;
import com.demo.model.Categories;
import com.demo.repository.CategoryRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/library")
public class CategoryController {

	@Autowired
	private CategoryRepository cr;
	
	//Get all categories
		@GetMapping("/getAllCategories")
		public List<Categories> getAllCategories(){
			return cr.findAll();
		}

		//Create categories
		@PostMapping("/createCategories")
		public Categories createCategories(@RequestBody Categories categories) {
			return cr.save(categories);
		}
		
		//Get categories by id rest api
		@GetMapping("/getCategories/{category_id}")
		public ResponseEntity<Categories> getCategoriesById(@PathVariable Long category_id) {
			Categories categories = cr.findById(category_id)
					.orElseThrow(() -> new ClassNotFoundException("Categories does not exist with id : " + category_id));
			return ResponseEntity.ok(categories);
		}

		//Update staff detail rest api
		@PutMapping("/categories/{category_id}")
		public ResponseEntity<Categories> updateCategoryDetail(@PathVariable Long category_id, @RequestBody Categories categoryDetail){
			Categories category = cr.findById(category_id)
					.orElseThrow(() -> new ClassNotFoundException("Category does not exist with id : " + category_id));
			category.setCategory_name(categoryDetail.getCategory_name());
			
			Categories updateCategory = cr.save(category);
			return ResponseEntity.ok(updateCategory);
		}
		
		//Delete categories rest api
		@DeleteMapping("/categories/{category_id}")
		public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Long category_id){
			Categories categories = cr.findById(category_id)
					.orElseThrow(() -> new ClassNotFoundException("Category does not exist with id : " + category_id));
			
			cr.delete(categories);
			Map<String, Boolean> response = new HashMap<>();
			response.put("Category record deleted successfully!", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
}
