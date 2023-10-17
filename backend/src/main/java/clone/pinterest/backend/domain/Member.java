package clone.pinterest.backend.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import org.springframework.data.rest.core.annotation.RestResource;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Member implements Serializable {

    @Id
    private String id;
    private String name;
    private String pwd;
    private Date birth;
    private String sex;
    private String loc;
    @OneToOne
    @JoinColumn(name = "imgSeq")
    @RestResource(path = "ProfileImg", rel = "upimage")
    private UpImage upimage;

    @OneToMany(mappedBy = "writer")
    private List<Pin> pin;

    @OneToOne(mappedBy = "writer")
    private CommentInPin comment;

    @OneToMany(mappedBy = "id.follow") // Follow 엔티티의 id 필드의 follow와 매핑
    private List<Follow> follow;

    @OneToMany(mappedBy = "id.follower") // Follow 엔티티의 id 필드의 follower와 매핑
    private List<Follow> follower;

    @OneToMany(mappedBy = "id.member") // Save 엔티티의 id 필드의 pin과 매핑
    private List<Save> saves1;
}
