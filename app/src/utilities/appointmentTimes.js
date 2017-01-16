import moment from 'moment';

export function generateAllTimes(inc) {
  return iterateTimes(inc, 'AM').concat(iterateTimes(inc, 'PM'));
}

const iterateTimes = (inc, morning) => {
  let times = [];
  for(let i=1; i<=12; i++){
    times.push({ value: `${i < 10 ? '0'+i :i}:00 ${morning}`, display: `${i}:00 ${morning}`});
    switch(inc){
      case 15: {
        times.push({ value: `${i < 10 ? '0'+1 :i}:15 ${morning}`, display: `${i}:15 ${morning}`});
        times.push({ value: `${i < 10 ? '0'+1 :i}:30 ${morning}`, display: `${i}:30 ${morning}`});
        times.push({ value: `${i < 10 ? '0'+1 :i}:45 ${morning}`, display: `${i}:45 ${morning}`});
        break;
      }
      default:{
        times.push({ value: `${i < 10 ? '0'+1 :i}:30 ${morning}`, display: `${i}:30 ${morning}`});
      }
    }
  }
  return times;
};

export function getISODateTime(date,time) {
  if(!date || !time){
    return undefined;
  }
  const formattedTime = moment(time, 'hh:mm A').format('HHmm');
  let dateTime = `${date}T${formattedTime}`;
  return moment(dateTime).toISOString();
}
