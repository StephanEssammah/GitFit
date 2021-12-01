export const setUserName = (name) => {
  return {
    type: 'setName',
    payload: name
  }
}

export const setTotalTime = (time) => {
  return {
    type: 'setTotalTime',
    payload: time
  }
}