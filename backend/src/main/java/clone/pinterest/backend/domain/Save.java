package clone.pinterest.backend.domain;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Save {
    @EmbeddedId
    private SaveId id;
    @OneToOne
    @JoinColumn(name = "board", referencedColumnName = "boardSeq")
    private Board board;
}
