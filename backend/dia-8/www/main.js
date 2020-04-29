const newMessageForm = document.querySelector("#newmessage");
const message = newMessageForm.querySelector("#message");
const email = newMessageForm.querySelector("#email");

const messageList = document.querySelector("#messagelist");

function writeMessageList(messages) {
	messageList.innerHTML = "";

	const fragment = document.createDocumentFragment();

	for (const message of messages) {
		const li = document.createElement("li");
		li.textContent = `${message.email} - ${message.message}`;

		fragment.append(li);
	}

	messageList.append(fragment);
}

console.log(newMessageForm);
async function formSumbitHandler(event) {
	event.preventDefault();

	const newMessage = {
		message: message.value,
		email: email.value,
	};

	const request = await fetch("/data", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(newMessage),
	});

	const list = await request.json();

	writeMessageList(list.messages);
}

newMessageForm.addEventListener("submit", formSumbitHandler);

async function main() {
	const request = await fetch("/data");
	const list = await request.json();

	writeMessageList(list.messages);
}
main();
