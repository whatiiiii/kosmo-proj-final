package clone.pinterest.backend.projection;

import java.util.Date;

import org.springframework.data.rest.core.config.Projection;

import clone.pinterest.backend.domain.Member;
import clone.pinterest.backend.domain.UpImage;

@Projection(name = "memberProjection", types = { Member.class })
public interface MemberProjection {
    String getId();

    String getName();

    String getSex();

    Date getBirth();

    String getLoc();

    UpImage getUpimage();
}
