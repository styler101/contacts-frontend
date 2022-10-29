import EventManager from "../../lib/EventManager";

export const eventManager = new EventManager();

export function addToast({ type, text }){
  eventManager.emit('addtoast', { type, text })
}


