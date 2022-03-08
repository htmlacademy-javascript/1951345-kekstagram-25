import {createKekstaPosts, NUMBER_OF_KEKSTAPOSTS} from './data.js';
import { renderKekstaPost } from './render.js';
import './editor.js';
import './forms.js';
import './photo_filter.js';
import './uploader.js';
const generatedKekstaPostsArray = createKekstaPosts(NUMBER_OF_KEKSTAPOSTS);
renderKekstaPost(generatedKekstaPostsArray);

