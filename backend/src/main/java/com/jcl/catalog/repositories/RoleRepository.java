package com.jcl.catalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jcl.catalog.entites.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
