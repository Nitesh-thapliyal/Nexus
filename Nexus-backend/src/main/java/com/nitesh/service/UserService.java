package com.nitesh.service;


import com.nitesh.model.User;

public interface UserService {

    User findUserProfileByJWT(String jwt) throws Exception;

    User findUserByEmail(String email) throws Exception;

    User findUserById(Long userId) throws Exception;

    User updateUserProjectSize(User user, int number);

}
