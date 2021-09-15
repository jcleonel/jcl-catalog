package com.jcl.catalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jcl.catalog.entites.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}