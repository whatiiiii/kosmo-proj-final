package clone.pinterest.backend.domain;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;

import com.fasterxml.jackson.annotation.JsonFormat;

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
    private String pinDesc;
    @OneToOne
    @JoinColumn(name = "imgSeq")
    @RestResource(path = "PinImg", rel = "image")
    private UpImage image;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    @CreationTimestamp
    private Date pinRdate;
    @OneToOne
    @JoinColumn(name = "id")
    @RestResource(path = "pinWriter", rel = "writer")
    private Member writer;
    @OneToOne(mappedBy = "pin")
    private CommentInPin comment;

    @OneToMany(mappedBy = "id.pin") // Save 엔티티의 id 필드의 pin과 매핑
    private List<Save> saves;

    @OneToMany(mappedBy = "tagId.pin") // Tag 엔티티의 id 필드의 pin과 매핑
    private List<Tag> tags;
}
