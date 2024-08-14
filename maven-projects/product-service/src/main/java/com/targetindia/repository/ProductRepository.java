package com.targetindia.repository;

import org.springframework.data.repository.CrudRepository;

import com.targetindia.entity.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
