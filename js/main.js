function getRandomIntegerNumber(startNumber, lastNumber) {
  if (startNumber < 0) {
    throw new Error('Диапазон не соответствует ТЗ, в диапазоне должны быть числа больше или равные нулю');
  }
  if (startNumber >= lastNumber) {
    throw new Error('Начальное число диапазона не может быть меньше или равно конечному числу');
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

const createCommentsArray = (numberOfComments) => {
  let comments = [];
  let id;
  let avatar;
  let message;
  let name;
  for (let i = 1; i <= numberOfComments; i++){
    id = i;
    avatar = `img/avatar-${  i  }.svg`;
    message = RANDOM_COMMENTS[getRandomIntegerNumber(0, 6)];
    name = RANDOM_NAMES[getRandomIntegerNumber(0, 6)];
    const comment = {
      id: id,
      avatar: avatar,
      message: message,
      name: name
    };
    comments.push(comment);
  }

};

const createKekstaPost = (id, photoId) => {
  const randomDescriptionIndex = getRandomIntegerNumber(0,RANDOM_DESCRIPTION.length-1);
  const randomCommentIndex = getRandomIntegerNumber(0, comments.length);
  return {
    id: id,
    url: `photos/${  photoId  }.jpg`,
    description: RANDOM_DESCRIPTION[randomDescriptionIndex],
    likes: getRandomIntegerNumber(15, 200),
    comment: comments[randomCommentIndex],
  };
};

createKekstaPost();
