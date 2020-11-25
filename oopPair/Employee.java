package com.allianz.helloWorld.oopPair;

public class Employee {
	private int id;
	private String firstName;
	private String lastName;
	private int salary;
	
	public Employee(int id,String firstname,String lastname,int salary){
		this.id=id;
		this.firstName=firstname;
		this.lastName=lastname;
		this.salary=salary;
	}
	
	public int getID() {
		return id;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public String getName() {
		return firstName+" "+lastName;
	}
	
	public int getSalary() {
		return salary;
	}
	
	public void setSalary(int salary) {
		this.salary=salary;
	}
	
	public int getAnnualSalary() {
		return salary*12;
	}
	
	public int raiseSalary(int percent) {
		return salary*((percent+100)/100);
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Employee[id="+id+",name ="+firstName+" "+lastName+",salary ="+salary+"]";
	}
	
	
	
}
