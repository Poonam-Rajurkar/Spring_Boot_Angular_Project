package com.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.exception.ClassNotFoundException;
import com.demo.model.Book;
import com.demo.repository.BookRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/library")
public class BookController {

	@Autowired
	private BookRepository br;
	
	//Get all books
		@GetMapping("/getAllBooks")
		public List<Book> getAllBooks(){
			return br.findAll();
		}

		//Create readers
		@PostMapping("/addBook")
		public Book addBook(@RequestBody Book book) {
			return br.save(book);
		}
		
		//Get books by id rest api
		@GetMapping("/getBook/{book_id}")
		public ResponseEntity<Book> getBookById(@PathVariable Long book_id) {
			Book book = br.findById(book_id)
					.orElseThrow(() -> new ClassNotFoundException("Book does not exist with id : " + book_id));
			return ResponseEntity.ok(book);
		}
		
		//Update reader rest api
		@PutMapping("/book/{book_id}")
		public ResponseEntity<Book> updateBook(@PathVariable Long  book_id, @RequestBody Book bookDetail){
			Book book = br.findById(book_id)
					.orElseThrow(() -> new ClassNotFoundException("Book does not exist with id : " + book_id));
			book.setBook_title(bookDetail.getBook_title());
			book.setBook_author(bookDetail.getBook_author());
			book.setBook_borrowed(bookDetail.getBook_borrowed());
			book.setBook_price(bookDetail.getBook_price());
			
			Book updateBook = br.save(book);
			return ResponseEntity.ok(updateBook);
		}
		
		//Delete reader rest api
		@DeleteMapping("/book/{book_id}")
		public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long book_id){
			Book book = br.findById(book_id)
					.orElseThrow(() -> new ClassNotFoundException("Book does not exist with id : " + book_id));
			
			br.delete(book);
			Map<String, Boolean> response = new HashMap<>();
			response.put("Book record deleted successfully!", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
