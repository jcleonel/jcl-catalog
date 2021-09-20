package com.jcl.catalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jcl.catalog.entites.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
