<template>
    <div class="auth-container">
      <BreathingBackground />
      <div class="cont" :class="{ 's--signup': isSignUp }">
        <div class="form sign-in">
          <h2>Welcome</h2>
          <label>
            <span>Email</span>
            <input type="email" v-model="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" v-model="password" />
          </label>
          <p class="forgot-pass">Forgot password?</p>
          <button type="button" class="submit" @click="signIn">Sign In</button>
        </div>
        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div class="img__text m--in">
              <h3>If you already have an account, just sign in.</h3>
            </div>
            <div class="img__btn" @click="toggleSignUp">
              <span class="m--up">Sign Up</span>
              <span class="m--in">Sign In</span>
            </div>
          </div>
          <div class="form sign-up">
            <h2>Create your Account</h2>
            <label>
              <span>Name</span>
              <input type="text" v-model="name" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" v-model="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" v-model="password" />
            </label>
            <button type="button" class="submit" @click="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import BreathingBackground from '../components/BreathingBackground.vue';
  
  const isSignUp = ref(false);
  const email = ref('');
  const password = ref('');
  const name = ref('');
  
  const toggleSignUp = () => {
    isSignUp.value = !isSignUp.value;
  };
  
  const signIn = () => {
    // Implement sign in logic
    console.log('Signing in', { email: email.value, password: password.value });
  };
  
  const signUp = () => {
    // Implement sign up logic
    console.log('Signing up', { name: name.value, email: email.value, password: password.value });
  };
  </script>
  
  <<style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 64px);
    padding: 20px;
    position: relative;
    z-index: 1;
  }
  
  .cont {
    position: relative;
    width: 900px;
    height: 550px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    border-radius: 20px;
    overflow: hidden;
  }
  
 
  input,
  button {
    background: none;
    font-family: 'Poppins', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    color: #000000;
  }
  
  .form {
    position: relative;
    width: 640px;
    height: 100%;
    transition: transform 1.2s ease-in-out;
    padding: 50px 30px 0;
  }
  
  .sub-cont {
    overflow: hidden;
    position: absolute;
    left: 640px;
    top: 0;
    width: 900px;
    height: 100%;
    padding-left: 260px;
    background: #ebeff5;
    transition: transform 1.2s ease-in-out;
  }
  
  .cont.s--signup .sub-cont {
    transform: translate3d(-640px, 0, 0);
  }
  
  button {
    display: block;
    margin: 0 auto;
    width: 260px;
    height: 36px;
    border-radius: 30px;
    color: #ebeff5;
    font-size: 15px;
    cursor: pointer;
    background-color: #11b9a6;
    transition: all 0.3s ease-in-out;
  }
  
  button:hover {
    background-color: #0e9485;
  }
  
  .img {
    overflow: hidden;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 260px;
    height: 100%;
    padding-top: 360px;
  }
  
  .img:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 900px;
    height: 100%;
    background-color: #bcc1c8;
    opacity: .8;
    transition: transform 1.2s ease-in-out;
  }
  
  .img:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #11b9a6;
  }
  
  .cont.s--signup .img:before {
    transform: translate3d(640px, 0, 0);
  }
  
  .img__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #ebeff5;
    transition: transform 1.2s ease-in-out;
  }
  
  .cont.s--signup .img__text.m--up {
    transform: translateX(520px);
  }
  
  .img__text.m--in {
    transform: translateX(-520px);
  }
  
  .cont.s--signup .img__text.m--in {
    transform: translateX(0);
    color: rgb(216, 110, 43);
  }
  
  .img__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: 36px;
    margin: 0 auto;
    background: transparent;
    color: #ebeff5;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  .img__btn:after {
    content: '';
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #ebeff5;
    border-radius: 30px;
    transition: all 0.3s ease-in-out;
  }
  
  .img__btn:hover:after {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .img__btn span {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform 1.2s;
  }
  
  .img__btn span.m--in {
    transform: translateY(-72px);
  }
  
  .cont.s--signup .img__btn span.m--in {
    transform: translateY(0);
  }
  
  .cont.s--signup .img__btn span.m--up {
    transform: translateY(72px);
  }
  
  h2 {
    width: 100%;
    font-size: 26px;
    text-align: center;
    color: #0e9485;
  }
  
  label {
    display: block;
    width: 260px;
    margin: 25px auto 0;
    text-align: center;
  }
  
  label span {
    font-size: 12px;
    color: #000000;
    text-transform: uppercase;
  }
  
  input {
    display: block;
    width: 100%;
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    text-align: center;
  }
  
  .forgot-pass {
    margin-top: 15px;
    text-align: center;
    font-size: 12px;
    color: #cfcfcf;
  }
  
  .submit {
    margin-top: 40px;
    margin-bottom: 20px;
    background: #11b9a6;
    text-transform: uppercase;
  }
  
  .submit:hover {
    background: #0e9485;
  }
  
  .fb-btn {
    border: 2px solid #d3dae9;

  }
  
  .fb-btn span {
    font-weight: bold;
    color: #455a81;
  }
  
  .sign-in {
    transition-timing-function: ease-out;
  }
  
  .cont.s--signup .sign-in {
    transition-timing-function: ease-in-out;
    transition-duration: 1.2s;
    transform: translate3d(640px, 0, 0);
  }
  
  .sign-up {
    transform: translate3d(-900px, 0, 0);
  }
  
  .cont.s--signup .sign-up {
    transform: translate3d(0, 0, 0);
  }
  </style>