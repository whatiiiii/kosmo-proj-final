package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.Follow;
import clone.pinterest.backend.domain.FollowId;

public interface FollowRepository extends CrudRepository<Follow, FollowId> {

}
