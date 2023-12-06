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
import com.demo.model.Staff;
import com.demo.repository.StaffRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/library")
public class StaffController {

	@Autowired
	private StaffRepository sr;
	
	//Create staff member
	@PostMapping("/createStaff")
	public Staff createStaff(@RequestBody Staff staff) {
	return sr.save(staff);
	}
		
	//Get all staff members
	@GetMapping("/getAllStaffMemebers")
	public List<Staff> getAllStaffMembers(){
	return sr.findAll();
	}

	//Get staff member by id rest api
	@GetMapping("/getStaffById/{staff_id}")
	public ResponseEntity<Staff> getStaffById(@PathVariable Long staff_id) {
		Staff staff = sr.findById(staff_id)
				.orElseThrow(() -> new ClassNotFoundException("Staff member does not exist with id : " + staff_id));
		return ResponseEntity.ok(staff);
	}
	
	//Update staff detail rest api
	@PutMapping("/staff/{staff_id}")
	public ResponseEntity<Staff> updateStaffDetail(@PathVariable Long staff_id, @RequestBody Staff staffDetail){
		Staff staff = sr.findById(staff_id)
				.orElseThrow(() -> new ClassNotFoundException("Staff member does not exist with id : " + staff_id));
		staff.setStaff_name(staffDetail.getStaff_name());
		staff.setStaff_email(staffDetail.getStaff_email());
		staff.setStaff_phone(staffDetail.getStaff_phone());
		
		Staff updateStaff = sr.save(staff);
		return ResponseEntity.ok(updateStaff);
	}
		
	//Delete reader rest api
	@DeleteMapping("/staff/{staff_id}")
	public ResponseEntity<Map<String, Boolean>> deleteStaff(@PathVariable Long staff_id){
		Staff staff = sr.findById(staff_id)
			.orElseThrow(() -> new ClassNotFoundException("Staff member does not exist with id : " + staff_id));
			
		sr.delete(staff);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Staff member's record with id " + staff_id + " is deleted successfully!", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
