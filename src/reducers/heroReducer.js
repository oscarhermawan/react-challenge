const initialState = []

export default(state = initialState, action) =>{
  if(action.type === 'LOAD_DATA'){
    return [...state, ...action.payload]
  }
  else if(action.type === 'ADD_HERO'){
    console.log('state', state);
    console.log('payload',action.payload);
    return [...state, action.payload]
  }
  return state
}
