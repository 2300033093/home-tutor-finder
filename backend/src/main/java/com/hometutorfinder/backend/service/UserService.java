package com.hometutorfinder.backend.service;

import com.hometutorfinder.backend.model.User;
import com.hometutorfinder.backend.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public User signup(User user) {
        return repo.save(user);
    }

    public User login(String email, String password) {
        return repo.findByEmail(email)
                   .filter(u -> u.getPassword().equals(password))
                   .orElse(null);
    }

    public List<User> getAllUsers() { return repo.findAll(); }
}
