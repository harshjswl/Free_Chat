package com.backend.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.demo.entity.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
}