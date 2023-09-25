package clone.pinterest.backend.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class UpImage {
    @Id
    @GeneratedValue
    private Integer img_seq;
    private String fname;
    private String saved_fname;
    @OneToOne(mappedBy = "upimage")
    private Member member;
}
