const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat di akses dengan method tersebut'
        }
    },
    // Halaman about
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat di akses dengan method tersebut'
        }
    },
    // Route parameter halo
    {
        method: 'GET',
        path: '/hello/{username?}',
        handler: (request, h) => {
            const { username = 'orang asing'} = request.params
            return `Hello ${username}`
        }
    },
    // route ke lainya
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    }
]

module.exports = routes;