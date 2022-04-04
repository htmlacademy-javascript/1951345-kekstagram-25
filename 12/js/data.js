import { getRandomArrayElement } from './util.js';

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
const NUMBER_OF_RANDOM_COMMENTS = 23;
const numberOfLikesRange = {
  startFrom: 15,
  endOn: 200
};
const NUMBER_OF_KEKSTAPOSTS = 25;
const MAX_NUMBER_OF_HASHTAGS = 5;
const FIRSTABLE_SHOWN_COMMENTS = 5;
const COMMENTS_TO_SHOW = 5;
export {
  RANDOM_COMMENTS,
  RANDOM_DESCRIPTION,
  RANDOM_NAMES,
  NUMBER_OF_USERS,
  NUMBER_OF_RANDOM_COMMENTS,
  numberOfLikesRange,
  NUMBER_OF_KEKSTAPOSTS,
  MAX_NUMBER_OF_HASHTAGS,
  FIRSTABLE_SHOWN_COMMENTS,
  COMMENTS_TO_SHOW,
};

const REG_EXP_FOR_HASHTAGS = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const REG_EXP_FOR_HASHTAGS_ARRAY = /\s+/;

const SCALE_MIN_SIZE = 0.25;
const SCALE_MAX_SIZE = 1;
const SCALE_STEP = 0.25;
const NON_EFFECT_FIELD_ID = 'effect-none';
const photoFilters = {
  chrome : {
    name: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  sepia : {
    name: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  },
  marvin : {
    name: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  },
  phobos : {
    name: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  },
  heat : {
    name: 'brightness',
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
  },
  none: 'none',
  property: '',
  getTotalString: function (variable){
    switch(true){
      case (photoFilters.property === photoFilters.marvin.name):
        return `${photoFilters.property  }(${  variable  }%)`;
      case (photoFilters.property === photoFilters.phobos.name):
        return `${photoFilters.property  }(${  variable  }px)`;
      default:
        return `${photoFilters.property  }(${  variable  })`;
    }
  }
};

export {
  photoFilters,
  getRandomArrayElement,
  REG_EXP_FOR_HASHTAGS,
  REG_EXP_FOR_HASHTAGS_ARRAY,
  SCALE_MAX_SIZE,
  SCALE_MIN_SIZE,
  SCALE_STEP,
  NON_EFFECT_FIELD_ID
};
