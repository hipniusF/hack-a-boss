'use strict';

class Shape {
	sides;
	area;

	constructor(sides, area, heigth) {
		this.sides = sides;
		this.area = area;
	}

	recalculateArea(area) {
		this.area = area;
	}
}

class Rectangle extends Shape {
	heigth;
	width;

	constructor(heigth, width) {
		super(4, heigth * width);
		this.width = width;
		this.heigth = heigth;
	}

	setWidth(width) {
		this.width = width;
		super.recalculateArea(this.width * this.width);
	}

	setHeigth(heigth) {
		this.heigth = heigth;
		super.recalculateArea(this.width * this.heigth);
	}
}

class Triangle extends Shape {
	constructor(base, heigth) {
		super(3, (base * heigth) / 2);
		this.heigth = heigth;
		this.base = base;
	}

	setHeigth(heigth) {
		this.heigth = heigth;
		super.recalculateArea((this.base * this.heigth) / 2);
	}

	setBase(base) {
		this.base = base;
		super.recalculateArea((this.base * this.width) / 2);
	}
}

const aRectangle = new Rectangle(4, 5);
const aTriangle = new Triangle(4, 10);

console.log(aRectangle, aTriangle);
