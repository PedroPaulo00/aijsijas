import Bread from "../ingredients/Bread";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";

export default class Sandwich{
    private _sauce : Sauce[] = [];
    private _sandwichType: SandwichType;
    private _bread: Bread;
    private _protein: number;
    private _salad: Salad;
    
    /**
     * Getter sandwichType
     * @return {SandwichType}
     */
	public get sandwichType(): SandwichType {
		return this._sandwichType;
	}

    /**
     * Getter bread
     * @return {Bread}
     */
	public get bread(): Bread {
		return this._bread;
	}

    /**
     * Getter protein
     * @return {number}
     */
	public get protein(): number {
		return this._protein;
	}

    /**
     * Getter salad
     * @return {Salad}
     */
	public get salad(): Salad {
		return this._salad;
	}

     /**
     * Getter sauce
     * @return {Sauce[]}
     */
	public get sauce(): Sauce[] {
		return this._sauce;
	}

    public addSauce(sauce : Sauce){
        this._sauce.push(sauce);
    }

    /**
     * Setter sandwichType
     * @param {SandwichType} value
     */
	public set sandwichType(value: SandwichType) {
		this._sandwichType = value;
	}

    /**
     * Setter bread
     * @param {Bread} value
     */
	public set bread(value: Bread) {
		this._bread = value;
	}

    /**
     * Setter protein
     * @param {number} value
     */
	public set protein(value: number) {
		this._protein = value;
	}

    /**
     * Setter salad
     * @param {Salad} value
     */
	public set salad(value: Salad) {
		this._salad = value;
	}

     /**
     * Setter sauce
     * @param {Sauce[]} value
     */
	public set sauce(value: Sauce[]) {
		this._sauce = value;
	}
}