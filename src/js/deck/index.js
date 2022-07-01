ASM.deck.index = function() {
    const asm = this;
    
    const toLoginBtn = document.querySelector('.toLoginBtn');
    const toRegisterBtn = document.querySelector('.toRegisterBtn');
    const toIndexBtns = document.querySelectorAll('.toIndexBtn');
    const eventPopupBtn = document.querySelector('#event-popup button');

    const _loading = {
        show: function() {
            document.querySelector('.loading').classList.remove('fadeout');
            document.querySelector('.loading').classList.add('fadein');
        },
        hide: function() {
            document.querySelector('.loading').classList.remove('fadein');
            document.querySelector('.loading').classList.add('fadeout');
        }
    };

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

    eventPopupBtn.addEventListener('click', function(event) {
        document.querySelector('#event-popup').classList.add('fadeout');
    });

    return {
        loading: _loading,
    }
};

ASM.controller.domController = ASM.deck.index.call(ASM);