import { defaultLang, labels } from "./utils";

export function useTranslations(lang: keyof typeof labels) {
    return function t(key: keyof typeof labels[typeof defaultLang]) {
        return (labels[lang] as typeof labels[typeof defaultLang])[key] || labels[defaultLang][key];
    }
}