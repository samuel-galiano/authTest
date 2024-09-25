export function fazerLogin() {
    return new Promise(res => {
        setTimeout(() => {
            res({
                token: "uCBWIVSBWUIRVBWE89HC283DNCN.XonionifNEfnINIInOUNEBNPIvbuorj9-vr90jvwm",
                user: {
                    name: "Samuel Galiano",
                    email: "samuel@galiano.com"
                }
            })
        }, 2000)
    })
}

