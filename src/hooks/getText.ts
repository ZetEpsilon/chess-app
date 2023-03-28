import Polylang, {DEFAULT_LANGUAGE, PageNameType} from "@/application/core/polylang/Polylang";

export const getLang = (pageName:PageNameType )=>{
    //implement take lang from zustand;
    const language = DEFAULT_LANGUAGE;
    const polylang = new Polylang(pageName, language);
    return polylang.get.bind(polylang);
}