import moment from 'moment';

export function generateAllTimes(inc, start, end) {
  return iterateTimes(inc, 'AM', start).concat(iterateTimes(inc, 'PM', 1, end));
}

const iterateTimes = (inc, morning, start = 1, end = 12) => {
  let times = [];
  for(let i=start; i<=end; i++){
    times.push({ value: `${i < 10 ? '0'+i :i}:00 ${morning}`, display: `${i}:00 ${morning}`});
    switch(inc){
      case 15: {
        times.push({ value: `${i < 10 ? '0'+i :i}:15 ${morning}`, display: `${i}:15 ${morning}`});
        times.push({ value: `${i < 10 ? '0'+i :i}:30 ${morning}`, display: `${i}:30 ${morning}`});
        times.push({ value: `${i < 10 ? '0'+i :i}:45 ${morning}`, display: `${i}:45 ${morning}`});
        break;
      }
      default:{
        times.push({ value: `${i < 10 ? '0'+i :i}:30 ${morning}`, display: `${i}:30 ${morning}`});
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
  var moment2 = moment(date, 'YYYYMMDD');
    const formattedDate = moment2.format('YYYYMMDD');
  console.log('==========formattedDate=========');
  console.log(formattedDate);
  console.log('==========END formattedDate=========');
  let dateTime = `${formattedDate}T${formattedTime}`;
console.log('==========dateTime=========');
console.log(dateTime);
console.log('==========END dateTime=========');
  return moment(dateTime).toISOString();
}
