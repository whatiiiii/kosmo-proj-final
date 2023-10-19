package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import clone.pinterest.backend.domain.Member;
import clone.pinterest.backend.projection.MemberProjection;

@RepositoryRestResource(excerptProjection = MemberProjection.class)
public interface MemberRepository extends CrudRepository<Member, String> {
    boolean existsByIdAndPwd(@Param("id") String id, @Param("pwd") String pwd);
}
