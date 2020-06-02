<template>
	<div class="buttons">
		<button class="attack" @click="attackEvent">ATTACK</button>
		<button class="special" @click="specialEvent">SPECIAL MOVE</button>
		<button class="heal" @click="healEvent">HEAL</button>
		<button class="giveUp" @click="giveupEvent">GIVE UP</button>
	</div>
</template>

<script>
export default {
	name: 'IngameButtons',
	methods: {
		attackEvent() {
			this.$emit('attack');
		},
		specialEvent() {
			this.$emit('special');
		},
		healEvent() {
			this.$emit('heal');
		},
		giveupEvent() {
			this.$emit('giveUp');
		}
	}
};
</script>

<style scoped>
.buttons {
	width: 50%;
	padding: 1rem;
	margin: 5rem auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.buttons button {
	border: none;
	background: rgb(68, 231, 68);
	padding: 1rem;
	border-radius: 1rem;
	margin: 0.667rem;
}

.buttons button.attack {
	background: rgb(248, 65, 65);
}

.buttons button.special {
	background: lightblue;
}

.buttons button.heal {
	background: steelblue;
}

.buttons button.giveUp {
	background: rgb(81, 168, 81);
}
</style>
