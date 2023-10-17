package clone.pinterest.backend.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;

import clone.pinterest.backend.domain.Member;
import clone.pinterest.backend.domain.Pin;
import clone.pinterest.backend.domain.Save;
import clone.pinterest.backend.domain.SaveId;
import clone.pinterest.backend.repository.MemberRepository;
import clone.pinterest.backend.repository.SaveRepository;

@RepositoryEventHandler
public class PinEventHandler {
    @Autowired
    private SaveRepository saveRepository;
    @Autowired
    private MemberRepository memberRepository;

    @HandleAfterCreate
    public void handlePinCreate(Pin pin) {
        // TODO: change to get current user
        // SaveId saveId = new SaveId(pin.getWriter(), pin);
        Member member = memberRepository.findById("a").orElseThrow();
        SaveId saveId = new SaveId(member, pin);

        Save save = new Save(saveId);
        saveRepository.save(save);
    }
}
