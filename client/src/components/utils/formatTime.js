    export const formatTime = (counter) => {
  const seconds = counter;
  const format = val => `0${Math.floor(val)}`.slice(-2);
  const minutes = (seconds % 3600) / 60;
  const time = [minutes, seconds % 60].map(format).join(':');
  return time;
}    
    