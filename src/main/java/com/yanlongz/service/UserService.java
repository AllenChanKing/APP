package com.yanlongz.service;

import com.yanlongz.domain.User;

import java.util.List;

/**
 * Created by Allen1990 on 2016/6/20.
 */
public interface UserService {
    public User getUserById(int userId);
    public List<User> getUserList();

}
