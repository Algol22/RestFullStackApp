package com.rest_api.rest.repo;

import com.rest_api.rest.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
