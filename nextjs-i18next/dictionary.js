import {i18n} from './i18n';

const dictionaries = {
    en: () => import("./dictionaries/en.json").then(r => r.default),
    ja: () => import("./dictionaries/ja.json").then(r => r.default),
    ko: () => import("./dictionaries/ko.json").then(r => r.default),
}

// export const getDictionary = (lang) => {
//     return dictionaries[lang]();
// }

// export const getDictionary = async (locale) => {
//     return locale == 'ar' ? dictionaries.ar() : dictionaries.en();
//   };

export const getDictionary = async (locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()