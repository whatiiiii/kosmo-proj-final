package clone.pinterest.backend.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.rest.core.annotation.RestResource;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Pin implements Serializable {
    @Id
    @GeneratedValue
    private Integer pinSeq;
    private String pinTitle;
    private Long pinDesc;
    @OneToOne
    @JoinColumn(name = "imgSeq")
    @RestResource(path = "PinImg", rel = "image")
    private UpImage image;
    private Date pinRdate;
    @OneToOne
    @JoinColumn(name = "id")
    @RestResource(path = "pinWriter", rel = "writer")
    private Member writer;
    @OneToOne(mappedBy = "pin")
    private CommentInPin comment;

    @OneToMany(mappedBy = "pin", cascade = CascadeType.ALL)
    private List<Tag> tags = new ArrayList<>();

}
