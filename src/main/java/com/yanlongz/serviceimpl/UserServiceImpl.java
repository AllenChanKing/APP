package com.yanlongz.serviceimpl;

import com.yanlongz.dao.UserDao;
import com.yanlongz.domain.User;
import com.yanlongz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Allen1990 on 2016/6/20.
 */
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDao userDao;

    public User selectUserById(int userId) {
        return userDao.selectUserById(userId);
    }
}
