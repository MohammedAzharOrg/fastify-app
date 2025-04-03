import dotenv from 'dotenv';

import createApp from "./app";

dotenv.config();

const start = async () => {
    const app = createApp();

    await app.listen({
        port: Number(process.env.PORT),
        host: process.env.HOST
    });
}

start();

