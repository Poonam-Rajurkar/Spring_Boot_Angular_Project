package com.demo.model;

//import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "book_details")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long book_id;
	
	@Column(name = "book_title")
	 private String book_title;
	
	@Column(name = "book_author")
     private String book_author;
	
	@Column(name = "book_borrowed")
     private long book_borrowed;
	
	@Column(name = "book_price")
	private double book_price;
	
	public Book() {
		
	}
	
	public Book(String book_title, String book_author, long book_borrowed, double book_price) {
		super();
		this.book_title = book_title;
		this.book_author = book_author;
		this.book_borrowed = book_borrowed;
		this.book_price = book_price;
	}

	public double getBook_price() {
		return book_price;
	}

	public void setBook_price(double book_price) {
		this.book_price = book_price;
	}

	public Long getBook_id() {
		return book_id;
	}

	public void setBook_id(Long book_id) {
		this.book_id = book_id;
	}

	public String getBook_title() {
		return book_title;
	}

	public void setBook_title(String book_title) {
		this.book_title = book_title;
	}

	public String getBook_author() {
		return book_author;
	}

	public void setBook_author(String book_author) {
		this.book_author = book_author;
	}

	public long getBook_borrowed() {
		return book_borrowed;
	}

	public void setBook_borrowed(long book_borrowed) {
		this.book_borrowed = book_borrowed;
	}

//	@ManyToMany(mappedBy  = "book")
//	private Set<Reader> reader;
}
