ASM.deck.index = function() {
    const asm = this;
    
    const toLoginBtn = document.querySelector('.toLoginBtn');
    const toRegisterBtn = document.querySelector('.toRegisterBtn');
    const toIndexBtns = document.querySelectorAll('.toIndexBtn');

    toLoginBtn.addEventListener('click', function(event) {
        event.target.parentElement.classList.add('hide');
        document.querySelector('.login').classList.remove('hide');
    });

    toRegisterBtn.addEventListener('click', function(event) {
        event.target.parentElement.classList.add('hide');
        document.querySelector('.register').classList.remove('hide');
    });

    toIndexBtns.forEach(function(el) {
        el.addEventListener('click', function(event) {
            asm.settings.timer = false;

            event.target.parentElement.classList.add('hide');
            document.querySelector('.index').classList.remove('hide');
            document.querySelectorAll('input').forEach(function(el) { //hhj나중에수정
                el.value = '';
            });
            document.querySelectorAll('.warning').forEach(function(el) { //hhj나중에수정
                el.textContent = '';
            });
        });
    });
};

ASM.deck.index.call(ASM);