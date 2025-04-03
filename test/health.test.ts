import { FastifyInstance } from "fastify";
import createApp from "../src/app";

describe('health route', () => {
    let app: FastifyInstance;

    beforeAll(() => {
        app = createApp();
    });

    test('Should return status ok if the server is up and running', async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/'
        });

        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual(expect.objectContaining({
            status: 'ok',
            timestamp: expect.any(String)
        }));
    })
})