package com.allianz.helloWorld.oopPair;

public class Main {


	public static void main(String[] args) {
		System.out.println("********************HW5-6****************************");
		Circle circle = new Circle();
		Circle circle2 = new Circle(2.0);

		System.out.println(circle);
		System.out.println("Circle area = " + circle.getArea());
		System.out.println("Circle circumference = " + circle.getCircumference());
		System.out.println(circle2);
		System.out.println("Circle area = " + circle2.getArea());
		System.out.println("Circle circumference = " + circle2.getCircumference());

		System.out.println("*********************HW7****************************");
		Rectangle rectangle = new Rectangle();
		Rectangle rectangle2 = new Rectangle(10, 12);
		System.out.println(rectangle);
		System.out.println("Rectangle area = " + rectangle.getArea());
		System.out.println("Rectangle perimeter = " + rectangle.getPerimeter());
		System.out.println(rectangle2);
		System.out.println("Rectangle area = " + rectangle2.getArea());
		System.out.println("Rectangle perimeter = " + rectangle2.getPerimeter());

		System.out.println("********************HW8****************************");
		Employee employee = new Employee(1, "John", "Doe", 10000);
		System.out.println(employee);
		System.out.println("Annual salary = " + employee.getAnnualSalary());
		System.out.println("Salary after raise = " + employee.raiseSalary(50));

		System.out.println("*****************Page51****************************");
		// OOP2 homework1
		MovableCircle moveableCircle = new MovableCircle(1, 1, 5, 5, 8);
		System.out.println(moveableCircle);
		moveableCircle.moveDown();
		System.out.println(moveableCircle);

		System.out.println("*****************Page52****************************");
		// OOP2 homework2
		MovableRectangle movableRectangle = new MovableRectangle(1, 1, 2, 2, 6, 6);
		System.out.println(movableRectangle);
		movableRectangle.moveRight();
		System.out.println(movableRectangle);

		System.out.println("*****************Page53****************************");
		// OOP2 homework3
		DiscountRate discountRate = new DiscountRate();
		System.out.println("Premium service discount: " + discountRate.getServiceDiscountRate("Premium"));
		System.out.println("Gold service discount: " + discountRate.getServiceDiscountRate("Gold"));
		System.out.println("Silver service discount: " + discountRate.getServiceDiscountRate("Silver"));

		Visit visitPremium = new Visit("Som", null);
		visitPremium.getCustomer().setMember(true);
		visitPremium.getCustomer().setMemberType("Premium");
		visitPremium.setServiceExpense(150);
		visitPremium.setProductExpense(100);
		System.out.println(visitPremium);
		System.out.println("Total expense = " + visitPremium.getTotalExpense());

		Visit visitGold = new Visit("John", null);
		visitGold.getCustomer().setMember(true);
		visitGold.getCustomer().setMemberType("Gold");
		visitGold.setServiceExpense(150);
		visitGold.setProductExpense(100);
		System.out.println(visitGold);
		System.out.println("Total expense = " + visitGold.getTotalExpense());

		Visit visitSilver = new Visit("Jane", null);
		visitSilver.getCustomer().setMember(true);
		visitSilver.getCustomer().setMemberType("Silver");
		visitSilver.setServiceExpense(150);
		visitSilver.setProductExpense(100);
		System.out.println(visitSilver);
		System.out.println("Total expense = " + visitSilver.getTotalExpense());

		Visit visiter = new Visit("Doe", null);
		visiter.setServiceExpense(150);
		visiter.setProductExpense(100);
		System.out.println(visiter);
		System.out.println("Total expense = " + visiter.getTotalExpense());

	}
}