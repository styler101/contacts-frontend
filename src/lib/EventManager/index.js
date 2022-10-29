export default class EventManager{

  constructor() {
    this.listeners = new Map();
  }
  // Quando acontecer algo
  on(eventName, eventFunction){
    // verifica se o objeto possui essa chave
    if(!this.listeners.has(eventName)){
      // seta uma propriedade para um valor.
      this.listeners.set(eventName, [])
    }
    this.listeners.get(eventName).push(eventFunction)
  }
  // Função que irá disparar o evento
  emit(eventName, eventPayload){
    if(!this.listeners.get(eventName)) return
    this.listeners.get(eventName).forEach((listener) => { listener(eventPayload) })
  }

  removeListener(eventName, listenerToRemove){
    const listeners = this.listeners.get(eventName)
    if(!listeners) return;
    // Removendo a função que precisa ser removida.
    // Quando vamos remover funções precisamos remover eles com base no endereço de memória onde ela foi criada.
    const filteredListeners = listeners.filter((listener) => listener !== listenerToRemove);
    this.listeners.set(eventName, filteredListeners)
  }
}

