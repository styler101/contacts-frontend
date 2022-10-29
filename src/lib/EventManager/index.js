export default class EventManager{

  constructor() {
    this.listeners = {}
  }
  // Quando acontecer algo
  on(eventName, eventFunction){
    if(!this.listeners[eventName]) {
      this.listeners[eventName] = []
    }
    this.listeners[eventName].push(eventFunction)
  }
  // Função que irá disparar o evento
  emit(eventName, eventPayload){
    if(!this.listeners[eventName]) return;
    this.listeners[eventName].forEach((listerners) => {
      listerners(eventPayload)
    })

  }

}

const toastEventManager = new EventManager();
toastEventManager.on('addtoast',(payload) => {
   console.log('addtoast Listeners 1', payload)
});
toastEventManager.on('addtoast',(payload) => {
  console.log('addtoast Listeners 2', payload)
})
toastEventManager.emit('addtoast', {
   type: 'danger',
   text: 'Texto'
})
console.log({ toastEventManager });
