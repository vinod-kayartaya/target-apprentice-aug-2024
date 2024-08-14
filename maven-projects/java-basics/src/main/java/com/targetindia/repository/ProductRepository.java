package com.targetindia.repository;

import java.sql.*;

import com.targetindia.model.Product;
import com.targetindia.utils.DbUtil;

public class ProductRepository {

    public Product findById(Integer id) throws Exception {
        String sql = "select * from products where id = ?";
        try(
            Connection conn = DbUtil.createConnection();
            PreparedStatement stmt = conn.prepareStatement(sql);
        ){
            stmt.setInt(1, id);
            try(
                ResultSet rs = stmt.executeQuery();
            ){
                if (rs.next()) {
                    Product p = new Product();
                    p.setId(rs.getInt("id"));
                    p.setName(rs.getString("name"));
                    p.setDescription(rs.getString("description"));
                    p.setBrand(rs.getString("brand"));
                    p.setCategory(rs.getString("category"));
                    p.setUnitPrice(rs.getDouble("unit_price"));
                    // do the same for other properties
                    return p;
                }
            } // rs.close() called automatically

        } // conn.close() and stmt.close() automatically called

        return null;
    }

}
