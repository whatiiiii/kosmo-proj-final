package clone.pinterest.backend.domain;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Pin {
    @Id
    @GeneratedValue
    private Integer pin_seq;
    private String pin_title;
    private Long pin_desc;
    private Integer pin_img;
    private Date pin_rdate;
    private String pin_writer;
}
