const {createApp} = Vue;
createApp({
    data(){
        return{
            mailList : [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                ''
            ],

            mail: ''

        }

    },
    methods: {
        getNewRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{
                const result = response.data;
                console.log(result);
                this.mail=result.response
            })
        }

    },
    created() {
        this.getNewRandomEmail()

    }
}).mount('#app')