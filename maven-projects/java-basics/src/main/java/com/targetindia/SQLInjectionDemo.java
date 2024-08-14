package com.targetindia;

import com.targetindia.utils.KeyboardUtil;

public class SQLInjectionDemo {
    public static void main(String[] args) {
        String username;
        String password;

        username = KeyboardUtil.getString("enter username: ");
        password = KeyboardUtil.getString("enter password: ");

        String sql = "select * from users where username = '" + username + "' and password='" + password + "'";

        System.out.println(sql);
    }
}
