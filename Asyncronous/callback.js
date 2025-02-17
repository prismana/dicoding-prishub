function getUsers(isOffline, callback) {

    setTimeout(() => {
        const user = ["Prismana", "Niken", "Janaka"]

        if (isOffline) {
            callback(new Error("Tidak bisa mengambil data user karena offline"), null)
            return
        }

        callback(null, user)
    }, 3000)
}

function userCallback(error, user) {
    if (error) {
        console.log("proses gagal", error.message)
        return
    }

    console.log("Proses berhasil", user)
}


getUsers(false, userCallback)
getUsers(true, userCallback)