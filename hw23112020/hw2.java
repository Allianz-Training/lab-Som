package com.allianz.helloWorld;

public class hw2 {
	public static void main(String[] args) {
		String[][] tableStrings= {
				{"1","2","3"},
				{"4","5","6"},
				{"7","8","9"}
		};
		mutiplyTable(tableStrings);
		
	}
	public static void mutiplyTable(String[][] inputString) {
		
		for(int i=0;i<inputString.length;i++) {
			for(int j=0;j<inputString[i].length;j++) {
				System.out.print(2*Integer.parseInt(inputString[i][j]));
				if(j<inputString[i].length-1)
					System.out.print(", ");
			}
			System.out.println();
		}
	}

}
