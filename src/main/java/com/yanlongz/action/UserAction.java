package com.yanlongz.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.servlet.ModelAndView;
import com.yanlongz.domain.User;
import com.yanlongz.service.UserService;

import javax.annotation.Resource;

/**
 * Created by Allen1990 on 2016/6/20.
 */
@Controller
public class UserAction {
    @Resource
    private UserService userService;
    @RequestMapping("/")
    public ModelAndView getIndex(){
        ModelAndView mav = new ModelAndView("index");
        User user = userService.selectUserById(3);
        mav.addObject("user", user);
        return mav;
    }
}
