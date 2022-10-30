import EventManager from "../../lib/EventManager";

export const eventManager = new EventManager();

export function addToast({ type, text, duration }){
  eventManager.emit('addtoast', { type, text, duration })
}


