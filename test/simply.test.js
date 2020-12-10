const chai = require('chai');
const expect = chai.expect;
const url = `http://localhost:4000/`;
const request = require('supertest')(url);

// This unit test will check request api success and faile
describe('GraphQL', () => {
  it('Check authenticaion throws out error', () => {
    request.post('graphql/')
    .set('Authorization', 'none')
    .set('Content-Type',  'application/json')
    .send({ query: '{ simply(q: "Houston") { privateRemarks address {city} } }'})
    .expect(403)
    .end((err,res) => {
      return err
    })
  })

  it('Returns properties with city = Houston', (done) => {
      request.post('graphql/')
      .set('Authorization', '676cfd34-e706-4cce-87ca-97f947c43bd4')
      .set('Content-Type',  'application/json')
      .send({ query: '{ simply(q: "Houston") { privateRemarks address {city} } }'})
      .expect(200)
      .end((err,res) => {
        if (err) return done(err);
        res.body.simply
        done();
        })
   })  
});