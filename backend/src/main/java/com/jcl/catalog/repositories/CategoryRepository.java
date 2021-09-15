package com.jcl.catalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jcl.catalog.entites.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
