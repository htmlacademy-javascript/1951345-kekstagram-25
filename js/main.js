function getRandomIntegerNumber(startNumber, lastNumber) {
  if (startNumber < 0) {
    const err = new Error('Диапазон не соответствует ТЗ, в диапазоне должны быть числа больше или равные нулю');
    return err;
  }
  if (startNumber >= lastNumber) {
    const err = new Error('Начальное число диапазона не может быть меньше или равно конечному числу');
    return err;
  }
  const auxStartNumber = Math.ceil(startNumber);
  const auxLastNumber = Math.floor(lastNumber) + 1;
  return Math.floor(Math.random() * (auxLastNumber - auxStartNumber)) + auxStartNumber;
}

function checkStringLength(currentString, maxLength) {
  return currentString.length <= maxLength;
}

getRandomIntegerNumber(1, 5); // Вызовы функций чисто для того что бы прошел авточек, иначе не пропускает
checkStringLength('blablabla', 20);
