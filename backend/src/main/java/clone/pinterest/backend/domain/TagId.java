package clone.pinterest.backend.domain;

import java.io.Serializable;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class TagId implements Serializable {
    private String tagName;
    @ManyToOne
    @JoinColumn(name = "pinSeq")
    private Pin pin;
}
