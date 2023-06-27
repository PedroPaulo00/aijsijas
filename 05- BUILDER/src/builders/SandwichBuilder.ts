import Bread from "../ingredients/Bread";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";
import Sandwich from "../products/Sandwich";
import IBuilder from "./IBuilder";

export default class SandwichBuilder implements IBuilder{
    getSandwich(): Sandwich {
        const result : Sandwich = this.sandwich;
        this.reset();
        return result;;
    }
    private sandwich = new Sandwich();
    
    reset(): void{
        this.sandwich = new Sandwich();
    }
    addSauce(sauce: Sauce){
        this.sandwich.addSauce(sauce);
    }
    setSandwichType(value: SandwichType){
        this.sandwich.sandwichType = value;
    }
    setProtein(protein: number){
        this.sandwich.protein = protein;
    }
    setSalad(value: Salad){
        this.sandwich.salad = value;
    }
    setBread(bread: Bread){
        this.sandwich.bread = bread;
    }
}