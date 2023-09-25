package clone.pinterest.backend.domain;

import java.io.Serializable;
import java.sql.Date;

import org.springframework.data.rest.core.annotation.RestResource;

import org.springframework.data.rest.core.annotation.RestResource;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String name;
    private String pwd;
    private Date birth;
    private String sex;
    private String loc;
<<<<<<< HEAD
    @OneToOne
    @JoinColumn(name = "imgSeq")
    @RestResource(path = "ProfileImg", rel = "image")
    private Image image;

    @OneToOne(mappedBy ="writer")
    private Pin pin;

    @OneToOne(mappedBy ="writer")
    private CommentInPin comment;
    
    
=======
    private Integer profile_img;
>>>>>>> ea3580a9b603250b673e4a742a9a0bbc24f51433
}
