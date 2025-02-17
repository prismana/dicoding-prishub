//promise dengan menggunakan promisify yang di dapat dari modul util

const { promisify } = require('util')

function getUser(isOffline, callback) {
    setTimeout(() => {
        const user = ['Jhon', 'Wick', 'Babayaga'];

        if(isOffline) {
            callback(new Error("Tidak bisa mendapatkan user karena offline"), null)
            return
        }

        callback(null, user)
    }, 3000);
}

//pemakaian promisiff
const getUsersPromise = promisify(getUser)


//pemanggilan dan test promise
getUsersPromise(false)
    .then(user => console.log(user))
    .catch(err => console.log(err.message))

getUsersPromise(true)
    .then(user => console.log(user))
    .catch(err => console.log(err.message))

