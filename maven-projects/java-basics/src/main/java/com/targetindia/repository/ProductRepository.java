package com.targetindia.repository;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import com.targetindia.model.Product;

public class ProductRepository {

    public Product findById(Integer id) throws Exception {

        String url = "jdbc:h2:tcp://localhost/~/target_training_db";
        String username = "root";
        String password = "Welcome#123";

        // ask the factory to get a connection
        var conn = DriverManager.getConnection(url, username, password);

        // very bad practice to concatenate and generate SQL
        // use PreparedStatement with query parameters
        String sql = "select * from products where id = " + id;
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery(sql);

        if (rs.next()) {
            Product p = new Product();
            p.setId(rs.getInt("id"));
            p.setName(rs.getString("name"));
            p.setUnitPrice(rs.getDouble("unit_price"));
            // do the same for other properties
            return p;
        }

        return null;
    }

}
