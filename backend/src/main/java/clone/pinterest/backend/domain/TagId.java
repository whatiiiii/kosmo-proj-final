package clone.pinterest.backend.domain;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TagId implements Serializable {
    private String tag_name;
    private Integer pin_seq;
}
