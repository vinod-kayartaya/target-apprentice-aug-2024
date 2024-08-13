package com.targetindia.model;

import lombok.Data;

@Data
public class Product {
    private Integer id;
    private String name;
    private String description;
    private String category;
    private String brand;
    private String quantityPerUnit;
    private Double unitPrice;
    private String picture;
    private Double discount;
}

/*
CREATE TABLE PRODUCTS (
    ID INT PRIMARY KEY,
    NAME VARCHAR(50) NOT NULL,
    DESCRIPTION VARCHAR(255),
    CATEGORY VARCHAR(50),
    BRAND VARCHAR(50),
    QTY_PER_UNIT VARCHAR(50),
    UNIT_PRICE DOUBLE CHECK (UNIT_PRICE>0),
    PICTURE VARCHAR(255),
    DISCOUNT DOUBLE,
    CONSTRAINT CHK_DISC_PRICE CHECK (DISCOUNT between 0 and 100)
)
 */