import fs from 'node:fs';

const readTxtFile = (fileName) => {
  try {
    return fs.readFileSync(fileName, 'utf8');
  } catch (err) {
    console.log(`Error reading file from disk: ${err}`)
  }
}

const getObjFromJSONFile = (fileName) => {
  const txtJSON = readTxtFile(fileName);
  if (!txtJSON) return;
  return JSON.parse(txtJSON);
}

const getContent = (obj, key) => {
  return obj[key];
}

export { readTxtFile , getObjFromJSONFile, getContent};