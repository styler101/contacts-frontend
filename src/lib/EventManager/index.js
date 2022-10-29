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

  removeListener(eventName, listenerToRemove){
    const listeners = this.listeners[eventName]
    if(!listeners) return;
    // Removendo a função que precisa ser removida.
    // Quando vamos remover funções precisamos remover eles com base no endereço de memória onde ela foi criada.
    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove);
    this.listeners[eventName] = filteredListeners
  }
}

const toastEventManager = new EventManager();

function addToast1(payload){
  console.log('addToast Listener 1', payload)
}
function addToast2(payload){
  console.log('addToast Listener 2', payload)
}

toastEventManager.on('addtoast', addToast1)
toastEventManager.on('addtoast', addToast2)
toastEventManager.emit('addtoast', addToast2)

toastEventManager.removeListener('addToast', 'depois de remover.')
console.log(toastEventManager)
