export const calculateTotalVolume = (session) => {
  const exercises = Object.keys(session)
  let volume = 0;

  exercises.forEach(exercise => {
    session[exercise].forEach(set => volume += Number(set.weight) * Number(set.reps));
  })
  return volume;
}
