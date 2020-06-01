<template>
	<div class="game">
		<HpBar :playerHp="playerHp" :enemyHp="enemyHp"></HpBar>

		<IngameButtons
			v-on:attack="attack()"
			v-on:heal="heal()"
			v-on:special="specialAttack()"
			v-on:giveUp="giveUp()"
		></IngameButtons>
		<p>{{message}}</p>
	</div>
</template>

<script>
import HpBar from '@/components/HpBar.vue';
import IngameButtons from '@/components/IngameButtons.vue';

export default {
	name: 'Game',
	components: {
		HpBar,
		IngameButtons
	},
	data() {
		return {
			maxPlayerHp: 80,
			maxEnemyHp: 80,
			playerHp: 80,
			enemyHp: 80,
			maxSpecials: 3,
			specialCounter: 0,
			message: ''
		};
	},
	methods: {
		calculateDamage(min, max) {
			return Math.max(Math.round(Math.random() * max) + 1, min);
		},

		attack() {
			if (this.playerHp > 0) {
				let damage = this.calculateDamage(2, 10);
				this.enemyHp = Math.max(this.enemyHp - damage, 0);

				this.enemyAttack();
			}
		},

		enemyAttack() {
			if (this.enemyHp > 0) {
				let damage = this.calculateDamage(5, 10);
				this.playerHp = Math.max(this.playerHp - damage, 0);

				if (this.playerHp <= 0) {
					this.showMessage('You lose!', true);
				}
			} else {
				this.showMessage('YOU WIN!!!👏👏👏👏', true);
			}
		},

		heal() {
			if (this.playerHp > 0) {
				if (this.playerHp <= this.maxPlayerHp / 2) {
					this.playerHp += 20;

					this.enemyAttack();
				} else {
					this.showMessage(`You must have less than 50% of HP for healing!! (${this.maxPlayerHp / 2})`);
				}
			}
		},

		specialAttack() {
			if (this.playerHp > 0) {
				if (this.specialCounter < this.maxSpecials) {
					this.specialCounter += 1;
					let damage = this.calculateDamage(5, 15);
					this.enemyHp = Math.max(this.enemyHp - damage, 0);

					this.enemyAttack();
				} else {
					this.showMessage('You already have used all your special moves');
				}
			}
		},

		giveUp() {
			this.playerHp = this.maxPlayerHp;
			this.enemyHp = this.maxEnemyHp;
			this.specialCounter = 0;
			this.message = '';
		},

		showMessage(message, permanent = false) {
			this.message = message;
			if (!permanent) {
				setTimeout(() => (this.message = ''), 2500);
			}
		}
	}
};
</script>

<style scoped>
p {
	color: yellow;
	font-size: 1.5rem;
}
</style>