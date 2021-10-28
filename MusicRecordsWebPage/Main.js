const baseUrl = "https://localhost:44309/MusicRecord"

const app = Vue.createApp({
    data() {
        return {
            music: [],
            singleMusicRecord: {Id: -1, Title: "", Artist: "", Duration: 0, ReleaseYear: 0},
            message: "hi",
            currentId: -1,
        }
    },
    async created(){
        this.GetAll();
    },
    methods: {
        async GetAll() { 
           this.Get();
        },
        async GetById(){
            this.message = "yo";
            this.Get(currentId);
        },
        async Get(){
            if(this.currentId == -1){
                try {
                    const response = await axios.get(baseUrl + "/")
                    this.music = await response.data
                } catch (ex) {
                    alert(ex.message) 
                }
            }
            else{
                try {
                    const response = await axios.get(baseUrl + "/" + this.currentId)
                    this.singleMusicRecord = await response.data
                } catch (ex) {
                    alert(ex.message) 
                }
            }
            currentId = -1; // I don't even know what I'm doing to this, but only works when this line is here!
        }
    }
})