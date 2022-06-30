ASM.deck.canvas = function() {
    const asm = this;

    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    const p = new Image();
    p.src = './images/icon/sq.png';

    p.onload = function() {
        c.drawImage(p, 10, 10, p.width/4, p.height/4);
    };

    canvas.addEventListener('click', function(event) {
        event.preventDefault();

        let x = event.clientX;
        let y = event.clientY;

        console.table(x, y)

        if(290 < x && x < 330 && 150 < y && y < 240) {
            console.dir('walla');
        }
    });

};

ASM.deck.canvas.call(ASM);