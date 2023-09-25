package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.Follow;

public interface FollowRepository extends CrudRepository<Follow, String> {

}
