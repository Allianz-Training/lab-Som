package com.allianz.helloWorld;

public class hw1 {
	public static void main(String[] args) {
		draw1(2);
		draw2(2);
		draw3(4);
		draw4(4);
		draw5(3);
		draw6(3);
		draw7(3);
		draw8(4);
	}
	
	public static void draw1(int n) {
		for(int i=0;i<n;i++) {
			System.out.print("*");
		}
		System.out.println();
		System.out.println();
	}
	public static void draw2(int n) {
		for (int i = 0; i < n; i++) {
			for(int j=0;j<n;j++) {
				System.out.print("*");
			}
			System.out.print("\n");
		}
		System.out.println("");

	}
	public static void draw3(int n) {
		for (int i = 1; i <= n; i++) {
			for(int j=1;j<=n;j++) {
				System.out.print(j);	
			}
			System.out.print("\n");
		}	
		System.out.println("");
	}
	
	public static void draw4(int n) {
		for (int i = n; i > 0 ; i--) {
			for(int j=n;j>0;j--) {
				System.out.print(j);	
			}
			System.out.print("\n");
		}	
		System.out.println("");
	}
	
	public static void draw5(int n) {
		int number=1;
		for (int i = n; i > 0 ; i--) {
			for(int j=n;j>0;j--) {
				System.out.print(number);	
			}
			number+=1;
			System.out.print("\n");
		}	
		System.out.println("");
	}
	
	public static void draw6(int n) {
		int number=n;
		for (int i = 1; i <= n; i++) {
			for(int j=1;j<=n;j++) {
				System.out.print(number);
			}
			number-=1;
			System.out.print("\n");
		}	
		System.out.println("");
	}
	
	public static void draw7(int n) {
		int number=1;
		for (int i = n; i > 0 ; i--) {
			for(int j=n;j>0;j--) {
				System.out.print(number);
				number+=1;
			}
			System.out.print("\n");
		}	
		System.out.println("");
		
	}
	
	public static void draw8(int n) {
		int number=n*n;
		for (int i = 1; i <=n ; i++) {
			for(int j=1;j<=n;j++) {
				System.out.print(number);
				number-=1;
			}
			System.out.print("\n");
		}	
		System.out.println("");
		
	}


}
