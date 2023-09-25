package clone.pinterest.backend.domain;

import java.io.Serializable;

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
    private Integer imgSeq;
    private String fname;
    private String saved_fname;
    @OneToOne(mappedBy = "upimage")
    private Member member;
}
