package com.hometutorfinder.backend.controller;
import com.hometutorfinder.backend.model.User;
import com.hometutorfinder.backend.service.UserService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final UserService userService;

    public AdminController(UserService userService){ this.userService = userService; }

    @PostMapping("/login")
    public boolean login(@RequestBody User admin) {
        // hardcoded admin credentials for now
        return "admin".equals(admin.getEmail()) && "admin123".equals(admin.getPassword());
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}