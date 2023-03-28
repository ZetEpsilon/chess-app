import lang from "./../../lang/lang"

export type PageNameType = keyof typeof lang

export const DEFAULT_LANGUAGE = 'eng';
export default class Polylang{
    public language:string = DEFAULT_LANGUAGE;
    public pageName:string;

    constructor(pageName:string, language?:string) {
        this.pageName = pageName;
        if(language){
            this.language = language;
        }
    }

    get(...path:string[]){
        try{
            let dict = lang[this.pageName];
            for(let item of path){
                dict = dict[item];
            }
            return dict[this.language];
        }catch (e){
            throw new Error("Invalid dictionary path name");
        }
    }
}



