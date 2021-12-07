const newProgramReducer = (state = {title: '', exercises: []}, { type, payload }) => {
  switch (type) {
      case 'exerciseAdd':
        return {...state, exercises: [...state.exercises, payload]}
      case 'exerciseRemove':
        const filteredExercises = state.exercises.filter(exercise => exercise.name !== payload)
        return {...state, exercises: filteredExercises};
      case 'setTitle':
        return {...state, title: payload};
      case 'reset':
        return {title: '', exercises: []};
      case 'addSet': {
        const exercises = [...state.exercises]
        const targetExercise = exercises.find(exercise => exercise.name === payload)
        targetExercise.sets++
        return {...state, exercises }
      }
      case 'removeSet': {
        const exercises = [...state.exercises]
        const targetExercise = exercises.find(exercise => exercise.name === payload)
        if (targetExercise.sets === 0) {
          return state;
        }
        targetExercise.sets--
        return {...state, exercises }
      }
      case 'setRestTime': {
        const exercises = [...state.exercises]
        const targetExercise = exercises.find(exercise => exercise.name === payload.exercise)
        targetExercise.rest = payload.time
        return {...state, exercises }
      }
      case 'setEditProgram': {
        console.log('state:', state)
        console.log('payload:', payload.program)

        return {...state, ...payload.program}
      }
      default: return state;
  }

};

export default newProgramReducer;