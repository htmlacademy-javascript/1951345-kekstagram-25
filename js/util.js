function getRandomIntegerNumber(startNumber, lastNumber) {
  if (startNumber < 0) {
    throw new Error('Ошибка в функции генерации случайного числа: в параметрах присутствуют числа ниже нуля');
  }
  if (startNumber >= lastNumber) {
    throw new Error('Ошибка в функции генерации случайного числа: в параметрах начальное число больше конечного');
  }
  const auxStartNumber = Math.ceil(startNumber);
  const auxLastNumber = Math.floor(lastNumber) + 1;
  return Math.floor(Math.random() * (auxLastNumber - auxStartNumber)) + auxStartNumber;
}
function checkStringLength(currentString, maxLength) {
  return currentString.length <= maxLength;
}

const getRandomArrayElement = (array) => array[getRandomIntegerNumber(0, array.length - 1)];

export {getRandomIntegerNumber, checkStringLength, getRandomArrayElement};
