ASM.deck.login = function() {
    const btn = document.querySelector('#loginBtn');
    const id = document.querySelector('#id');
    const password = document.querySelector('#password');
    const warning = document.querySelector('.login p');

    btn.addEventListener('click', async function(event) {
        event.preventDefault();
        warning.textContent = '';

        let returnv = await _chkInfo();

        if(returnv) {
            let data = {
                'id': id.value,
                'password': password.value,
            };

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then(function(res) {
                return res.json();
            }).then(function(result) {
                if(result.data == null) {
                    warning.textContent = 'id나 password를 다시 확인해주세요.'
                } else {
                    warning.textContent = '로그인 성공';
                }
            }).catch(function(err) {
                console.log(err);
            });
        }
    });

    function _chkInfo() {
        let isEmpty = id.value.length < 1 || password.value.length < 1;
        let isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(id.value);

        if(isEmpty) {
            warning.textContent = '올바른 값을 입력해주세요.';
        } else if(isKorean) {
            warning.textContent = 'id에 한글이 포함되어있습니다. 다시 입력해주세요.';
        } else {return true};
    };
};

ASM.deck.login.call(ASM);