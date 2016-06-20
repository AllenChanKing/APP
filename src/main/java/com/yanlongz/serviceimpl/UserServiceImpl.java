package com.yanlongz.serviceimpl;

import com.yanlongz.dao.UserDao;
import com.yanlongz.domain.User;
import com.yanlongz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Allen1990 on 2016/6/20.
 */
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDao userDao;

    public User getUserById(int userId) {
        return userDao.getUserById(userId);
    }

    public List<User> getUserList() {
        return userDao.getUserList();
    }
}
