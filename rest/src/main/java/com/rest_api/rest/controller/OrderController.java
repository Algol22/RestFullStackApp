package com.rest_api.rest.controller;


import com.rest_api.rest.Order;
import com.rest_api.rest.repo.OrderRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepo orderRepo;

    @GetMapping
    public List<Order> getAllOrders(){
        return orderRepo.findAll();
    }

    @GetMapping("/{userId}")
    public List<Order> getOrderByUserId(@PathVariable Long userId){
        return orderRepo.findByUserId(userId);
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order){
        return orderRepo.save(order);
    }
}
