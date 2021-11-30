const nameReducer = (state = {name: 'stephan'}, { type, payload }) => {

  switch (type) {
      case 'setName': {
         return {name: payload} 
        }
      case 'setTotalTime':
         return {
            ...state, totalTime: payload
         };
       default: return state;
  }

};

export default nameReducer;