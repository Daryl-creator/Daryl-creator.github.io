const getSleepHours = day => {
    switch (day) {
      case 'monday':
      return 8;
      case 'tuesday':
      return 9;
      case 'wednesday':
      return 7;
      case 'thursday':
      return 9;
      case 'friday':
      return 6;
      case 'saturday':
      return 4;
      case 'sunday':
      return 7;
               };
  };
  
  const getActualSleepHours = () => {
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8 
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {console.log('you got the perfect amount of sleep')};
  
    else if (actualSleepHours > idealSleepHours) {console.log('you got ' + (actualSleepHours - idealSleepHours) + 'more hours than you needed this week, you are getting more than enough sleep')};
  
    else {console.log('you got ' + (idealSleepHours - actualSleepHours) + 'less hours than you needed this week, you need to sleep more')};
  
  };
  