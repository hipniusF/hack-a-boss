'use strict';

const todoList = document.querySelector('main section.list ul.todolist');
class Todo {
	constructor(todoList) {
		this.todoList = todoList;
		this.liArray = this.todoList.getElementsByTagName('li');
	}

	addTaskToList(task) {
		const newInput = document.createElement('input');
		newInput.setAttribute('type', 'checkbox');

		const newP = document.createElement('p');
		newP.textContent = task;

		const newLi = document.createElement('li');
		newLi.append(newInput);
		newLi.append(newP);
		this.todoList.append(newLi);
	}

	removeComplete() {
		console.log(this);
		for (const task of this.liArray) {
			if (task.classList.contains('done')) {
				task.remove();
			}
		}
	}

	removeEverything() {
		this.todoList.innerHTML = '';
	}

	handlerClick(event) {
		if (event !== undefined) {
			event.preventDefault();
		}

		const text = todoText.value.trim();
		if (text) {
			this.addTaskToList(text);
		}
		todoText.value = '';
	}
}

const todo = new Todo(todoList);

todo.addTaskToList('hola');

const addButton = document.querySelector('main section.app form button');
const todoText = document.querySelector('main section.app form.add input');

const clearButton = document.querySelector('button.clear');
const destroyButton = document.querySelector('button.destroy');

addButton.addEventListener('click', todo.handlerClick);
clearButton.addEventListener('click', todo.removeComplete);
