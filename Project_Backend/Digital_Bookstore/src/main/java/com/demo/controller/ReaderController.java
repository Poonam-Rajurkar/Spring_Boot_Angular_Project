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
import com.demo.model.Reader;
import com.demo.repository.ReaderRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/library")
public class ReaderController {

	@Autowired
	private ReaderRepository rr;
	
	//Get all readers
	@GetMapping("/getAllReaders")
	public List<Reader> getAllReaders(){
		return rr.findAll();
	}

	//Create readers
	@PostMapping("/createReaders")
	public Reader createReaders(@RequestBody Reader reader) {
		return rr.save(reader);
	}
	
	//Get reader by id rest api
	@GetMapping("/getReader/{user_id}")
	public ResponseEntity<Reader> getReaderById(@PathVariable Long user_id) {
		Reader reader = rr.findById(user_id)
				.orElseThrow(() -> new ClassNotFoundException("Reader does not exist with id : " + user_id));
		return ResponseEntity.ok(reader);
	}
	
	//Update reader rest api
	@PutMapping("/reader/{user_id}")
	public ResponseEntity<Reader> updateReader(@PathVariable Long  user_id, @RequestBody Reader readerDetail){
		Reader reader = rr.findById(user_id)
				.orElseThrow(() -> new ClassNotFoundException("Reader does not exist with id : " + user_id));
		reader.setUser_name(readerDetail.getUser_name());
		reader.setUser_email(readerDetail.getUser_email());
		reader.setUser_phone(readerDetail.getUser_phone());
		reader.setUser_address(readerDetail.getUser_address());
		
		Reader updateReader = rr.save(reader);
		return ResponseEntity.ok(updateReader);
	}
	
	//Delete reader rest api
	@DeleteMapping("/reader/{user_id}")
	public ResponseEntity<Map<String, Boolean>> deleteReader(@PathVariable Long user_id){
		Reader reader = rr.findById(user_id)
				.orElseThrow(() -> new ClassNotFoundException("Reader does not exist with id : " + user_id));
		
		rr.delete(reader);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Reader record deleted successfully!", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
