package clone.pinterest.backend.domain;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Embeddable
public class FollowId implements Serializable{

    @ManyToOne
    @JoinColumn(name = "follow_id")
    private Member follow;

    @ManyToOne
    @JoinColumn(name = "follower_id")
    private Member follower;

    @Override
    public String toString() {
        return "FollowId{" +
                "follow=" + follow.getId() + // 혹은 follow의 다른 필드를 사용할 수 있음
                ", follower=" + follower.getId() + // 혹은 follower의 다른 필드를 사용할 수 있음
                '}';
    }
}



