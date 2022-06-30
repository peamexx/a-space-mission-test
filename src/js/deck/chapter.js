ASM.deck.chapter = function() {
    const asm = this;
    
    const chapter = document.querySelector('#chapter');
    const time = chapter.querySelector('.top .time');

    let data = {
        'chapter': 1
    }
    fetch('/chapter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(function(res) {
        return res.json();
    }).then(function(result) {
        asm.settings.lines = [].concat(result.data);
        console.dir(asm);
    }).catch(function(err) {
        console.log(err);
    });


    // function _setTime() {
    //     return setInterval(function() {
    //         let date = new Date();
    //         time.textContent = `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    //     }, 60000)
    // };
};

ASM.deck.chapter.call(ASM);