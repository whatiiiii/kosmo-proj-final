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
<<<<<<< HEAD:backend/src/main/java/clone/pinterest/backend/domain/UpImage.java
public class UpImage {
=======
public class Image implements Serializable{
>>>>>>> 1e57e700e9976e6534b3671bb3ecc49fce2ed97e:backend/src/main/java/clone/pinterest/backend/domain/Image.java
    @Id
    @GeneratedValue
    private Integer imgSeq;
    private String fname;
<<<<<<< HEAD:backend/src/main/java/clone/pinterest/backend/domain/UpImage.java
    private String saved_fname;
    @OneToOne(mappedBy = "upimage")
=======
    private String savedFname;

    @OneToOne(mappedBy = "image")
>>>>>>> 1e57e700e9976e6534b3671bb3ecc49fce2ed97e:backend/src/main/java/clone/pinterest/backend/domain/Image.java
    private Member member;
}
