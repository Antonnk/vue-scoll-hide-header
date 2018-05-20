import Vue from 'vue'
import ScrollHeader from './ScrollHeader.vue'

Vue.config.productionTip = false

const app = new Vue({
	el: '#root',
	components: {
		'scroll-header': ScrollHeader
	}
})