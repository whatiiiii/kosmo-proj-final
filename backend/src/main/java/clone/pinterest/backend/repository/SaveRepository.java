package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.Save;
import clone.pinterest.backend.domain.SaveId;

public interface SaveRepository extends CrudRepository<Save, SaveId> {

}
