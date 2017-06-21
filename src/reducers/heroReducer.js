const initialState = []

export default(state = initialState, action) =>{
  if(action.type === 'LOAD_DATA'){
    return [...state, ...action.payload]
  }
  return state
}
