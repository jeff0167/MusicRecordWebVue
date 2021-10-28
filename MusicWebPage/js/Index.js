const baseUrl = "https://musicrecord24124124321.azurewebsites.net/musicrecord"

Vue.createApp({
    data() {
        return {
            Music: [],
            MusicId: [],
            addData: { id: 999, title: "", artist: "", releaseYear: 0, duration: 0 },
            error: null,
            Item: "Hi",
        }
    },
    async created() { // life cycle method. Called when browser reloads page
      //  this.getAllMusic()
    },
    methods: {
        async getAllMusic() {
            try {
                const response = await axios.get(baseUrl)
                this.Music = await response.data
                console.log(this.Music)
            } catch (ex) {
                alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
            }
        },
        Button(){
            this.Item = "Hello";
        }
    },
})
.mount("#app")