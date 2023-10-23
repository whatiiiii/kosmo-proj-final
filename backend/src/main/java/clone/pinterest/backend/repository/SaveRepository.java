package clone.pinterest.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import clone.pinterest.backend.domain.Save;
import clone.pinterest.backend.domain.SaveId;

@RepositoryRestResource(collectionResourceRel = "saves", path = "saves")
public interface SaveRepository extends CrudRepository<Save, SaveId> {
    boolean existsByIdMemberIdAndIdPinPinSeq(@Param("memberId") String idMemberId,
            @Param("pinId") Integer idPinId);

    @Query("select s.id.pin.pinSeq from #{#entityName} s where s.id.member.id = ?1 and s.id.pin.pinSeq not in (select p.pinSeq from Pin p where p.writer.id = ?1)")
    Integer[] findSavedPinIdsByMemberId(@Param("id") String id);
}
