export const loadData = (heroes) => {
  return {
    type: 'LOAD_DATA',
    payload:heroes,
  };
}

export const addHero = (hero) =>{
  return{
    type: 'ADD_HERO',
    payload:hero,
  }
}
