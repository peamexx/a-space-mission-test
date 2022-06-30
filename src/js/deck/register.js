ASM.deck.register = function() {
    const asm = this;

    const regId = document.querySelector('#regId');
    const regPassword = document.querySelector('#regPassword');
    const regPassword2 = document.querySelector('#regPassword2');
    const regBtn = document.querySelector('#regBtn');
    const warning = document.querySelector('.register p');

    regBtn.addEventListener('click', async function(event) {
        event.preventDefault();
        warning.textContent = '';

        let returnv = await _chkInfo();

        if(returnv) {
            let data = {
                'id': regId.value,
                'password': regPassword.value,
            };

            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then(function(res) {
                return res.json();
            }).then(function(result) {
                if(result.data == null) {
                    warning.textContent = '이미 id가 존재합니다. 다른 id를 입력해주세요.'
                } else {
                    warning.textContent = '회원가입 성공. 잠시후 메인으로 돌아갑니다.';

                    _rediectMain();
                }
            }).catch(function(err) {
                console.log(err);
            });
        }
    });

    function _chkInfo() {
        let isEmpty = regId.value.length < 1 || regPassword.value.length < 1 || regPassword2.value.length < 1;
        let isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(regId.value);
        let isNotEqual = regPassword.value != regPassword2.value;

        if(isEmpty) {
            warning.textContent = '올바른 값을 입력해주세요.';
        } else if(isKorean) {
            warning.textContent = 'id에 한글이 포함되어있습니다. 다시 입력해주세요.';
        } else if(isNotEqual) {
            warning.textContent = '비밀번호가 맞지 않습니다. 다시 입력해주세요.'
        } else {return true};
    };

    function _rediectMain() {
        asm.settings.timer = true;
        setTimeout(() => {
            if(asm.settings.timer) {
                window.location.href = '';
            };
        }, 2000);
    };
};

ASM.deck.register.call(ASM);