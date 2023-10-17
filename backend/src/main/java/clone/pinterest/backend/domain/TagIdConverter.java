package clone.pinterest.backend.domain;

import java.io.Serializable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.spi.BackendIdConverter;
import org.springframework.stereotype.Component;
import clone.pinterest.backend.repository.PinRepository;

@Component
public class TagIdConverter implements BackendIdConverter {

    @Autowired
    private PinRepository pinRepository;

    @Override
    public boolean supports(Class<?> delimiter) {
        return Tag.class.equals(delimiter);
    }

    @Override
    public Serializable fromRequestId(String id, Class<?> entityType) {
        if (id == null) {
            return null;
        }
        System.out.println(id);

        String[] parts = id.split("_");
        String aID = parts[0];
        Integer bId = Integer.parseInt(parts[1]);

        return new TagId(aID,
                pinRepository.findById(bId).orElse(null));
    }

    @Override
    public String toRequestId(Serializable source, Class<?> entityType) {
        TagId memberId = (TagId) source;
        String aId = memberId.getTagName();
        String bId = memberId.getPin() != null ? String.valueOf(memberId.getPin().getPinSeq()) : "null";
        return aId + "_" + bId;
    }

}
