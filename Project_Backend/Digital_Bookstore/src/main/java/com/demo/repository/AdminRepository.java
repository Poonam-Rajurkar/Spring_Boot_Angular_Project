package com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer>{

}
