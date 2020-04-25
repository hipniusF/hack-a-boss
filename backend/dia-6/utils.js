const chalk = require("chalk");
const fs = require("fs-extra");
const { format } = require("date-fns");
const { es, gl, en } = require("date-fns/locale");

function getTasksObject(path) {
	// This function tries to get the json with task from the path
	// given as parameter and returns it. If the json doesn't exist
	// if return a new empty task object

	try {
		return require(path);
	} catch (error) {
		if (error.code === "MODULE_NOT_FOUND") {
			return {
				tasks: [
					{
						content: "lorem ipsum dolor aid",
						priority: true,
						done: true,
						date: new Date().getTime(),
					},
				],
			};
		} else console.log(error);
	}
}

async function listTasks(todoObject, language) {
	for (let i = 0; i < todoObject.tasks.length; i++) {
		const task = todoObject.tasks[i];

		const color = task.done ? "green" : "blue";

		if (process.env.LANGUAGE === "es") {
			global.noteLabel = "NOTA";
			global.doneLabel = "HECHO";
			global.priorityLabel = "PRIORITARIO";

			const date = format(task.date, "d 'de' MMMM 'del' yyyy 'a las' H:mm", {
				locale: es,
			});

			global.dateLabel = "Fecha: " + date;
		} else if (process.env.LANGUAGE === "gl") {
			global.noteLabel = "NOTA";
			global.doneLabel = "FEITO";
			global.priorityLabel = "PRIORITARIO";

			const date = format(task.date, "d 'de' MMMM 'do' yyyy 'as' H:mm", {
				locale: gl,
			});

			global.dateLabel = "Data: " + date;
		} else if (process.env.LANGUAGE === "en") {
			global.noteLabel = "NOTE";
			global.doneLabel = "DONE";
			global.priorityLabel = "PRIORITY";

			const date = format(task.date, "d 'of' MMMM 'of' yyyy 'at' H:mm", {
				locale: en,
			});

			global.dateLabel = "Date: " + date;
		}

		console.log(noteLabel, i);

		console.log(chalk[color]("·", task.content));

		console.log(chalk[color](dateLabel));

		if (task.priority) {
			console.log(chalk.red(priorityLabel));
		}

		if (task.done) {
			console.log(chalk.green(doneLabel));
		}
		console.log("\n");
	}
}

async function addTask(todoObject, content, priority) {
	const task = {
		content: content,
		priority: priority ? true : false,
		done: false,
		date: new Date().getTime(),
	};

	todoObject.tasks.push(task);
}

function doneTask(taskObject, index) {
	taskObject.tasks[index].done = true;
}

function undoneTask(taskObject, index) {
	taskObject.tasks[index].done = false;
}

function removeTask(taskObject, index) {
	taskObject.tasks.splice(index, 1);
}

async function writeTaskObjectToFile(taskObject, path) {
	taskObject.lastUpdate = new Date().getTime();

	try {
		await fs.outputJson(path, taskObject);
	} catch (error) {
		console.error(error);
	}
}

module.exports = {
	getTasksObject,
	listTasks,
	addTask,
	doneTask,
	undoneTask,
	removeTask,
	writeTaskObjectToFile,
};
