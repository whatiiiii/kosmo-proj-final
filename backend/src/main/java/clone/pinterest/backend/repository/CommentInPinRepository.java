package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.CommentInPin;

public interface CommentInPinRepository extends CrudRepository<CommentInPin, Integer> {

}
