package clone.pinterest.backend.domain;

import java.sql.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
public class CommentInPin {
    @Id
    @GeneratedValue
    private Integer seq;
    private String content;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    @CreationTimestamp
    private Date rdate;
    @ManyToOne
    @JoinColumn(name = "pinSeq")
    @RestResource(path = "CommentPin", rel = "pin")
    private Pin pin;
    @ManyToOne
    @JoinColumn(name = "id")
    @RestResource(path = "CommentWriter", rel = "writer")
    private Member writer;
}
