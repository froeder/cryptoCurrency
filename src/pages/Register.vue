<template>
    <div class="container">
        <md-card>
            <md-card-header style="background-color:grey">
                <h3><strong>Register</strong> </h3>
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
                    <md-button to="/auth" class="md-success">Back</md-button>
                    <md-button @click="register()" class="md-success">Register</md-button>
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
        register () {
            // console.log(this.username)
            // var cred = firebase.auth.EmailAuthProvider.credential(
            //     this.email,
            //     this.password
            // );

            firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
            this.email, this.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log('Not Error')
                console.log(error)
            });

        }
    }
}
</script>

