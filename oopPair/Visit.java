package com.allianz.helloWorld.oopPair;

import java.util.Date;

public class Visit {
	private Customer customer;
	private Date date;
	private double serviceExpense;
	private double productExpense;
	
	public Visit(String name,Date date) {
		customer = new Customer(name);
		this.date=date;
		
	}
	public Customer getCustomer() {
		return customer;
	}
	
	public String getName() {
		return customer.getName();
	}
	
	public double getServiceExpense()
	{
		return serviceExpense;
	}
	
	public void setServiceExpense(double ex) {
		this.serviceExpense=ex;
	}
	
	public double getProductExpense()
	{
		return productExpense;
	}
	
	public void setProductExpense(double ex) {
		this.productExpense=ex;
	}
	
	public double getTotalExpense()
	{	
		if(customer.isMember()) {
			DiscountRate discountRate = new DiscountRate();
			return serviceExpense * (1 - discountRate.getServiceDiscountRate(customer.getMemberType())) + 
				productExpense * (1 - discountRate.getProductDiscountRate(customer.getMemberType()));
		}
		return serviceExpense + productExpense;
	}

	@Override
	public String toString() {
		return "Visit [customer=" + customer + ", date=" + date + ", serviceExpense=" + serviceExpense
				+ ", productExpense=" + productExpense + "]";
	}
	
	
	
}
