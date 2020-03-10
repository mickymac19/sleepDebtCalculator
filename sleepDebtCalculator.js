const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 8;
  } else if (day === 'Wednesday') {
    return 8;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 8;
  } else if (day === 'Saturday') {
    return 8;
  } else if (day === 'Sunday') {
    return 8;
  } else { 
    return ('Invalid day!');
  }
};
  
const getActualSleepHours = () =>
getSleepHours('Monday')+
getSleepHours('Tuesday')+
getSleepHours('Wednesday')+    
getSleepHours('Thursday')+  
getSleepHours('Friday')+ getSleepHours('Saturday')+
getSleepHours('Sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getActualSleepHours();
  
  if(actualSleepHours === idealSleepHours) 
  {
    console.log("You've got the perfect amount of sleep!");
                }
  else if(actualSleepHours > idealSleepHours) {
    console.log("You've got" + (idealSleepHours - actualSleepHours) + "more sleep than needed.");
  }
  else if(actualSleepHours < idealSleepHours) {
    console.log("You should get some rest because you've slept" + (actualSleepHours - idealSleepHours) + "hours less than you should have this week.");
  }
  else {
    console.log("Error! Something went wrong,check your code."); 
  }  
};
  
calculateSleepDebt();
