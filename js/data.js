import { getRandomArrayElement, getRandomIntegerNumber } from './util.js';

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
  'Грущу возле окна',
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
const NUMBER_OF_USERS = 6;
const NUMBER_OF_RANDOM_COMMENTS = 200;
const numberOfLikesRange = {
  startFrom: 15,
  endOn: 200
};
const NUMBER_OF_KEKSTAPOSTS = 25;
const MAX_NUMBER_OF_HASHTAGS = 5;
export {
  RANDOM_COMMENTS,
  RANDOM_DESCRIPTION,
  RANDOM_NAMES,
  NUMBER_OF_USERS,
  NUMBER_OF_RANDOM_COMMENTS,
  numberOfLikesRange,
  NUMBER_OF_KEKSTAPOSTS,
  MAX_NUMBER_OF_HASHTAGS
};

const REG_EXP_FOR_HASHTAGS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const REG_EXP_FOR_HASHTAGS_ARRAY = /\s+/;

const createCommentsArray = (numberOfComments) => {
  const comments = [];

  for (let i = 0; i <= numberOfComments - 1; i++) {
    const comment = {
      id: i + 1,
      avatar: `img/avatar-${  getRandomIntegerNumber(1,NUMBER_OF_USERS)  }.svg`,
      message: getRandomArrayElement(RANDOM_COMMENTS),
      name: getRandomArrayElement(RANDOM_NAMES)
    };
    comments.push(comment);
  }
  return comments;
};

const createKekstaPostsArray = (numberOfPosts) => {
  const kekstaPostsArray = [];

  for (let i = 0; i <= numberOfPosts - 1; i++){
    const kekstaPost = {
      id: i + 1,
      url: `photos/${ i + 1 }.jpg`,
      likes: getRandomIntegerNumber(numberOfLikesRange.startFrom,numberOfLikesRange.endOn),
      description: getRandomArrayElement(RANDOM_DESCRIPTION),
      comment: createCommentsArray(getRandomIntegerNumber(1,NUMBER_OF_RANDOM_COMMENTS))
    };
    kekstaPostsArray.push(kekstaPost);
  }
  return kekstaPostsArray;
};

const photoFilters = {
  chrome : {
    name: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  },
  sepia : {
    name: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  },
  marvin : {
    name: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
    connect: 'lower',
  },
  phobos : {
    name: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  },
  heat : {
    name: 'brightness',
    range: {
      min: 0,
      max: 3,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  none: 'none',
  property: '',
  getTotalString: function (variable){
    if (photoFilters.property === 'marvin'){
      return `${photoFilters.property  }(${  variable  }%)`;
    }
    if (photoFilters.property === 'phobos'){
      return `${photoFilters.property  }(${  variable  }px)`;
    }
    return `${photoFilters.property  }(${  variable  })`;
  }
};

export {
  photoFilters,
  getRandomArrayElement,
  createCommentsArray,
  createKekstaPostsArray,
  REG_EXP_FOR_HASHTAGS,
  REG_EXP_FOR_HASHTAGS_ARRAY
};
