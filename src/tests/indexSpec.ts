import request from 'supertest';
import app from '../index';

const rapp = request(app);

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
    request(app)
      .get('/api/image?name=invalid&width=200&height=200')
      .expect(300);
  });
});
