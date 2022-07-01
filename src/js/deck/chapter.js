ASM.deck.chapter = function() {
    const asm = this;
    
    const chapter = document.querySelector('#chapter');
    const time = chapter.querySelector('.top .time');
    const line = chapter.querySelector('#text-box p');

    let data = {
        'chapter': 1
    };
    
    let promise = fetch('/chapter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(function(res) {
        return res.json();
    }).then(function(result) {
        asm.settings.lines = [].concat(result.data);
        asm.settings.promises.push(promise);
    }).catch(function(err) {
        console.log(err);
    });


    // function _setTime() {
    //     return setInterval(function() {
    //         let date = new Date();
    //         time.textContent = `${date.getFullYear()}/${(date.getMonth() + 1)}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    //     }, 60000)
    // };

    function _setLines() {
        if(asm.settings.lines.length > 0) {
            line.textContent = asm.settings.lines[0].text[0];
        }
    };

    return {
        setLines: _setLines
    }
};

ASM.controller.chapterController = ASM.deck.chapter.call(ASM);