import { MAX_NUMBER_OF_HASHTAGS, REG_EXP_FOR_HASHTAGS } from './data.js';
import {getHashtagsArray} from './util.js';

const validateHashtagsText = (hashtags) => {
  if(hashtags.length === 1 && !hashtags[0]) {
    return false;
  }
  for (let i = 0; i < hashtags.length; i++) {
    if (!REG_EXP_FOR_HASHTAGS.test(hashtags[i])) {
      return true;
    }
  }
};

const validateSimilarHashtags = (hashtagsArray) => {
  const setOfHashtags = new Set(hashtagsArray);
  return setOfHashtags.size === hashtagsArray.length;
};

const validateNumberOfHashtags = (hashtagsArray) => hashtagsArray.length > MAX_NUMBER_OF_HASHTAGS;

const validateHashtags = (value) => {
  const hashtags = getHashtagsArray(value);
  return !(validateHashtagsText(hashtags)
      || !validateSimilarHashtags(hashtags)
      || validateNumberOfHashtags(hashtags)
  );
};

export {
  validateHashtags
};
