<template>
	<div class="hpbars">
		<div>
			<p>Player (you)</p>
			<div class="bar" :style="{ width: playerHp + '%' }">{{ playerHp }}</div>
			<p>{{ message }}</p>
		</div>

		<div>
			<p>Lich</p>
			<div class="bar" :style="{ width: enemyHp + '%' }">{{ enemyHp }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HpBar',
	props: {
		playerHp: Number,
		enemyHp: Number,
		message: String
	}
};
</script>

<style scoped>
p {
	color: white;
}

p:nth-child(3) {
	margin-top: 0.5rem;
	color: #f8f32b;
}
.hpbars {
	width: 80%;
	text-align: center;
	margin: 0 auto 3rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
}

.bar {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 0;
	height: 40px;
	background: rgb(255, 77, 77);
	border-radius: 20px;
}
</style>
