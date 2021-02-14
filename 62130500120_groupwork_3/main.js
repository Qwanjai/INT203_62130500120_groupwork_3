const app = {
	data() {
		return {
			gallerys: [
				{
					title: "The Virgin Suicides (1999)",
					src: "imgs/VirginSuicides.jpg",
					favorite: false,
				},
				{
					title: "Lost in Translation (2003)",
					src: "imgs/Lost_in_Translation_poster.jpg",
					favorite: false,
				},
				{
					title: "The Beguiled (2017)",
					src: "imgs/The_Beguiled.png",
					favorite: false,
				},
				{
					title: "Marie-Antoinette (2006)",
					src: "imgs/marie.png",
					favorite: false,
				},
			],
		};
	},
	methods: {
		toggleFav(index) {
			this.gallerys[index].favorite = !this.gallerys[index].favorite;
		},
	},
	computed: {
		countFav() {
			return this.gallerys.filter((c) => c.favorite).length;
		},
	},
};
Vue.createApp(app).mount("#app");
