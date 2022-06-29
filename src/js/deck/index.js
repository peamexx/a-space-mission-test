ASM.deck.index = function() {
    console.log('%c'+'----------------index onload', 'color:#00bfa5');

    const toLoginBtn = document.querySelector('.toLoginBtn');
    const toRegisterBtn = document.querySelector('.toRegisterBtn');
    const toIndexBtn = document.querySelector('.toIndexBtn');

    toLoginBtn.addEventListener('click', function(event) {
        event.target.parentElement.classList.add('hide');
        document.querySelector('.login').classList.remove('hide');
    });

    toIndexBtn.addEventListener('click', function(event) {
        event.target.parentElement.classList.add('hide');
        document.querySelector('.index').classList.remove('hide');
    });
};

ASM.deck.index.call();