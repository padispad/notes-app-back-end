/* eslint-disable linebreak-style */
console.log('Hallo RESTFul API');

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: proccess.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.40.35',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log((`Server berjalan pada ${server.info.uri}`));
};


init();
