export const setData = (data) => {
  return {
    type: 'setData',
    payload: data
  }
}

export const setTotalTime = (time) => {
  return {
    type: 'setTotalTime',
    payload: time
  }
}

export const setProgram = (program) => {
  return {
    type: 'setProgram',
    payload: program
  }
}

export const toggleRestTimer = (info) => {
  return {
    type: 'toggleRestTimer',
    payload: info
  }
}

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