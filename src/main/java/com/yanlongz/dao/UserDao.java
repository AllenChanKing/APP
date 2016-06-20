package com.yanlongz.dao;

import com.yanlongz.domain.User;

import java.util.List;

/**
 * Created by Allen1990 on 2016/6/20.
 */
public interface UserDao {
    public User getUserById(int userId);
    public List<User> getUserList();
}
