package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.Member;

public interface MemberRepository extends CrudRepository<Member, String> {

}
