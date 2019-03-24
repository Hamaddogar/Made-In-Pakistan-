const searchFormReducers = ((state = {data:{}}, action) => {
  
    switch (action.type) {


        case 'searchaction':
    
            return {...state, ...action.payloed}
                  
        default:
            return state



    }


})
 export  default searchFormReducers;