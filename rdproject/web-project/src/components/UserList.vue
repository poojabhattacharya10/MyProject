<template>
    <div>

        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Bootstrap demo</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>

    <div class="container">
        <div class="alert bg-info my-3">
            <h1 class="text-center" style="color:white"> Users List</h1>
        </div>
    </div>

    <!-- <h1>Users List</h1> -->

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="table-danger">ID</th>
                    <th scope="col" class="table-warning">First Name</th>
                    <th scope="col" class="table-warning">Last Name</th>
                    <th scope="col" class="table-success">Email</th>
                    <th scope="col" class="table-warning"> Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user , index) in usersList" :key="index">
                    <th scope="row" class="table-primary"> {{  user._id }} </th>
                    <td class="table-light"> {{  user.firstname }} </td>
                    <td class="table-secondary"> {{  user.lastname }} </td>
                    <td class="table-dark"> {{  user.email }} </td>
                    <td > <button class="btn btn-primary" size="small" @click="openEditPage(user._id)"> Edit </button> </td>
                    <td > <button class="btn btn-danger" size="small" @click="deleteUser(user._id)"> Delete </button> </td>
                </tr>
            </tbody>
        </table>

    <!-- {{ usersList }} -->
    </div>
    <!-- <h1>User List</h1>
    {{ usersList }} -->
</template>


<script>
import axios from 'axios';
import router from '@/router'



export default {
    name : 'UserList',
    data(){
        return{
            usersList : []
        }
    },
    // created() :: this method runs when page load
    created() {
        this.getUsersList()
    },
    methods : {
        async getUsersList(){
            // alert('ok')
            let result = await axios({
                method : 'get',
                url : 'http://localhost:3000/users/list' 
            })
            console.log(result , 'result');
            this.usersList = result.data.data
        },
        openEditPage(id){
            // alert(id)
            router.push({ path : '/useredit' + '/' + id })
        },
        async deleteUser(id){
            let result = await axios({
                method : 'delete',
                url : 'http://localhost:3000/user/delete/' + id
            })
            if(result.data.success){
                this.getUsersList()
            }
        }
    }
}
</script>

<style >
    
</style>