export function loadPersistedState() {
  try {
    const serializedState = JSON.parse(localStorage.getItem('state'));
    if (serializedState === null) {
      return undefined;
    } else {
      return serializedState;
    }
    
  } catch (err) {
    return undefined;
  }
}

export function savePersistedState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // TODO: add error handling
  }
}
