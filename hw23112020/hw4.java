package com.allianz.helloWorld;
import java.util.Scanner;

public class hw4 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Please enter number : ");
		int numberInput=scanner.nextInt();
		scanner.close();
		multiTable(numberInput);
		
	}
	
	public static void multiTable(int number) {
		System.out.println("Multiplication Table of "+number);
		for(int i=1;i<=12;i++) {
			System.out.println(number+" * "+i+" = "+(number*i));
		}
		System.out.println();
		
	}
	

}
