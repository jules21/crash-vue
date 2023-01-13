const {createApp} = Vue;
createApp({
    data(){
        return {
            profile:'https://randomuser.me/api/portraits/women/85.jpg',
            firstName: 'John',
            lastName:'Doe',
            email:'uwase@fmail.com',
            gender:''
        }
    },
    methods:{
        async getRandomUser(){
            const res = await fetch('https://randomuser.me/api/');
            const {results} =await res.json();
            this.profile = results[0].picture.large,
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender
        }
    }
}).mount('#app');

