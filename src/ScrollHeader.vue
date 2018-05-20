<script>
	export default {
		props: {
			transition: {
				type: String,
				default: 'transform .5s,-webkit-transform .5s'
			}
		},
		data() {
			return {
				scrolling: false,
				previousTop: 0,
				currentTop: 0,
				scrollTriggerLength: 10,
				scrollOffset: 150,
				hidden: false,
			}
		},
		mounted() {
			this.$el.style.transition = this.transition

			window.addEventListener('scroll', () => {
		    	if( !this.scrolling ) {
					this.scrolling = true;
					(!window.requestAnimationFrame)
						? setTimeout(this.triggerToggle, 250)
						: requestAnimationFrame(this.triggerToggle);
				}
			});
		},
		methods: {
			triggerToggle() {
				this.currentTop = window.scrollY
				this.toggleHeader();
				this.previousTop = this.currentTop;
				this.scrolling = false;
			},
			toggleHeader() {
			    if (this.previousTop - this.currentTop > this.scrollTriggerLength) {
			    	//if scrolling up...
			    	this.show()
			    } else if( this.currentTop - this.previousTop > this.scrollTriggerLength && this.currentTop > this.scrollOffset) {
			    	//if scrolling down...
			    	this.hide()
			    }
			},
			hide() {
				this.$el.style.transform = 'translateY(-100%)'
			},
			show() {
				this.$el.style.transform = 'translateY(0px)'
			}
		},
		render() {
			return this.$slots.default[0]
		}
	}
</script>