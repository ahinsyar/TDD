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
	
	//�Ϲ����� ���ڸ� �����ͼ� ���ϴ� �׽�Ʈ
	@Test
	public void testEqual_case2() {
		//���� �ϴ� �׽�Ʈ
		//������ ��ä�� ������ ���� �Ǿ��� ������ ��ü�� ID�� �޶� ���� �߻�
		music musicA = new music("better in time", "leona lewis");
		music musicB = new music("better in time", "leona lewis");
		assertEquals(musicA, musicB);
		
//		music musicA = new music("better in time", "leona lewis");
//		music musicB = new music("better in time", "leona lewis");
//		assertEquals(musicA.getMusicName(), musicB.getMusicName());
//		assertEquals(musicA.getMusision(), musicB.getMusision());
	}
	
	//toString()�� ����� �׽�Ʈ
	@Test
	public void testEqual_toString() {
		music musicA = new music("better in time", "leona lewis");
		music musicB = new music("better in time", "leona lewis");
		assertEquals(musicA.toString(), musicB.toString());
	}
}
