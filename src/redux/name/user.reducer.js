const initialState = {
  user: '',
  newProgram: [],
  programs: [],
  sessions: [],
  totalTime: 0
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case 'setData': {
         return {...payload, totalTime: 0}
        }
      case 'setTotalTime':
         return {
            ...state, totalTime: payload
         };
      case 'setProgram': {
        const newState = {...state}
        newState.sessions.unshift(payload)
      return newState;
      }
      case 'toggleRestTimer':
        const on = payload[0]
        const time = payload[1]
         return {
            ...state, restTimer: {status: on, time}
         };
      default: return state;
  }

};

export default userReducer;