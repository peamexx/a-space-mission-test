ASM.deck.last = function() {
    const asm = this;
    const asmc = asm.controller;
    
    let interval = setInterval(function() {
        if(asm.settings.promises.length > 0) {
            console.log('all promises compeleted')
            
            asmc.chapterController.setLines();
            asmc.domController.loading.hide();
    
            clearInterval(interval);
        } else {
            console.log('promises not yet..')
        }
    });
};

ASM.deck.last.call(ASM);