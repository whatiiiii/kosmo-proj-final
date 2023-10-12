package clone.pinterest.backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import clone.pinterest.backend.domain.Member;
import clone.pinterest.backend.domain.Pin;
import clone.pinterest.backend.domain.UpImage;

@Configuration
public class RestConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Member.class, Pin.class, UpImage.class);
    }
}
