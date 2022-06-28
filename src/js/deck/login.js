ASM.deck.login = function() {
    console.log('%c'+'----------------login onload', 'color:#00bfa5');

    const btn = document.querySelector('#loginBtn');
    const userName = document.querySelector('#userName');
    const password = document.querySelector('#password');

    btn.addEventListener('click', async function(event) {
        event.preventDefault();
        let returnv = await _chkInfo();

        if(returnv) {
            let data = {
                'userName': userName.value,
                'password': password.value,
            };

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then(function(res) {
                console.log('도착...')
                let data = res;

                if(data.length > 0) {
                    console.log('잇네')
                } else {
                    alert('읍어')
                }
            })
        }
    });

    function _chkInfo() {
        let isEmpty = userName.value.length < 1 || password.value.length < 1;

        if(isEmpty) {
            console.log('빈칸 만들지마라..')
        } else {return true};
    };
};

ASM.deck.login.call();

console.log(window);