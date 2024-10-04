const request = require('supertest');
const app = require('./index'); // Asegúrate de que la ruta sea correcta

describe('GET /users', () => {
    it('debería responder con un array de usuarios', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
