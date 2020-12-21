// const app = require('./index')
// const request = require('supertest')
// const should = require('should')
// const mocha = require('mocha')

// describe('GET /users는 ', () =>{
//     describe('성공시' ,()=>{
//         it('유저 객체를 담은 배열로 응답한다.', (done) =>{
//             request(app)
//                 .get('/users')
//                 .end((err, res) =>{
//                     res.body.should.be.instanceOf(Array);
//                     done();
//                 })
//         })
//         it('최대 limit 갯수 만큼 응답한다.', (done) =>{
//             request(app)
//                 .get('/users?limit=2')
//                 .end((err, res) =>{
//                     res.body.should.have.lengthOf(2)
//                     done();
//                 })
//         })
//     })
//     describe('실패시', ()=>{
//         it('limit이 숫자 형이 아니면 400을 응답한다.', (done)=>{
//             request(app)
//                 .get('/users?limit=two')
//                 .expect(400)
//                 .end((err, res) =>{
//                     done();
//                 });
//         })
//     })
// })
// describe('GET /users/1은', () =>{
//     describe('성공시', () =>{
//         it('id 가 1인 유저 객체를 반환한다.', (done)=>{
//             request(app)
//                 .get('/users/1')
//                 .end((err, res)=>{
//                     res.body.should.have.property('id', 1);
//                     done();
//                 })
//         })
//     })
//     describe('실패시', () =>{
//         it('id가 숫자가 아닐 경우 ', (done)=>{
//             request(app)
//                 .get('/users/one')
//                 .expect(400)
//                 .end(done)
//         })
//         it('id로 유저를 찾을 수 없는 경우', (done)=>{
//             request(app)
//                 .get('/users/999')
//                 .expect(404)
//                 .end(done)
//         })
//     })
// })
// describe('DELETE /users/1은', ()=>{
//     describe('성공시', () =>{
//         it('삭제시 204를 반환', (done)=>{
//             request(app)
//                 .delete('/users/1')
//                 .expect(204)
//                 .end(done)
//         })
//     })
//     describe('실패시', () =>{
//         it('id가 숫자가 아닐경우 400으로 응답한다.', (done) =>{
//             request(app)
//                 .delete('/users/one')
//                 .expect(400)
//                 .end(done)
//         })
//     })
// })
// describe('POST /users', () =>{
//     describe('성공시', ()=>{
//         let body;
//         let name = 'daniel'

//         before(done =>{
//             request(app)
//                 .post('/users')
//                 .send({name: name})
//                 .expect(201)
//                 .end((err, res) =>{
//                     body = res.body;
//                     done();
//                 })
//         })
//         it('생성된 유저 객체를 반환한다.', ()=>{
//             body.should.have.property('id');
//         })
//         it('입력한 name을 반환한다.', (done)=>{
//             body.should.have.property('name', name)
//             done();
//         })
//     })
//     describe('실패시', ()=>{
//         it('name 파라미터 누락시 400 반환', (done)=>{
//             request(app)
//                 .post('/users')
//                 .send({})
//                 .expect(400)
//                 .end(done)
//         })
//         it("name이 중복될 경우 409를 반환", (done)=>{
//             request(app)
//                 .post('/users')
//                 .send({name:'daniel'})
//                 .expect(409)
//                 .end(done)
//         })
//     })
// })

// describe('POST /users', () =>{
//     describe('성공시', ()=>{
//         const name = 'den'
//         it('변경된 name을 응답한다.', (done)=>{
//             request(app)
//                 .put('/users/3')
//                 .send({name:name})
//                 .end((err, res)=>{
//                     res.body.should.have.property('name', name)
//                     done();
//                 })
//         })
//     })
//     describe('실패시', ()=>{
//         it('정수가 아닌 id인 경우 400', (done)=>{
//             request(app)
//                 .put('/users/one')
//                 .expect(400)
//                 .end(done)
//         })
//         it('name이 없을 경우 400', (done)=>{
//             request(app)
//                 .put('/users/1')
//                 .send({})
//                 .expect(400)
//                 .end(done)
//         })
//         it('없는 유저일 경우 404', (done)=>{
//             request(app)
//                 .put('/users/5')
//                 .send({name:'crys'})
//                 .expect(404)
//                 .end(done)
//         })
//         it('이름이 중복일 경우 409', (done) =>{
//             request(app)
//                 .put('/users/3')
//                 .send({name:'daniel'})
//                 .expect(409)
//                 .end(done)
//         })
//     })
// })