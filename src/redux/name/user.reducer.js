const calculateTotalVolume = session => {
  const exercises = Object.keys(session.exercises)
  let volume = 0;

  exercises.forEach(exercise => {
    session.exercises[exercise].forEach(set => volume += Number(set.weight) * Number(set.reps));
  })
  return volume;
}

const initialState = {
  user: '',
  newProgram: [],
  programs: [],
  sessions: []
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case 'setData': {
         return payload
        }
      case 'setTotalTime':
         return {
            ...state, totalTime: payload
         };
      case 'setProgram': {
        const totalVolume = calculateTotalVolume(payload);
        const newState = {...state}
        payload.volume = totalVolume;
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