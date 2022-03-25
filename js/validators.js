import { MAX_NUMBER_OF_HASHTAGS, REG_EXP_FOR_HASHTAGS } from './data.js';
import {getHashtagsArray} from './util.js';

function validateHashtagsText (hashtags) {
  if(hashtags[0] === ''){
    return false;
  }
  for (let i = 0; i < hashtags.length; i++) {
    if (!REG_EXP_FOR_HASHTAGS.test(hashtags[i])) {
      return true;
    }
  }
}
function validateSimilarHashtags (hashtagsArray) {
  const setOfHashtags = new Set(hashtagsArray);
  return setOfHashtags.size === hashtagsArray.length;
}

function validateNumberOfHashtags (hashtagsArray) {
  return hashtagsArray.length > MAX_NUMBER_OF_HASHTAGS;
}

const validateHashtags = (value) => {
  const hashtags = getHashtagsArray(value);
  switch (true) {
    case (validateHashtagsText(hashtags)):
      return false;
    case (!validateSimilarHashtags(hashtags)):
      return false;
    case (validateNumberOfHashtags(hashtags)):
      return false;
    default:
      return true;
  }
}

export {
  validateHashtags
};
