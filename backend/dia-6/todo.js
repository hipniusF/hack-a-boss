const minimist = require("minimist");
const path = require("path");
const argv = minimist(process.argv.slice(2));
require("dotenv").config();

const language = process.env.LANGUAGE;

const {
	getTasksObject,
	listTasks,
	addTask,
	doneTask,
	undoneTask,
	removeTask,
	writeTaskObjectToFile,
} = require("./utils.js");

const jsonPath = path.join(process.env.HOME, ".todo.json");

const taskObject = getTasksObject(jsonPath);

if (argv._.length > 0) {
	const content = argv._.join(" ");

	addTask(taskObject, content, argv.priority);
}

if (argv.l || argv.list) {
	listTasks(taskObject);
}

if (argv.done || argv.done === 0) {
	doneTask(taskObject, argv.done);
}

if (argv.undone || argv.undone === 0) {
	undoneTask(taskObject, argv.undone);
}

if (argv.remove || argv.remove === 0) {
	removeTask(taskObject, argv.remove);
}

if (argv.h || argv.help) {
	if (process.env.LANGUAGE === "es") {
		console.log("Los siguientes comandos están disponibles:\n");
		console.log(" · -l o --list: para listar las tareas existentes");
		console.log(' · --done=index: para marcar la nota "index" como hecha');
		console.log(' · --undone=index: para desmarcar la nota "index" como hecha');
		console.log(' · --remove=index: para eliminar la nota "index"');
		console.log(" · -h o --help: para mostrar estos mensajes de ayuda\n");
	} else if (process.env.LANGUAGE === "gl") {
		console.log("Os seguintes comandos están disponibles:\n");
		console.log(" · -l ou --list: para listar as tareas existentes");
		console.log(' · --done=index: para marcar a nota "index" como feita');
		console.log(' · --undone=index: para desmarcar a nota "index" como feita');
		console.log(' · --remove=index: para eliminar a nota "index"');
		console.log(" · -h o --help: para mostrar estos mensaxes de axuda\n");
	} else if (process.env.LANGUAGE === "en") {
		console.log("The next command are available:\n");
		console.log(" · -l or --list: to list all task");
		console.log(' · --done=index: to mark "index" task as done');
		console.log(' · --undone=index: to unmark "index" task as done');
		console.log(' · --remove=index: to remove "index" task');
		console.log(" · -h or --help: to show this help messages\n");
	} else {
		console.log("Not known language in .env file");
	}
}
writeTaskObjectToFile(taskObject, jsonPath);
