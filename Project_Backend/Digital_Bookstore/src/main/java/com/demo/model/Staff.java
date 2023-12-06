package com.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "staff_detail")
public class Staff {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long staff_id;
	
	@Column(name = "staff_name")
	private String staff_name;
	
	@Column(name = "staff_email")
	private String staff_email;

	@Column(name = "staff_phone")
	private long staff_phone;
	
	public Staff() {
	
	}

	public Staff(String staff_name, String staff_email, long staff_phone) {
		super();
		this.staff_name = staff_name;
		this.staff_email = staff_email;
		this.staff_phone = staff_phone;
	}

	public long getStaff_id() {
		return staff_id;
	}

	public void setStaff_id(long staff_id) {
		this.staff_id = staff_id;
	}

	public String getStaff_name() {
		return staff_name;
	}

	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}

	public String getStaff_email() {
		return staff_email;
	}

	public void setStaff_email(String staff_email) {
		this.staff_email = staff_email;
	}
	
	public long getStaff_phone() {
		return staff_phone;
	}

	public void setStaff_phone(long staff_phone) {
		this.staff_phone = staff_phone;
	}

}
