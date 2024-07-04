import { getObjFromJSONFile } from './utils/json-data.js';

const jsonFileName = './data/index.json';

const jsonData = getObjFromJSONFile(jsonFileName);

const jsonObj = jsonData?.contents;

if (!jsonObj) exit; 
const titles = jsonObj.map((d) => d.title);

const getTitles = () => titles;

const getChapter = (chapter) => {
  const arr = jsonObj.filter(o => o.title === chapter);
  if (arr.length > 0) {
    return arr[0];
  }
  return null;
}
const getParagraph = (chapter, paragraph) => {
  const ch = getChapter(chapter);
  if (!ch) return null;
  return ch[paragraph];
};

export { getTitles, getChapter, getParagraph };

console.log(getTitles());
//console.log(getChapter('Good luck!'))
//console.log(getParagraph('Placing an order', 'Cancel an order'));
