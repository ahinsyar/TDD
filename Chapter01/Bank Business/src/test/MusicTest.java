package test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.Before;
import org.junit.Test;

import main.music;

public class MusicTest {
	private music music;
	
	@Test
	public void testEqual_case1() {
		music musicA = new music("better in time", "leona lewis");
		music musicB = musicA;
		assertEquals(musicA, musicB);
	}
	
	//일반적인 인자를 가져와서 비교하는 테스트
	@Test
	public void testEqual_case2() {
		//실패 하는 테스트
		//이유는 객채가 새로이 선언 되었기 때문에 객체의 ID가 달라서 오류 발생
		music musicA = new music("better in time", "leona lewis");
		music musicB = new music("better in time", "leona lewis");
		assertEquals(musicA, musicB);
		
//		music musicA = new music("better in time", "leona lewis");
//		music musicB = new music("better in time", "leona lewis");
//		assertEquals(musicA.getMusicName(), musicB.getMusicName());
//		assertEquals(musicA.getMusision(), musicB.getMusision());
	}
	
	//toString()을 만들어 테스트
	@Test
	public void testEqual_toString() {
		music musicA = new music("better in time", "leona lewis");
		music musicB = new music("better in time", "leona lewis");
		assertEquals(musicA.toString(), musicB.toString());
	}
}
