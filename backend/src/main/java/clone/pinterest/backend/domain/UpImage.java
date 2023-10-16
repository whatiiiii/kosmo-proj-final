package clone.pinterest.backend.domain;

import org.springframework.content.commons.annotations.ContentId;
import org.springframework.content.commons.annotations.ContentLength;
import org.springframework.content.commons.annotations.MimeType;

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
public class UpImage {
    @Id
    @GeneratedValue
    private Integer imgSeq;
    @OneToOne
    @JoinColumn(name = "id")
    private Member member;

    @ContentId
    private String contentId;
    @ContentLength
    private long contentLength;
    @MimeType
    private String contentMimeType = "image/jpeg";

}
