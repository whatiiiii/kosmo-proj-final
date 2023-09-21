package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.Pin;

public interface PinRepository extends CrudRepository<Pin, Integer> {

}
