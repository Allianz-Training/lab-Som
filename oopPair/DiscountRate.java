package com.allianz.helloWorld.oopPair;

public class DiscountRate {
	
	private double serviceDiscountPremium = 0.2;
	private double serviceDiscountGold = 0.15;
	private double serviceDiscountSilver = 0.1;
	private double productDiscountPremium = 0.1;
	private double productDiscountGold = 0.1;
	private double productDiscountSilver = 0.1;
	
	public double getServiceDiscountRate(String memberType) {
		switch (memberType) {
		case "Premium": {	
			return serviceDiscountPremium;
		}
		case "Gold": {	
			return serviceDiscountGold;
		}
		case "Silver": {	
			return serviceDiscountSilver;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + memberType);
		}
	}
	
	public double getProductDiscountRate(String memberType) {
		switch (memberType) {
		case "Premium": {	
			return productDiscountPremium;
		}
		case "Gold": {	
			return productDiscountGold;
		}
		case "Silver": {	
			return productDiscountSilver;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + memberType);
		}
	}

}
