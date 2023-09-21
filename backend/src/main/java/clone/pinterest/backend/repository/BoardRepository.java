package clone.pinterest.backend.repository;

import org.springframework.data.repository.CrudRepository;
import clone.pinterest.backend.domain.Board;

public interface BoardRepository extends CrudRepository<Board, Integer> {

}
