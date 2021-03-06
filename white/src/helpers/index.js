/**
 * @param {number} number
 * @param {boolean} include
 * @return {number}
 */

function randomIndex(number, include = false) {
  return Math.floor(Math.random() * number + Number(include));
}


function toLineArray(obj) {
  let result = [];
  Object.keys(obj).map((key) => {
      if (typeof obj[key] === "object") {
          toLineArray(obj[key])
      }
      else {
          if(typeof obj[key] === "string"){
            result.push(obj[key])
          }
      }
  });
  return result;
}


function deepReplace(obj,item,arr) {
  Object.keys(obj).map((key) => {
      if (typeof obj[key] === "object") {
          deepReplace(obj[key],item,arr)
      }
      else {
          if(obj[key] == item){
            obj[key] = arr[item];
          }
      }
  });
}

function replaceData(origin,translatedArray ){
  let obj = Object.assign({}, origin);
  Object.keys(translatedArray).map((item) => {
    deepReplace(obj,item,translatedArray)
  })
  return obj;
}

function getBrowserLocales(options = {}) {
  const defaultOptions = {
    languageCodeOnly: false,
  };

  const opt = {
    ...defaultOptions,
    ...options,
  };

  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (!browserLocales) {
    return undefined;
  }

  return browserLocales.map(locale => {
    const trimmedLocale = locale.trim();

    return opt.languageCodeOnly
      ? trimmedLocale.split(/-|_/)[0]
      : trimmedLocale;
  });
}


export {
  randomIndex,
  toLineArray,
  deepReplace,
  replaceData,
  getBrowserLocales
}