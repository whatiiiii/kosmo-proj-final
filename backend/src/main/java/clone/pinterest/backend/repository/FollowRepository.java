package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import clone.pinterest.backend.domain.Follow;
import clone.pinterest.backend.domain.FollowId;

@RepositoryRestResource(collectionResourceRel = "follows", path = "follows")
public interface FollowRepository extends CrudRepository<Follow, FollowId> {
    boolean existsByIdFollowIdAndIdFollowerId(@Param("follow") String idFollowId,
            @Param("follower") String idFollowerId);

    int countByIdFollowId(@Param("follow") String idFollowId);
}
