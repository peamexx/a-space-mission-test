ASM.deck.login = function() {
    console.log('%c'+'----------------login onload', 'color:#00bfa5');

    const btn = document.querySelector('#loginBtn');
    const id = document.querySelector('#id');
    const password = document.querySelector('#password');

    btn.addEventListener('click', async function(event) {
        event.preventDefault();
        let returnv = await _chkInfo();

        if(returnv) {
            let data = {
                'userName': id.value,
                'password': password.value,
            };

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then(function(res) {
                console.log('성공')
            });
        }
    });

    function _chkInfo() {
        let isEmpty = id.value.length < 1 || password.value.length < 1;
        let isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(id.value);

        if(isEmpty) {
            console.log('빈칸 만들지마라..')
        } else if(isKorean) {
            console.log('한글쓰지마라..')
        } else {return true};
    };
};

ASM.deck.login.call();

console.log(window);