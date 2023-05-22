package com.rest_api.rest.controller;

public class ResourceNotFoundExceptuion extends RuntimeException {
    public ResourceNotFoundExceptuion(String s) {
        super(s);
    }
}
