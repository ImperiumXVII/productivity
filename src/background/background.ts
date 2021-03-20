chrome.runtime.onMessage.addListener((req: Record<string, string | Blob>, sender: chrome.runtime.MessageSender, sendResponse: (response?: Record<string, unknown>) => void) => {
    if(req.msg == 'check_ucp') {
        sendResponse({ 'ucp_open': true });
    } else if(req.msg == 'lookup') {
        setTimeout(async (): Promise<void> => {
                const data_res = await new Promise<string>((resolve) => {
                $.get('https://ls-rp.com/?page=profile&select=administration&option=lookup&u_lookup=Lookup+this+user&u_name=' + req.lookup_target, (data: string) => {
                    resolve(data);
                });
            });
            sendResponse({ lookup: data_res });
        }, 100);
    } else if(req.msg == 'namechanges') {
        setTimeout(async (): Promise<void> => {
            const data_res = await new Promise<string>((resolve) => {
                $.get('https://ls-rp.com/?page=profile&select=administration&option=searchnames&search_submit=Search%21&lookup_name=' + req.lookup_target, (data: string) => {
                    resolve(data);
                });
            });
            sendResponse({ lookup: data_res });
        }, 100);
    } else if(req.msg == 'usernote') {
        const formData = new FormData();
        formData.append('note_player', req.note_player);
        formData.append('note_type', req.note_type);
        formData.append('note_message', req.note_message);
        formData.append('note_add', 'Add note');
        fetch('https://ls-rp.com/index.php?page=profile&select=administration&option=anote_add', {
            method: "POST",
            body: formData
        });
    }
    return true;
});