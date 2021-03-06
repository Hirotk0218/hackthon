// LIFFの初期化
function liffInitialize () {
    liff.init(
        {
            liffId: "1653377981-z9Gw9Jaj"
        },
        data => {
            console.log('Initialize Success')
        },
        err => {
            console.log('LIFF initialization failed')
        }
    )
}

// UserProfileを取得します
function getProfile (callback) {
    liff.getProfile().then(function (profile) {
        callback(profile);
    });
 }

//Messageの送付
function sendTextMessage (msg) {
    liff.sendMessages([
        {
            type:'text',
            text:msg
        }
    ])
    .then(() => {
        console.log('message sent')
        liff.closeWindow()
    })
    .catch((err) => {
        console.log('error', err)
    })
}
