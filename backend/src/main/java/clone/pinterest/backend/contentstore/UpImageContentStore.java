package clone.pinterest.backend.contentstore;

import org.springframework.content.commons.store.ContentStore;
import org.springframework.content.rest.StoreRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import clone.pinterest.backend.domain.UpImage;

@StoreRestResource
@CrossOrigin(methods = { RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.OPTIONS })
public interface UpImageContentStore extends ContentStore<UpImage, String> {

}
