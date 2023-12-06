package com.demo.model;

//import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.JoinTable;
//import jakarta.persistence.ManyToMany;
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.FetchType;


@Entity
@Table(name = "readers")
public class Reader {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id;
	
	@Column(name = "user_name")
	private String user_name;
	
	@Column(name = "user_email")
	private String user_email;
	
	@Column(name = "user_phone")
	private long user_phone;
	
	@Column(name = "user_address")
	private String user_address;
	
	public Reader() {
		
	}

	public Reader(String user_name, String user_email, long user_phone, String user_address) {
		super();
		this.user_name = user_name;
		this.user_email = user_email;
		this.user_phone = user_phone;
		this.user_address = user_address;
	}

	public long getUser_id() {
		return user_id;
	}

	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public long getUser_phone() {
		return user_phone;
	}

	public void setUser_phone(long user_phone) {
		this.user_phone = user_phone;
	}

	public String getUser_address() {
		return user_address;
	}

	public void setUser_address(String user_address) {
		this.user_address = user_address;
	}

//	@ManyToMany(fetch=FetchType.LAZY,cascade = CascadeType.ALL)
//	@JoinTable(name="Issued_Book_Table",
//	joinColumns = {
//			@JoinColumn(name="user_id",referencedColumnName = "user_id")
//	},
//	inverseJoinColumns = {
//			@JoinColumn(name="book_id",referencedColumnName = "book_id")
//	}
//	)
//	private Set<Book>book;
}
