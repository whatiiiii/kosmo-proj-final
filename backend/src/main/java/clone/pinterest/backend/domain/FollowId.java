package clone.pinterest.backend.domain;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class FollowId implements Serializable {
    @EqualsAndHashCode.Include
    private Member followName;
    @EqualsAndHashCode.Include
    private Member follower;
}
