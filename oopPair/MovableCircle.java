package com.allianz.helloWorld.oopPair;
public class MovableCircle implements Movable{

	private int radius;
	private MovablePoint center;
	
	public MovableCircle(int x, int y, int xSpeed, int ySpeed,int radius) {
		this.center=new MovablePoint(x, y, xSpeed, ySpeed);
		this.radius=radius;
	}
	
	
	public void moveUp() {
		center.moveUp();
		// TODO Auto-generated method stub
		
	}

	public void moveDown() {
		center.moveDown();
		// TODO Auto-generated method stub
		
	}

	public void moveLeft() {
		center.moveLeft();
		// TODO Auto-generated method stub
		
	}

	public void moveRight() {
		center.moveRight();
		// TODO Auto-generated method stub
		
	}

	@Override
	public String toString() {
		return "MovableCircle [radius=" + radius + ", center=" + center + "]";
	}

	

	
}
