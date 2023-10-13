package clone.pinterest.backend.contentstore;

import org.springframework.content.commons.store.ContentStore;
import org.springframework.content.rest.StoreRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import clone.pinterest.backend.domain.UpImage;

@StoreRestResource
@CrossOrigin
public interface UpImageContentStore extends ContentStore<UpImage, String> {

}
