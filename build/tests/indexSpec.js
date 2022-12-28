"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const rapp = (0, supertest_1.default)(index_1.default);
describe('Testing the end points', () => {
    it('should return the statut of 200 OK with valid type of image = jpg', () => {
        rapp
            .get('/api/resize?name=encenadaport&height=500&width=300')
            .expect(200)
            .expect('Content-Type', 'image/jpeg');
    });
    it('should return the statut of 200 OK ', () => {
        rapp.get('/api').expect(200);
    });
    it('should return the statut of 400 Bad Request with missing parameters', () => {
        rapp.get('/api/resize').expect(200);
    });
    it('should return the statut of 404 Not Found with invalid name', () => {
        rapp.get('/api/resize?name=invalid&width=200&height=200').expect(404);
    });
    it('should return the statut of 300 moved permanently', () => {
        (0, supertest_1.default)(index_1.default)
            .get('/api/image?name=invalid&width=200&height=200')
            .expect(300);
    });
});
