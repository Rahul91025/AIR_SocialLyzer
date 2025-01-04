package com.example.AIR_backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.util.Map;

@Service
public class LangflowService {

    private final WebClient webClient;
    private final ObjectMapper objectMapper;

    @Value("${langflow.base-url}")
    private String baseURL;

    @Value("${langflow.application-token}")
    private String applicationToken;

    @Value("${langflow.flow-id}")
    private String flowIdOrName;

    @Value("${langflow.langflow-id}")
    private String langflowId;

    // Initialize WebClient in a separate method to use @Value properties
    public LangflowService(WebClient.Builder webClientBuilder, ObjectMapper objectMapper) {
        this.webClient = webClientBuilder.build();
        this.objectMapper = objectMapper;
    }

    public Map<String, Object> runLangflow(String inputValue, String inputType, String outputType, Map<String, Object> tweaks, boolean stream) throws Exception {
        // Endpoint without baseURL (baseURL is already set in the WebClient)
        String endpoint = String.format("/lf/%s/api/v1/run/%s?stream=%s", langflowId, flowIdOrName, stream);

        // Prepare request body
        Map<String, Object> requestBody = Map.of(
                "input_value", inputValue,
                "input_type", inputType,
                "output_type", outputType,
                "tweaks", tweaks
        );

        try {
            // Make the HTTP POST request
            String response = webClient.post()
                    .uri(baseURL + endpoint)
                    .header("Authorization", "Bearer " + applicationToken)
                    .header("Content-Type", "application/json")
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            // Parse the JSON response into a Map
            return objectMapper.readValue(response, Map.class);

        } catch (WebClientResponseException e) {
            // Handle HTTP errors (4xx and 5xx)
            throw new RuntimeException("Error response from Langflow API: " + e.getResponseBodyAsString(), e);
        } catch (Exception e) {
            // Handle other exceptions
            throw new RuntimeException("Error connecting to Langflow API: " + e.getMessage(), e);
        }
    }
}
