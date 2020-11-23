package com.buzzfreeze.helloWorld;

public class lab9 {
	public static void main(String[] args) {
		int count = 1;

		while (count <= 20) {
			if (count == 11) {
				System.out.println("This is "+count);
				count++;
				continue;
			}
			System.out.println(count);
			count++;
		}
	}

}
