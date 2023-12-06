package com.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Admin;
import com.demo.repository.AdminRepository;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AdminController {

	@Autowired
	AdminRepository repo;
	
	@PostMapping("/admin/login")
    public ResponseEntity<Map<String, String>> adminLogin(@RequestBody Admin admin) {
        // Hardcoding the admin credentials for demonstration purposes
        String expectedUsername = "admin";
        String expectedPassword = "admin";

        // Check if the provided credentials match the hardcoded admin credentials
        if (expectedUsername.equals(admin.getUsername()) && expectedPassword.equals(admin.getPassword())) {
            // Return a success message if credentials are correct
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Admin login successful");
            return ResponseEntity.ok(response);
        } else {
            // Return an error message if credentials are incorrect
            Map<String, String> response = new HashMap<>();
            response.put("status", "error");
            response.put("message", "Admin not found");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
	
}
