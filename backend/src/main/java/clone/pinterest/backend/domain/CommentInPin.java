package clone.pinterest.backend.domain;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class CommentInPin {
    @Id
    @GeneratedValue
    private Integer seq;
    private Long content;
    private Date rdate;
    private Integer pin;
    private String writer;
}
