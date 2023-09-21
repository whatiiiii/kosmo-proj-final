package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.Image;

public interface ImageRepository extends CrudRepository<Image, Integer> {

}
