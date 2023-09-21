package clone.pinterest.backend.domain;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    // @GeneratedValue
    @Id
    private String id;
    private String name;
    private String pwd;
    private Date birth;
    private String sex;
    private String loc;
    private Integer profile_img;
}
