const asm = window.ASM;

let interval = setInterval(function() {
    if(asm.settings.promises.length > 0) {
        console.log('all promises compeleted')
        
        ASM.controller.setLines();

        clearInterval(interval);
    } else {
        console.log('promises not yet..')
    }
})