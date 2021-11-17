const root = new Vue({
	el: "#root",
	data:{
		userProfile:{
			name: 'Paolo',
			surName:'Duzioni',
			avatar: '_io',
		},
		contacts: [
			{
				 name: 'Michele',
				 avatar: '_1',
				 visible: true,
				 messages: [
					  {
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent'
					  },
					  {
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent'
					  },
					  {
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received'
					  }
				 ],
			},
			{
				 name: 'Fabio',
				 avatar: '_2',
				 visible: true,
				 messages: [
					  {
							date: '20/03/2020 16:30:00',
							text: 'Ciao come stai?',
							status: 'sent'
					  },
					  {
							date: '20/03/2020 16:30:55',
							text: 'Bene grazie! Stasera ci vediamo?',
							status: 'received'
					  },
					  {
							date: '20/03/2020 16:35:00',
							text: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent'
					  }
				 ],
			},    {
				 name: 'Samuele',
				 avatar: '_3',
				 visible: true,
				 messages: [
					  {
							date: '28/03/2020 10:10:40',
							text: 'La Marianna va in campagna',
							status: 'received'
					  },
					  {
							date: '28/03/2020 10:20:10',
							text: 'Sicuro di non aver sbagliato chat?',
							status: 'sent'
					  },
					  {
							date: '28/03/2020 16:15:22',
							text: 'Ah scusa!',
							status: 'received'
					  }
				 ],
			},
			{
				 name: 'Luisa',
				 avatar: '_4',
				 visible: true,
				 messages: [
					  {
							date: '10/01/2020 15:30:55',
							text: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent'
					  },
					  {
							date: '10/01/2020 15:50:00',
							text: 'Si, ma preferirei andare al cinema',
							status: 'received'
					  }
				 ],
			},
	  ],

	  avtiveContact:0,
	  inputValue:'',
	  date:'',
	  response:'',

	},

	methods:{
		randomResponse(){
			const resp = ['ok','ciao','no','FUCK YOU']
			const i = Math.floor (Math.random() * resp.length + 1) 
			this.response = resp[i]
		},
		getDate() {
			const today = dayjs();
			this.date = today.format('DD/MM/YYYY HH:mm:ss');
	  },
		
		showMessage(index){
			this.avtiveContact = index
		},
		
		
		sentMessage(){
			this.getDate() 
			if(this.inputValue !== ''){
			const newMesage =
			{
				date: this.date,
				text: this.inputValue,
				status: 'sent'
		  	}
		 	this.contacts[this.avtiveContact].messages.push(newMesage)
			this.inputValue=''
		
			setTimeout(()=>{
				this.randomResponse()
				this.contacts[this.avtiveContact].messages.push(
					{
						date: 'this.date',
						text: this.response,
						status: 'received'
					})
				 
			}, 3000)
		
			}
			
		},
	

	}
	
	
})