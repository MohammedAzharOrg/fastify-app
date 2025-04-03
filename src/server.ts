import dotenv from 'dotenv';

import createApp from "./app";

dotenv.config();

const start = async () => {
    const app = createApp();

    await app.listen({
        port: 3000,
        host: '0.0.0.0'
    });
}

start();

