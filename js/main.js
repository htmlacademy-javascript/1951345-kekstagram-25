function getRandomIntegerNumber(startNumber, lastNumber){
  if(startNumber <0){
    return 'Диапазон не соответствует ТЗ, в диапазоне должны быть числа больше или равные нулю';
  }
  if(startNumber >= lastNumber){
    return 'Начальное число диапазона не может быть меньше или равно конечному числу';
  }
  startNumber = Math.ceil(startNumber);
  lastNumber = Math.floor(lastNumber)+1;
  return Math.floor(Math.random() * (lastNumber - startNumber)) + startNumber;
}

function checkStringLength (currentString, maxLength){
  if(currentString.length <= maxLength){
    return true;
  }
  return false;
}

getRandomIntegerNumber();
checkStringLength();
