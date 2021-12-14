export const exerciseAdd = (exercise) => {
  return {
    type: 'exerciseAdd',
    payload: exercise
  }
}

export const exerciseRemove = (exercise) => {
  return {
    type: 'exerciseRemove',
    payload: exercise
  }
}

export const setTitle = (title) => {
  return {
    type: 'setTitle',
    payload: title
  }
}

export const reset = () => {
  return {
    type: 'reset',
  }
}

export const addSet = (exercise) => {
  return {
    type: 'addSet',
    payload: exercise
  }
}

export const removeSet = (exercise) => {
  return {
    type: 'removeSet',
    payload: exercise
  }
}

export const setRestTime = (exercise, time) => {
  return {
    type: 'setRestTime',
    payload: {exercise, time}
  }
}

export const setEditProgram = (program) => {
  return {
    type: 'setEditProgram',
    payload: program
  }
}