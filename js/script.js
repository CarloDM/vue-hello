const { createApp } = Vue;

createApp({
  data(){
    return {
      message: 'Hello Vue!!',
      image: 'https://salumigombitelli.it/wp-content/uploads/2017/03/fabian-blank-67318-1.jpg',
      stileFoto: 'width: 60%;'
    }
  }
}).mount('#app')



console.log('log di Vue stesso', Vue)