package clone.pinterest.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import clone.pinterest.backend.domain.Pin;
import clone.pinterest.backend.projection.PinProjection;

@RepositoryRestResource(excerptProjection = PinProjection.class)
public interface PinRepository extends CrudRepository<Pin, Integer> {
    @Query("select p.pinSeq from #{#entityName} p")
    Integer[] findAllIds();
}
