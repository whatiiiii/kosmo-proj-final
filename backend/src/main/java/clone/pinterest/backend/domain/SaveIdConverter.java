package clone.pinterest.backend.domain;

import org.springframework.data.rest.webmvc.spi.BackendIdConverter;

import java.io.Serializable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import clone.pinterest.backend.repository.MemberRepository;
import clone.pinterest.backend.repository.PinRepository;

@Component
public class SaveIdConverter implements BackendIdConverter {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private PinRepository pinRepository;

    @Override
    public boolean supports(Class<?> delimiter) {
        return Save.class.equals(delimiter);
    }

    @Override
    public Serializable fromRequestId(String id, Class<?> entityType) {
        if (id == null) {
            return null;
        }

        String[] parts = id.split("_"); // Assuming you use "_" as a delimiter
        // Long aId = Long.parseLong(parts[0]);
        // Long bId = Long.parseLong(parts[1]);

        String aID = parts[0];
        Integer bId = Integer.parseInt(parts[1]);

        return new SaveId(memberRepository.findById(aID).orElse(null),
                pinRepository.findById(bId).orElse(null));
        // return new SaveId();
    }

    @Override
    public String toRequestId(Serializable source, Class<?> entityType) {
        SaveId memberId = (SaveId) source;
        String aId = memberId.getMember() != null ? String.valueOf(memberId.getMember().getId()) : "null";
        String bId = memberId.getPin() != null ? String.valueOf(memberId.getPin().getPinSeq()) : "null";
        return aId + "_" + bId;
    }
}