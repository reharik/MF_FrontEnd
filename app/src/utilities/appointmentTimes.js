
export function generateAllTimes(inc) {
  return iterateTimes(inc, 'AM').concat(iterateTimes(inc, 'PM'));
}

const iterateTimes = (inc, morning) => {
  let times = [];
  for(let i=1; i<=12; i++){
    times.push({ value: `${i}:00 ${morning}`, label: `${i}:00 ${morning}`});
    switch(inc){
      case 15: {
        times.push({ value: `${i}:15 ${morning}`, label: `${i}:15 ${morning}`});
        times.push({ value: `${i}:30 ${morning}`, label: `${i}:30 ${morning}`});
        times.push({ value: `${i}:45 ${morning}`, label: `${i}:45 ${morning}`});
        break;
      }
      default:{
        times.push({ value: `${i}:30 ${morning}`, label: `${i}:30 ${morning}`});
      }
    }
  }
  return times;
};
