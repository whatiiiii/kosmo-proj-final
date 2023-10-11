package clone.pinterest.backend.domain;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.spi.BackendIdConverter;
import org.springframework.stereotype.Component;

import clone.pinterest.backend.repository.MemberRepository;

@Component
public class FollowIdConverter implements BackendIdConverter {
    @Autowired
    private MemberRepository memberRepository;

    @Override
    public boolean supports(Class<?> delimiter) {
        return Follow.class.equals(delimiter);
    }

    @Override
    public Serializable fromRequestId(String id, Class<?> entityType) {
        if (id == null) {
            return null;
        }

        String[] parts = id.split("_");
        String aID = parts[0];
        String bId = parts[1];

        return new FollowId(memberRepository.findById(aID).orElse(null),
                memberRepository.findById(bId).orElse(null));
    }

    @Override
    public String toRequestId(Serializable source, Class<?> entityType) {
        FollowId memberId = (FollowId) source;
        String aId = memberId.getFollow() != null ? String.valueOf(memberId.getFollow().getId()) : "null";
        String bId = memberId.getFollower() != null ? String.valueOf(memberId.getFollower().getId()) : "null";
        return aId + "_" + bId;
    }
}
