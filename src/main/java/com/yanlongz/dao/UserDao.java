package com.yanlongz.dao;

import com.yanlongz.domain.User;

/**
 * Created by Allen1990 on 2016/6/20.
 */
public interface UserDao {
    public User selectUserById(int userId);
}
