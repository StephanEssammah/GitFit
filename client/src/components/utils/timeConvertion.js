export const displayTime = (seconds) => {
  const minutes = seconds / 60
  if(seconds < 3600) {
    return `${Math.round(minutes)}m`
  }
  if(minutes > 60) {
    const hours = Math.floor(minutes / 60)
    const leftoverMinutes = minutes - (hours * 60)
    return `${hours}h ${Math.round(leftoverMinutes)}m`;
  }
}
