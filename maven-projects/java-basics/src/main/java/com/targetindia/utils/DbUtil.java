package com.targetindia.utils;

import java.sql.*;
import java.util.*;

public final class DbUtil {

    private DbUtil(){}

    public static Connection createConnection() throws Exception{
        ResourceBundle rb = ResourceBundle.getBundle("jdbc-info");
        String url = rb.getString("jdbc.url");
        String username = rb.getString("jdbc.username");
        String password = rb.getString("jdbc.password");

        return DriverManager.getConnection(url, username, password);
    }

}
