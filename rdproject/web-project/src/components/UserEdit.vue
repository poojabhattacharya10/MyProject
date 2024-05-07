<template>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>


    <div class="container">
        <div class="alert bg-info my-3">
            <h1 class="text-center" style="color:navy">Edit User </h1>
        </div>
    </div>

    <!-- <h1>{{  result }}</h1> -->

    <div class="field my-3">
        <label for="" class="form-label">First Name</label>
        <input type="text" class="form-control" v-model="firstname" placeholder="Enter First Name">
    </div>
    <div class="field my-3">
        <label for="" class="form-label">Last Name</label>
        <input type="text" class="form-control" v-model="lastname" placeholder="Enter Last Name">
    </div>
    <div class="field my-3">
        <label for="" class="form-label">Email</label>
        <input type="text" class="form-control" v-model="email" placeholder="Enter Email Id">
    </div>
    
    <button class="btn btn-primary" @click="updateUser()"> Update User </button>
    


</template>

<script>
    import router from '@/router'
    import { useRoute } from 'vue-router'; // to read path
    import axios from 'axios';

    export default {

        name : 'UserEdit',
        data(){
            return{
                firstname : '',
                lastname : '',
                email : '',
                userId : ''
            }
        },
        created(){
            this.getUserData()
        },
        methods:{
            async getUserData(){
                try {
                    const route = useRoute()
                    let id = route.params.id
                    console.log(id , 'id');
                    this.userId = id
                    let result = await axios({
                        method : 'get',
                        url : 'http://localhost:3000/user/for/edit/' + id
                    })
                    console.log(result , "result...");
                    this.firstname = result.data.data.firstname,
                    this.lastname = result.data.data.lastname,
                    this.email = result.data.data.email
                } catch (error) {
                    console.log(error);
                }
            },
            async updateUser(){
                let data = {
                    firstname : this.firstname ,
                    lastname : this.lastname,
                    email : this.email
                }
                let result = await axios({
                        method : 'put',
                        url : 'http://localhost:3000/edit/user/' + this.userId , 
                        data : data
                    })
                    if(result.data.success){
                        router.push({ 'path' : '/userlist' })
                    }
                    console.log(result , 'result');
            }
        }
    }
</script>