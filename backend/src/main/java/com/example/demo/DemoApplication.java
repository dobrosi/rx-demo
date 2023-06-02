package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import static java.time.Duration.ofSeconds;
import static java.time.LocalTime.now;
import static java.time.format.DateTimeFormatter.ISO_LOCAL_TIME;
import static java.time.temporal.ChronoUnit.SECONDS;
import static reactor.core.publisher.Flux.interval;

@SpringBootApplication
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping(path = "/time-stream")
    public Flux<String> time() {
        return interval(ofSeconds(1)).map(sequence -> now().truncatedTo(SECONDS).format(ISO_LOCAL_TIME));
    }
}
