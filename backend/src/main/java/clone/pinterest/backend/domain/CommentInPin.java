package clone.pinterest.backend.domain;

import java.sql.Date;

import org.springframework.data.rest.core.annotation.RestResource;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
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
public class CommentInPin {
    @Id
    @GeneratedValue
    private Integer seq;
    private Long content;
    private Date rdate;
    @OneToOne
    @JoinColumn(name = "pinSeq")
    @RestResource(path = "CommentPin", rel = "pin" )
    private Pin pin;
    @OneToOne
    @JoinColumn(name = "id")
    @RestResource(path = "CommentWriter", rel = "writer" )
    private Member writer;
}
