package com.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, Long>{

}
