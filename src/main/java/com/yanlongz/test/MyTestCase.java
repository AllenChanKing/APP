package com.yanlongz.test;

import com.yanlongz.action.UserAction;
import com.yanlongz.domain.User;
import com.yanlongz.dto.ResultData;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Allen1990 on 2016/6/20.
 */

public class MyTestCase {
    @Autowired
    private UserAction action;
//    @Test
    public void selectUserByIdTest(){
//        ResultData<User> result=action.users(3);
    }
}
