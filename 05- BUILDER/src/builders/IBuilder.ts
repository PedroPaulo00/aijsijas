import Bread from "../ingredients/Bread";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";
import Sandwich from "../products/Sandwich";


export default interface IBuilder{
    reset() : void;
    getSandwich() : Sandwich;
    addSauce(sauce: Sauce);
    setSandwichType(value: SandwichType);
    setSalad(salad: Salad);
    setProtein(protein : number);
    setBread(bread : Bread);
}