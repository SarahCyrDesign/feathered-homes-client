import fetch from 'isomorphic-fetch';

export function birdsHasErrored(bool) {
    return {
        type: 'BIRDS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function birdsIsLoading(bool) {
    return {
        type: 'BIRDS_IS_LOADING',
        isLoading: bool
    };
}

export function birdsFetchDataSuccess(birds) {
    return {
        type: 'BIRDS_FETCH_DATA_SUCCESS',
        birds
    };
}

export function birdsPostNewSuccess(bird) {
    return {
        type: 'BIRDS_POST_NEW_SUCCESS',
        bird
    };
}

export function birdsFetch(url) {
  return (dispatch) => {
    return fetch('/api/birds', {
      method: 'GET',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
    })
      .then(response => response.json())
      .then(birds => {
          console.log(birds)
          dispatch(birdsFetchDataSuccess(birds));
      })
      .catch( () => dispatch(birdsHasErrored(true)));
  }
}

export function addBird(bird) {
    return (dispatch) => {
      //dispatch({type: 'CREATE_NEW_BIRD'});
      return fetch(`/api/birds`, {
        method: 'POST',
        body: JSON.stringify({bird}),
        headers: {
          'Content-Type': 'application/json'
        },
    },
    )
    .then(response => response.json())
    .then(bird => {
      dispatch({type: 'ADD_BIRD', bird});
  })
    .catch( () => dispatch(birdsHasErrored(true)));
  }
}

export function addHeart(id, values) {
  console.log(id, values);
  return (dispatch) => {
    return fetch(`/api/birds/${id}.json`, {
      method: 'PUT',
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
      body: JSON.stringify({bird: {hearts: values}}),
    })
    .then(response => response.json())
    .then(bird => {
      dispatch({type: 'ADD_HEART', id});
    })
    .catch( () => dispatch(birdsHasErrored(true)));
  }
}
