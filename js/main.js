import {createKekstaPostsArray, NUMBER_OF_KEKSTAPOSTS} from './data.js';
import { renderKekstaPosts } from './render.js';
import './editor.js';
import './forms.js';
import './photo_filter.js';
import './uploader.js';
const generatedKekstaPostsArray = createKekstaPostsArray(NUMBER_OF_KEKSTAPOSTS);
renderKekstaPosts(generatedKekstaPostsArray);

