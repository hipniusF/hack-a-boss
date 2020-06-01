<template>
	<div class="hpbars">
		<div>
			<p>Player (you)</p>
			<div class="bar" :style="{width: playerHp + '%'}">{{playerHp}}</div>
		</div>

		<div>
			<p>Enemy</p>
			<div class="bar" :style="{width: enemyHp + '%'}">{{enemyHp}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HpBar',
	props: {
		playerHp: Number,
		enemyHp: Number
	}
};
</script>

<style scoped>
p {
	color: white;
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