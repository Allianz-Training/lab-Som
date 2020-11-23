package com.allianz.helloWorld;

public class hw5 {
	public static void main(String[] args) {
		draw18(4);
		draw19(4);
		draw20(4);
		draw21(4);
		draw22(4);
		draw23(4);
		draw24(4);
		draw25(4);
	}

	public static void draw18(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i + j <= n - 2) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println();
		}
		System.out.println();

	}

	public static void draw19(int n) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (i > j) {
					System.out.print("-");
				} else {
					System.out.print("*");
				}
			}
			System.out.println();

		}
	}

	public static void draw20(int n) {
		int row = n + (n - 1);
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < n; j++) {
				if (i < n) {
					if (i + j < n - 1) {
						System.out.print("-");
					} else {
						System.out.print("*");
					}
				} else {
					if (i - j >= n) {
						System.out.print("-");
					} else {
						System.out.print("*");
					}
				}
			}
			System.out.println();

		}
		System.out.println();
	}

	public static void draw21(int n) {
		int row = n + (n - 1);
		int number = 1;
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < n; j++) {
				if (i < n) {
					if (i + j < n - 1) {
						System.out.print("-");
					} else {
						System.out.print(number);
						number++;
					}
				} else {
					if (i - j >= n) {
						System.out.print("-");
					} else {
						System.out.print(number);
						number++;
					}
				}
			}
			System.out.println();

		}
		System.out.println();

	}

	public static void draw22(int n) {
		int col = n + (n - 1);
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < col; j++) {
				if (j < n) {
					if (i + j <= n - 2) {
						System.out.print("-");
					} else {
						System.out.print("*");
					}
				} else {
					if (j - i >= n) {
						System.out.print("-");
					} else {
						System.out.print("*");
					}
				}

			}
			System.out.println();
		}
		System.out.println();
	}

	public static void draw23(int n) {
		int col = n + (n - 1);
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < col; j++) {
				if (j < n) {
					if (i - j > 0) {
						System.out.print("-");
					} else {
						System.out.print("*");
					}
				} else {
					if (i + j > col - 1) {
						System.out.print("-");
					} else {
						System.out.print("*");
					}
				}

			}
			System.out.println();
		}
		System.out.println();
	}

	public static void draw24(int n) {
		int row = n + (n - 1);
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < row; j++) {
				if (i < n) {
					if (j < n) {
						if (i + j < n - 1) {
							System.out.print("-");
						} else {
							System.out.print("*");
						}
					} else {
						if (j - i >= n) {
							System.out.print("-");
						} else {
							System.out.print("*");
						}
					}
				} else {
					if (j < n) {
						if (i - j >= n) {
							System.out.print("-");
						} else {
							System.out.print("*");
						}
					} else {
						if (i + j >= n + row - 1) {
							System.out.print("-");
						} else {
							System.out.print("*");
						}
					}

				}

			}
			System.out.println();
		}
		System.out.println();
	}
	
	public static void draw25(int n) {
		int number=1;
		int row = n + (n - 1);
		for (int i = 0; i < row; i++) {
			for (int j = 0; j < row; j++) {
				if (i < n) {
					if (j < n) {
						if (i + j < n - 1) {
							System.out.print("-");
						} else {
							System.out.print(number);
							number++;
						}
					} else {
						if (j - i >= n) {
							System.out.print("-");
						} else {
							System.out.print(number);
							number++;
						}
					}
				} else {
					if (j < n) {
						if (i - j >= n) {
							System.out.print("-");
						} else {
							System.out.print(number);
							number++;
						}
					} else {
						if (i + j >= n + row - 1) {
							System.out.print("-");
						} else {
							System.out.print(number);
							number++;
						}
					}

				}

			}
			System.out.println();
		}
		System.out.println();
	}
}
