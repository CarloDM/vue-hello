const { createApp } = Vue;

createApp({
  data(){
    return {
      message: 'Hello Vue!!',
      image: 'https://salumigombitelli.it/wp-content/uploads/2017/03/fabian-blank-67318-1.jpg',
      stileFoto: ['width: 60%; dispaly: block', ' dispaly: block'], /* ???? perchè non funziona */

      userMessage:'scrive utente'
    }
  },
  methods: {
    saluta: function() {
      return this.message = 'ciao'
    }
  }
}).mount('#app')



console.log('log di Vue stesso', Vue)