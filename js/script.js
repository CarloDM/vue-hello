const { createApp } = Vue;

createApp({
  data(){
    return {
      message: 'Hello Vue!!',
      image: 'https://salumigombitelli.it/wp-content/uploads/2017/03/fabian-blank-67318-1.jpg',
      stileFoto: ['width: 60%; dispaly: block', ' dispaly: block'], /* ???? perchè non funziona */
      classeFoto: 'disp_img',

      userMessage:'scrive utente',
      messEnter:'',
    }
  },


  methods: {
    saluta: function() {
      return this.message = 'ciao!!!',
              console.log('hai cliccato saluta')
    },
    tastiera(event){
      console.log('press:', event.key)
    },
    invio(event){
      console.log('press enter:', event);
      this.messEnter = this.userMessage;
    }
  }
}).mount('#app')

console.log('log di Vue stesso', Vue)