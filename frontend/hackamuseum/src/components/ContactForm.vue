<template>
	<div class="contact">
		<form>
			<fieldset>
				<label for="name">NAME</label>
				<input type="text" name="name" id="name" placeholder="Your name" />

				<label for="subject">SUBJECT</label>
				<input type="text" name="subject" id="subject" placeholder="The subject" />

				<label for="message">MESSAGE</label>
				<textarea name="message" id="message" cols="30" rows="10" placeholder="Write your message"></textarea>
			</fieldset>
			<button @click="eventSend()">Send</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'ContactForm',
	methods: {
		eventSend() {
			this.$emit('send');
		}
	}
};
</script>

<style scoped>
fieldset {
	border: 0;
}

form {
	width: 40%;
	margin: 2rem auto;
}

label {
	display: block;
	text-align: left;
}

input,
textarea {
	width: 100%;
	min-height: 2rem;
	font-size: 1rem;
	margin-bottom: 1rem;
}

button {
	height: 3rem;
	width: 10em;
	border-radius: 3rem;
	border: 0;
	cursor: pointer;
}

button:hover {
	background: rgb(141, 132, 132);
}

button:focus {
	outline: none;
	background: rgb(141, 132, 132);
}
</style>