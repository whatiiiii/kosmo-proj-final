package clone.pinterest.backend.projection;

import java.util.Date;

import org.springframework.data.rest.core.config.Projection;

import clone.pinterest.backend.domain.CommentInPin;
import clone.pinterest.backend.domain.Member;
import clone.pinterest.backend.domain.Pin;

@Projection(name = "commentProjection", types = { CommentInPin.class })
public interface CommentInPinProjection {
    Integer getSeq();

    String getContent();

    Date getRdate();

    MemberProjection getWriter();

}
