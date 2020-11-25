package com.allianz.helloWorld.oopPair;

public class MovableRectangle implements Movable{
	private MovablePoint topleft;
	private MovablePoint bottomRight;
	
	public MovableRectangle(int x1,int y1,int x2,int y2,int xSpeed, int ySpeed) {
		topleft = new MovablePoint(x1, y1, xSpeed, ySpeed);
		bottomRight = new MovablePoint(x2, y2, xSpeed, ySpeed);
	}

	@Override
	public String toString() {
		return "MovableRectangle [topleft=" + topleft + ", bottomRight=" + bottomRight + "]";
	}


	public void moveUp() {
		// TODO Auto-generated method stub
		
	}


	public void moveDown() {
		// TODO Auto-generated method stub
		
	}


	public void moveLeft() {
		// TODO Auto-generated method stub
		
	}


	public void moveRight() {
		// TODO Auto-generated method stub
		
	}
	
	
	
}
