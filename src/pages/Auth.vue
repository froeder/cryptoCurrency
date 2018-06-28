<template>
    <div class="container">
        <md-card>
            <md-card-header style="background-color:grey">
                <h3><strong>Login</strong> </h3>
            </md-card-header>

            <md-card-content>
            <slot name="content">
                <md-field>
                    <label>User Name</label>
                    <md-input v-model="email" type="text"></md-input>
                </md-field>
                <md-field>
                    <label>Password</label>
                    <md-input v-model="password" type="text"></md-input>
                </md-field>
            </slot>
            </md-card-content>

            <md-card-actions md-alignment="left">
                <slot name="footer">
                    <md-button @click="login()" class="md-success">Login</md-button>
                    <md-button to="/register" class="md-success">Register</md-button>
                </slot>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        login () {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user)=>{
                alert('Logado')
                console.log(user)
            }, (err) => {
                alert('Ops' +err.message)
            });

        }
    }
}
</script>

