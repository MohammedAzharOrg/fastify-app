import Fastify from 'fastify';

const createApp = () => {
    const app = Fastify({
        logger: true
    });

    app.get('/health', (_req, reply) => {
        reply.send({
            status: 'ok',
            timestamp: new Date().toISOString()
        })
    });

    return app;
}

export default createApp;
