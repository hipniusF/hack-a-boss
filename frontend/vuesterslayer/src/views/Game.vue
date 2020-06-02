<template>
	<div class="game">
		<HpBar :playerHp="playerHp" :enemyHp="enemyHp" :message="message"></HpBar>

		<div class="options">
			<IngameButtons
				v-on:attack="attack()"
				v-on:heal="heal()"
				v-on:special="specialAttack()"
				v-on:giveUp="giveUp()"
			></IngameButtons>
			<Logs :logs="logs" v-show="logs.length"></Logs>
		</div>
	</div>
</template>

<script>
import HpBar from '@/components/HpBar.vue';
import IngameButtons from '@/components/IngameButtons.vue';
import Logs from '@/components/Logs.vue';
import Swal from 'sweetalert2';

export default {
	name: 'Game',
	components: {
		HpBar,
		IngameButtons,
		Logs
	},
	data() {
		return {
			maxPlayerHp: 80,
			maxEnemyHp: 80,
			playerHp: 80,
			enemyHp: 80,
			maxSpecials: 3,
			specialCounter: 0,
			message: '',
			logs: []
		};
	},
	methods: {
		calculateDamage(min, max) {
			return Math.max(Math.round(Math.random() * max) + 1, min);
		},

		attack() {
			let damage = this.calculateDamage(2, 10);
			this.enemyHp = Math.max(this.enemyHp - damage, 0);

			this.logs.unshift({ text: `PLayer inflicts ${damage} damage points into the enemy` });
			this.enemyAttack();
		},

		enemyAttack() {
			if (this.checkHp()) {
				let damage = this.calculateDamage(5, 10);
				this.playerHp = Math.max(this.playerHp - damage, 0);

				this.logs.unshift({ text: `Enemy inflicts ${damage} damage points into the player` });
			}
			this.checkHp();
		},

		heal() {
			if (this.playerHp <= this.maxPlayerHp / 2) {
				this.playerHp += 20;

				this.enemyAttack();
			} else {
				this.showMessage(`You must have less than 50% of HP for healing!! (${this.maxPlayerHp / 2})`);
			}
		},

		specialAttack() {
			if (this.specialCounter < this.maxSpecials) {
				this.specialCounter += 1;

				let damage = this.calculateDamage(5, 15);
				this.enemyHp = Math.max(this.enemyHp - damage, 0);

				this.logs.unshift({ text: `PLayer inflicts ${damage} damage points into the enemy` });
				this.enemyAttack();
			} else {
				this.showMessage('You already have used all your special moves');
			}
		},

		giveUp() {
			this.reset();

			Swal.fire({
				title: 'You gave up :(',
				text: '',
				confirmButtonText: 'Try again'
			});
		},

		showMessage(message, permanent = false) {
			this.message = message;
			if (!permanent) {
				setTimeout(() => (this.message = ''), 2500);
			}
		},

		reset() {
			this.playerHp = this.maxPlayerHp;
			this.enemyHp = this.maxEnemyHp;
			this.specialCounter = 0;
			this.message = '';
			this.logs = [];
		},

		async checkHp() {
			if (this.enemyHp <= 0) {
				await Swal.fire({
					title: 'YOU WON!!!! :D',
					text: 'Congratulations!!!',
					confirmButtonText: 'Play again'
				});

				this.reset();

				return false;
			} else if (this.playerHp <= 0) {
				await Swal.fire({
					title: 'You have lost :((',
					text: 'Lucky next time',
					confirmButtonText: 'Play again'
				});

				this.reset();

				return false;
			}
			return true;
		},

		goHome() {
			this.$router.push('/');
		}
	}
};
</script>

<style scoped>
.game {
	margin: 5rem 0 0 0;
}

p {
	/* width: 80%;
	margin: 0 auto;
	text-align: left; */

	color: #f8f32b;
	font-size: 1.1rem;
}

.options {
	display: flex;
	flex-wrap: wrap;
	width: 70%;
	margin: 0 auto;
}

@media (max-width: 600px) {
	.game {
		margin: 0;
	}

	.options {
		display: block;
	}
}
</style>
