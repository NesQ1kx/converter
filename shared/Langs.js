export const RU = 'RU-ru';
export const EN = 'EN-en';


export const convert = (object, lang) =>  {
    if(!object.hasOwnProperty('enName') || !object.hasOwnProperty('ruName')) {
        throw new Error('Wrong object structure');
    }
    return lang === EN ? object.enName : object.ruName;
};
