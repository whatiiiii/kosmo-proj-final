package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import clone.pinterest.backend.domain.CommentInPin;
import clone.pinterest.backend.projection.CommentInPinProjection;

@RepositoryRestResource(excerptProjection = CommentInPinProjection.class)
public interface CommentInPinRepository extends CrudRepository<CommentInPin, Integer> {

}
