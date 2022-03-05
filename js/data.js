import { getRandomArrayElement, getRandomIntegerNumber } from './util.js';
import {
  RANDOM_COMMENTS,
  RANDOM_DESCRIPTION,
  RANDOM_NAMES,
  NUMBER_OF_RANDOM_COMMENTS,
  numberOfLikesRange,
  NUMBER_OF_USERS
} from './settings.js';

const createCommentsArray = (numberOfComments) => {
  const comments = [];

  for (let i = 0; i <= numberOfComments - 1; i++){
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

const createKekstaPosts = (numberOfPosts) => {
  const kekstaPostsArray = [];

  for (let i = 0; i <= numberOfPosts - 1; i++){
    const kekstaPost = {
      id: i + 1,
      url: `photos/${ i + 1 }.svg`,
      likes: getRandomIntegerNumber(numberOfLikesRange.startFrom,numberOfLikesRange.endOn),
      description: getRandomArrayElement(RANDOM_DESCRIPTION),
      comment: createCommentsArray(getRandomIntegerNumber(1,NUMBER_OF_RANDOM_COMMENTS))
    };
    kekstaPostsArray.push(kekstaPost);
  }
  return kekstaPostsArray;
};

export {getRandomArrayElement, createCommentsArray, createKekstaPosts};
