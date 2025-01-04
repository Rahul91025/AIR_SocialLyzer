package com.example.AIR_backend.Controller;
import com.example.AIR_backend.service.LangflowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/langflow")
public class LangflowController {

    @Autowired
    private LangflowService langflowService;

    @PostMapping("/run-flow")
    public ResponseEntity<?> runFlow(@RequestBody Map<String, Object> requestBody) {
        try {
            String inputValue = (String) requestBody.get("inputValue");
            String inputType = (String) requestBody.getOrDefault("inputType", "chat");
            String outputType = (String) requestBody.getOrDefault("outputType", "chat");
            boolean stream = (boolean) requestBody.getOrDefault("stream", false);
            Map<String, Object> tweaks = (Map<String, Object>) requestBody.getOrDefault("tweaks", Map.of());

            Map<String, Object> response = langflowService.runLangflow(inputValue, inputType, outputType, tweaks, stream);
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }
}
