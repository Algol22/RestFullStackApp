package com.rest_api.rest.controller;


import com.rest_api.rest.Order;
import com.rest_api.rest.User;
import com.rest_api.rest.repo.OrderRepo;
import com.rest_api.rest.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private UserRepo userRepo;

    @GetMapping
    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user){
        return userRepo.save(user);
    }

    @PostMapping("/{userId}/orders")
    public Order addOrderToUser(@PathVariable Long userId, @RequestBody Order order){
        User user = userRepo.findById(userId).orElseThrow(
                ()-> new ResourceNotFoundExceptuion("no such user with id " + userId));

                order.setUser(user);
                return orderRepo.save(order);

    }
}
