package clone.pinterest.backend.contentstore;

import org.springframework.content.commons.store.ContentStore;
import org.springframework.content.rest.StoreRestResource;
import clone.pinterest.backend.domain.UpImage;

@StoreRestResource
public interface UpImageContentStore extends ContentStore<UpImage, String> {

}
