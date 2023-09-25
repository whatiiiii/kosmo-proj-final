package clone.pinterest.backend.domain;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@IdClass(FollowId.class)
public class Follow implements Serializable{
    @Id
    @ManyToOne
    @JoinColumn(name="follow_name", referencedColumnName="id")
    private Member followName;

    @Id
    @ManyToOne
    @JoinColumn(name="follower",referencedColumnName="id")
    private Member follower;
}
