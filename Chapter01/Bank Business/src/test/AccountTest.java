package test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.Before;
import org.junit.Test;

import main.Account;

public class AccountTest {
	
	private Account account;
	
	@Before
	public void setup() {
		account = new Account(10000);
	}

	@Test
	public void testAccount() throws Exception {
		setup();
	}
	
	@Test
	public void testGetBalance() throws Exception{
		setup();
		if(account.getBalance() != 10000){
			fail("Error occurred!");
		}
		
		account = new Account(1000);
		if(account.getBalance() != 1000) {
			assertEquals(1000, account.getBalance());
		}
		
		account = new Account(0);
		if(account.getBalance() != 0) {
			assertEquals(0, account.getBalance());
		}
	}
	
	@Test
	public void testDeposit() throws Exception{
		setup();
		account.deposit(1000);
		assertEquals(11000, account.getBalance());
	}
	
	@Test
	public void testWithdraw() throws Exception{
		setup();
		account.withdraw(1000);
		assertEquals(9000, account.getBalance());
	}
	
	public static void main(String[] args) {
		AccountTest test = new AccountTest();
		try {
			test.testAccount();
			test.testGetBalance();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("실패(X)");
		}
		System.out.println("성공(o)");
	}
}
