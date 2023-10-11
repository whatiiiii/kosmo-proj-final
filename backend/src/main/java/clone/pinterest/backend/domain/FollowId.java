package clone.pinterest.backend.domain;

import java.io.Serializable;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class FollowId implements Serializable {

    @ManyToOne
    @JoinColumn(name = "follow_id")
    private Member follow;

    @ManyToOne
    @JoinColumn(name = "follower_id")
    private Member follower;

}
