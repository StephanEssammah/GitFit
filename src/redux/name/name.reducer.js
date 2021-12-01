const calculateTotalVolume = session => {
  const exercises = Object.keys(session.exercises)
  let volume = 0;

  exercises.forEach(exercise => {
    session.exercises[exercise].forEach(set => volume += Number(set.weight) * Number(set.reps));
  })
  return volume;
}

const nameReducer = (state = {}, { type, payload }) => {
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
      default: return state;
  }

};

export default nameReducer;