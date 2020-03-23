package test;

import main.Account;

public class AccountTest{

    
    public void testAccount(){
        final Account account = new Account();
    }

    public static void main(final String[] args) {
        final AccountTest test = new AccountTest();

        try {
            test.testAccount();
        } catch (final Exception e) {
            System.out.println("실패(X)");
            return;
        }
        System.out.println("성공(O)");
    }
}