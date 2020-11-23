package com.allianz.helloWorld;

public class hw3 {
	public static void main(String[] args) {
		draw9(3);
		draw10(3);
		draw11(3);
		draw12(3);
		draw13(3);
		draw14(3);
		draw15(4);
		draw16(4);
		draw17(4);

	}

	public static void draw9(int n) {
		for (int i = 0; i < n; i++) {
			System.out.println(i * 2);
		}
		System.out.println();
	}

	public static void draw10(int n) {
		for (int i = 1; i <= n; i++) {
			System.out.println(i * 2);
		}
		System.out.println();
	}

	public static void draw11(int n) {
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				System.out.print(j * i);
			}
			System.out.println();
		}
		System.out.println();
	}

	public static void draw12(int n) {
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				if (j == i) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println();

		}System.out.println();

	}

	public static void draw13(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i == n - j - 1) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println();

		}System.out.println();

	}

	public static void draw14(int n) {
		for (int i=0;i<n;i++) {
			for(int j=0;j<n;j++) {
				if(i>=j) {
					System.out.print("*");
				}
				else {
					System.out.print("-");
				}
			}
			System.out.println();
		}
		System.out.println();
	}
	
	public static void draw15(int n) {
		for (int i=0;i<n;i++) {
			for(int j=0;j<n;j++) {
				if(i+j>=n) {
					System.out.print("-");
				}
				else {
					System.out.print("*");
				}
			}
			System.out.println();
		}
		System.out.println();
	}
	
	public static void draw16(int n) {
		int row=n+(n-1);
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < n; j++) {
				if(i<n) {
					if (i>=j) {
						System.out.print("*");
					}
					else {
						System.out.print("-");
					}
				}
				else {
					if(i+j>row-1) {
						System.out.print("-");
					}
					else {
						System.out.print("*");
					}
					
				}
			}
			System.out.println();
			
		}System.out.println();
	}

	public static void draw17(int n) {
		int row=n+(n-1);
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < n; j++) {
				if(i<n) {
					if (i>=j) {
						System.out.print(i+1);
					}
					else {
						System.out.print("-");
					}
				}
				else {
					if(i+j>row-1) {
						System.out.print("-");
					}
					else {
						System.out.print(row-i);
					}
					
				}
			}
			System.out.println();
			
		}System.out.println();
	}
}
