const { eachDayOfInterval } = require("date-fns");

const range = eachDayOfInterval({
	start: new Date(2014, 0, 10),
	end: new Date(2014, 2, 11),
});

for (const date of range) {
	console.log(date);
}
