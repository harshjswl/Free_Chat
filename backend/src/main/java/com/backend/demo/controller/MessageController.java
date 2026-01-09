package com.backend.demo.controller;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

import com.backend.demo.entity.Message;
import com.backend.demo.repository.MessageRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/messages")
@RequiredArgsConstructor
public class MessageController {

    private final MessageRepository repo;

    @PostMapping
    public Message saveMessage(@RequestBody Message message) {
        return repo.save(message);
    }
}
