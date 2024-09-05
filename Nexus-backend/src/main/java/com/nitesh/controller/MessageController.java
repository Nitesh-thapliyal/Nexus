package com.nitesh.controller;

import com.nitesh.model.Chat;
import com.nitesh.model.Message;
import com.nitesh.model.User;
import com.nitesh.request.CreateMessageRequest;
import com.nitesh.service.MessageService;
import com.nitesh.service.ProjectService;
import com.nitesh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;
    @Autowired
    private UserService userService;
    @Autowired
    private ProjectService projectService;

    @PostMapping("/send")
    public ResponseEntity<Message> sendMessage(@RequestBody CreateMessageRequest request) throws Exception {

        User user = userService.findUserById(request.getSenderId());
        Chat chat = projectService.getProjectById(request.getProjectId()).getChat();
        if(chat  == null){
            throw new Exception("Chats not found!");
        }
        Message sentMessage = messageService.sendMessage(request.getSenderId(), request.getProjectId(), request.getContent());

        return ResponseEntity.ok(sentMessage);
    }

    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>> getMessageByChatId(@PathVariable Long projectId) throws Exception {

        List<Message> messages = messageService.getMessageByProjectId(projectId);

        return ResponseEntity.ok(messages);
    }


}
