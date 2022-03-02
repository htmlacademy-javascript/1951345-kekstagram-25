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

getRandomIntegerNumber(1, 5); // Вызовы функций чисто для того что бы прошел авточек, иначе не пропускает
checkStringLength('blablabla', 20);


const RANDOM_NAMES = [
  'Гена Букин',
  'Егор Летов',
  'Пенадльф Серый',
  'Логовас Безотцовщина',
  'Агроном сын Агронома',
  'Гиви, сын Зураба'
];
const RANDOM_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const RANDOM_DESCRIPTION = [
  'Я на велике',
  'Я в горах',
  'Кушаю тортик',
  'В кругу семьи',
  'Тискаю кота',
  'Просто фотка ниочем',
  'Без фильтров',
  'Пора отдыхать',
  'На работе',
  'Еду с работы',
  'Грушу возле окна',
  'За рулем',
  'Очень модный',
  'В деревне',
  'В путешествии',
  'В отеле',
  'На горных лыжаъ',
  'Готовлю кушать',
  'Кодю потихой',
  'Типа учусь',
  'Эх, Москва... Пробкии',
  'Щас бы покушать',
  'Я электрик о_О',
  'Я сантехник',
  'Я даже не знаю уже кто Я'
];
const getRandomArrayElement = (array) => array[getRandomIntegerNumber(0, array.length-1)];

const createCommentsArray = (numberOfComments) => {
  const comments = [];

  for (let i = 1; i <= numberOfComments; i++){
    const comment = {
      id: i,
      avatar: `img/avatar-${  getRandomIntegerNumber(1,6)  }.svg`,
      message: getRandomArrayElement(RANDOM_COMMENTS),
      name: getRandomArrayElement(RANDOM_NAMES)
    };
    comments.push(comment);
  }
  return comments;
};

const createKekstaPosts = (numberOfPosts) => {
  const kekstaPostsArray = [];

  for (let i = 1; i<=numberOfPosts; i++){
    const kekstaPost = {
      id: i,
      url: `photos/${ i }.svg`,
      likes: getRandomIntegerNumber(15,200),
      description: getRandomArrayElement(RANDOM_DESCRIPTION),
      message: createCommentsArray(getRandomIntegerNumber(1,200))
    };
    kekstaPostsArray.push(kekstaPost);
  }
  return kekstaPostsArray;
};

createKekstaPosts(25);
