export function birdsHasErrored(state = false, action) {
  switch (action.type) {
    case 'BIRDS_HAS_ERRORED':
    return action.hasErrored;

    default:
      return state;
  }
}

export function birdsIsLoading(state = false, action) {
  switch (action.type) {
    case 'BIRDS_IS_LOADING':
    return action.isLoading;

    default:
      return state;
  }
}

export function birds(state = [], action) {

  switch (action.type) {

    case 'BIRDS_FETCH_DATA_SUCCESS':
      return action.birds;

    case 'CREATE_NEW_BIRD':
      return state;

    case 'ADD_BIRD':
      return [
        ...state,
        action.bird
      ];
      //return state.concat(action.bird)

    case 'ADD_HEART':
      let index = state.findIndex(bird => bird.id === action.id);
      let bird = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, bird, { hearts: bird.hearts += 1 }),
        ...state.slice(index + 1)
      ];


    default:
      return state;
  }
}
