package clone.pinterest.backend.domain;

import java.io.Serializable;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Follow")
@RepositoryRestResource
public class Follow{
    @EmbeddedId
    private FollowId id;
}
