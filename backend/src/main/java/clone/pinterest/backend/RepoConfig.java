package clone.pinterest.backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import clone.pinterest.backend.handler.PinEventHandler;

@Configuration
public class RepoConfig {
    @Bean
    public PinEventHandler pinEventHandler() {
        return new PinEventHandler();
    }
}
