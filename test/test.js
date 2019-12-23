var assert = require('assert');
describe('Array', () => {
    describe('#indexOf()', () =>{
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

// it('double done', function(done){
//     setImmediate(done);
//     setImmediate(done);
// });

// describe('User', () => {
//     describe('#save()', () => {
//         it('should save without error', function(done){
//             var user = new user('Luna');
//             user.save(done);
//         })
//     })
// })

//antipattern
// it('should complete this test', function(done){
//     return new Promise(function(resolve){
//         assert.ok(true);
//         resolve();
//     }).then(done);
// })

//모카에서는 화살표 함수를 권장 하지 않는다.
// descripbe('my suite', () => {
//     it('my test', () => {
//         this.timeout(1000);
//         assert.ok(true);
//     })
// })

//모든 hook에 일반 시험의 경우와 유사하게 동기, 비동기를 사용 할 수있다.
//임의의 더미 데이터를 추가하여 테스트 해 볼 수 있다.
// describe('Connection', function() {
//     var db = new Connection(),
//       tobi = new User('tobi'),
//       loki = new User('loki'),
//       jane = new User('jane');
  
//     beforeEach(function(done) {
//       db.clear(function(err) {
//         if (err) return done(err);
//         db.save([tobi, loki, jane], done);
//       });
//     });
  
//     describe('#find()', function() {
//       it('respond with matching records', function(done) {
//         db.find({type: 'User'}, function(err, res) {
//           if (err) return done(err);
//           res.should.have.length(3);
//           done();
//         });
//       });
//     });
//   });

//콜백 없이 pending test를 실행 할 수 있다.
//나중에 누군가가 테스트 case를 추가 할 수 있다.
// describe('Array', function(){
//     describe('#indexOf()', function(){
//         //pending test below
//         it('should return -1 when the value is not present')
//     })
// })

//only를 이용하여 해당 테스트만 실행 하도록 한다.
// describe('Array', function(){
//     describe('#indexOf()', function(){
//         it.only('only를 사용한 테스트', function(){

//         })
//         it('only없이 사용한 테스트', function(){

//         })
//     })
// })
//only를 여러번 사용 하여 서브 세트를 만들 수도 있다.
// describe('Array', function(){
//     describe('#indexOf()', function(){
//         it.only('should return -1 unless present', function(){

//         })
//         it.only('should return the index when present', function(){

//         })
//         it('should return -1 if called with a non-Array context', function(){

//         })
//     })
// })
//여러 제품군을 선택 할 수도 있다.
// describe('Array', function(){
//     describe.only('#indexOf()', function(){
//         it('should return -1 unless present', function(){

//         })
//         it('should return the index when present', function(){

//         })
//     })
//     describe.only('#concat()', function(){
//         it('should return a new Array', function(){

//         })
//     })
//     describe('#slice()', function(){
//         it('should return a new Array', function(){

//         })
//     })
// })
//테스트의 우선순위가 있다.
// describe('Array', function(){
//     describe.only('#indexOf()', function(){
//         it.only('should return -1 unless present', function(){

//         })
//         it('should return the index when present', function(){

//         })
//     })
// })

//skip을 이용하여 테스트를 건너뛸수 있다.
//건너뛴 테스트는 pending으로 표시 된다.
describe('Array', function(){
    describe('#indexOf()', function(){
        it.skip('should return -1 unless present', function(){

        })
        it('should return the index when present', function(){

        })
    })
})
//전체 스위트에 skip을 넣어 건너뛸 수 있다.
describe('Array', function(){
    describe.skip('#indexOf()', function(){
        it('should return -1 unless present', function(){

        })
        it('should return the index when present', function(){

        })
    })
})


