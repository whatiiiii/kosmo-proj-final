package clone.pinterest.backend.projection;

import java.util.Date;
import java.util.List;

import org.springframework.data.rest.core.config.Projection;

import clone.pinterest.backend.domain.CommentInPin;
import clone.pinterest.backend.domain.Member;
import clone.pinterest.backend.domain.Pin;
import clone.pinterest.backend.domain.Tag;
import clone.pinterest.backend.domain.UpImage;

@Projection(name = "pinProjection", types = { Pin.class })
public interface PinProjection {
    String getPinTitle();

    String getPinDesc();

    UpImage getImage();

    Date getPinRdate();

    MemberProjection getWriter();

    List<CommentInPinProjection> getComment();

    List<Tag> getTags();
}

// private Integer pinSeq;
// private String pinTitle;
// private String pinDesc;
// @OneToOne
// @JoinColumn(name = "imgSeq")
// @RestResource(path = "PinImg", rel = "image")
// private UpImage image;
// @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone
// = "Asia/Seoul")
// @CreationTimestamp
// private Date pinRdate;
// @ManyToOne
// @JoinColumn(name = "id")
// @RestResource(path = "pinWriter", rel = "writer")
// private Member writer;
// @OneToMany(mappedBy = "pin")
// private List<CommentInPin> comment;

// @OneToMany(mappedBy = "id.pin") // Save 엔티티의 id 필드의 pin과 매핑
// private List<Save> saves;

// @OneToMany(mappedBy = "tagId.pin") // Tag 엔티티의 id 필드의 pin과 매핑
// private List<Tag> tags;