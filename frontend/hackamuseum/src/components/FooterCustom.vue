<template>
	<div>
		<p>{{copyright}}</p>
	</div>
</template>

<script>
export default {
	name: 'FooterCustom',
	data() {
		return {
			copyright: 'Marco Pérez González, 2020'
		};
	}
};
</script>

<style scoped>
p {
	font-size: 0.8rem;
}
</style>