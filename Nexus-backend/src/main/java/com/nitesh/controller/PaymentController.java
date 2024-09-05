package com.nitesh.controller;

import com.nitesh.model.PlanType;
import com.nitesh.model.User;
import com.nitesh.response.PaymentLinkResponse;
import com.nitesh.service.UserService;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.json.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Value("${razorpay.api.key}")
    private String apiKey;
    @Value("${razorpay.api.secret}")
    private String apiSecret;

    @Autowired
    private UserService userService;

    @PostMapping("/{plainType}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(@PathVariable PlanType planType,
                                                                 @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserProfileByJWT(jwt);
        int amount = 799 * 100; // multiply 100 to convert into rupee
        if (planType.equals(PlanType.ANNUALLY)) {
            amount *= 12;
            amount = (int) (amount * 0.7); // giving 30% off
        }


        RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
        JSONObject paymentLinkRequest = new JSONObject();
        paymentLinkRequest.put("amount", amount);
        paymentLinkRequest.put("currency", "INR");

        JSONObject customer = new JSONObject();
        customer.put("name", user.getFullName());
        customer.put("email", user.getEmail());
        paymentLinkRequest.put("customer", customer);

        JSONObject notify = new JSONObject();
        notify.put("email", true);
        paymentLinkRequest.put("notify", notify);

        paymentLinkRequest.put("callback_url", "https://localhost:5273/upgrade_plan/success?planType" + planType);

        PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);

        String paymentLinkId = payment.get("id");
        String paymentLinkUrl = payment.get("short_url"); // using this user will be able to make payment

        PaymentLinkResponse res = new PaymentLinkResponse();
        res.setPayment_link_url(paymentLinkUrl);
        res.setPayment_link_id(paymentLinkId);

        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

}
