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
    private Integer profile_img;
}
