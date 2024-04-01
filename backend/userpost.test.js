const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../backend/server'); 

describe('POST /users', () => {

  const baseUrl = 'http://localhost:3000';

  it('should create a new user with valid data', (done) => {
    const user = {
      nom: 'Khodor',
      prenom: 'Hamoud',
      date_naissance: new Date('1990-01-01'),
      email: 'Khodorhamoud@gmail.com',
      password: 'password',
    };

    chai.request(baseUrl)
      .post('/users')
      .send(user)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message', 'Inscription réussie !');
        done();
      });
  });

  it('should return error for missing required fields', (done) => {
    const user = {
      prenom: 'Khodor',
      date_naissance: new Date('1990-01-01'),
      email: 'Khodorhamoud@gmail.com',
      password: 'password',
    };

    chai.request(baseUrl)
      .post('/users')
      .send(user)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('message', 'Une erreur est survenue lors de l\'inscription.');
        done();
      });
  });

  it('should return error for invalid email format', (done) => {
    const user = {
      nom: 'Khodor',
      prenom: 'Hamoud',
      date_naissance: new Date('1990-01-01'),
      email: 'Khodorhamoud@gmail.com',
      password: 'password',
    };

    chai.request(baseUrl)
      .post('/users')
      .send(user)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('message', 'Une erreur est survenue lors de l\'inscription.');
        done();
      });
  });

  
});
