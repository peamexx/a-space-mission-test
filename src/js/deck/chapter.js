ASM.deck.chapter = function() {
    const asm = this;
    
    const chapter = document.querySelector('#chapter');
    const time = chapter.querySelector('.top .time');
    const textbox = chapter.querySelector('#text-box');
    const line = textbox.querySelector('p');

    let data = {
        'chapter': 1
    };
    let soundPress = new Howl({ 
        src: ['/audio/press.mp3'],
        sprite: {
            fire: [200, 1000]
        }
    });
    
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

    textbox.addEventListener('click', function(event) {
        soundPress.play('fire');
        _setNextLine();
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
            asm.settings.currentChapter = 1;
            asm.settings.currentLineIndx = 0;
        }
    };

    function _setNextLine() {
        let currChapterIndx = asm.settings.currentChapter - 1;
        let nextLineIndx = asm.settings.currentLineIndx + 1;

        if(asm.settings.lines[currChapterIndx].text[nextLineIndx] == undefined) {
            nextLineIndx = nextLineIndx - 1;
        };
        
        line.textContent = asm.settings.lines[currChapterIndx].text[nextLineIndx];

        asm.settings.currentLineIndx = nextLineIndx;
    };

    return {
        setLines: _setLines
    }
};

ASM.controller.chapterController = ASM.deck.chapter.call(ASM);