class Account{

}
class AccountTest{

    /*
    @Test
    */
    testAccount(){
        var account = new Account()
        if(account == null){
            throw new Exception('계좌 생성 실패')
        }
        console.log('계좌 생성 완료')
    }
}

var test = new AccountTest()
try{
    test.testAccount()
}catch(err){
    err.printStackTrace();
}


