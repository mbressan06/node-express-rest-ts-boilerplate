import app from '../app';
import request from 'supertest';
import connection from '../models/db'

describe("GET /", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/products");
    expect(result.text).toEqual("{\"auth\":false,\"message\":\"No Token, no data.\"}");
    expect(result.status).toEqual(401);
  });
});
