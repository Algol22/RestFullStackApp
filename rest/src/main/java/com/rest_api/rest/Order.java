package com.rest_api.rest;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name="order_number")
    private String orderNumber;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
}
