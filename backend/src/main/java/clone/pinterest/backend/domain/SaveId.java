package clone.pinterest.backend.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SaveId implements Serializable {
    private String saved_member;
    private Integer saved_pin;
    // private Member member;
    // private Pin saved_pin;
}
