package com.targetindia;

import com.targetindia.model.Product;
import com.targetindia.repository.ProductRepository;

public class ProductUsageDemo {

    static void line() {
        System.out.println("-".repeat(80));
    }

    public static void main(String[] args) throws Exception {
        line();
        ProductRepository repo = new ProductRepository();
        var p = repo.findById(2);
        System.out.println(p);
        line();
    }

    public static void main1(String[] args) {

        // p1 is a reference to an object of a Product class
        Product p1;

        p1 = new Product();
        p1.setId(123);
        p1.setName("Carrots");
        p1.setUnitPrice(73.5);

        line();
        System.out.println(p1);
        line();

    }
}
