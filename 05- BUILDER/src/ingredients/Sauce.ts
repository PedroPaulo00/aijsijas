export default class Sauce{

    constructor(private _flavor: String){}

    get flavor() : String{
        return this._flavor;
    }

    set flavor(flavor: String){
        this._flavor = flavor;
    }
}
