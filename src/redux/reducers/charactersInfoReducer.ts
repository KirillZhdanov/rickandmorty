
import {SET_CHARACTERS} from "../actions/actions";

const initialState = {
    characters: { 
      results: [{}] 
    },
  };
  

  
  export  const charactersInfoReducer=(state = initialState, action:any) =>{
    switch (action.type) {
      case SET_CHARACTERS:
        return { ...state, characters:{info:action.payload.info, results:[...state.characters.results, ...action.payload.results ]}};
    }
    return state;
  }
  
