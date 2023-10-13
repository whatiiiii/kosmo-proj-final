package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import clone.pinterest.backend.domain.Member;

public interface MemberRepository extends CrudRepository<Member, String> {
    boolean existsByIdAndPwd(@Param("id") String id, @Param("pwd") String pwd);
}
