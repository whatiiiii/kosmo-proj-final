package clone.pinterest.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import clone.pinterest.backend.domain.Follow;
import clone.pinterest.backend.domain.FollowId;

@RepositoryRestResource(collectionResourceRel = "follows", path = "follows")
public interface FollowRepository extends CrudRepository<Follow, FollowId> {
    boolean existsByIdFollowIdAndIdFollowerId(@Param("follow") String idFollowId,
            @Param("follower") String idFollowerId);

    int countByIdFollowerId(@Param("follower") String idFollowerId);

    @Query("select f.id.follow.id from #{#entityName} f where f.id.follower.id = ?1")
    String[] findIdFollowIdsByIdFollowerId(@Param("follower") String idFollowerId);
}
