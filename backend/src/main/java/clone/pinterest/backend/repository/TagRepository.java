package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.Tag;
import clone.pinterest.backend.domain.TagId;

public interface TagRepository extends CrudRepository<Tag, TagId> {

}
