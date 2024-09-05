package com.nitesh.service;

import com.nitesh.model.PlanType;
import com.nitesh.model.Subscription;
import com.nitesh.model.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);
    Subscription getUserSubscription(Long userId) throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);
    boolean isValid(Subscription subscription);

}
