import IBuilder from "../builders/IBuilder";
import Bread from "../ingredients/Bread";
import Salad from "../ingredients/Salad";
import SandwichType from "../ingredients/SandwichType";
import Sauce from "../ingredients/Sauce";


export default class Director{
    constructor(private builder : IBuilder){}

    construcXSalada(){
        this.builder.setSandwichType(SandwichType.XSALADA);
        this.builder.setProtein(2);
        this.builder.setSalad(Salad.LETTUCE_TOMATO);
        this.builder.setBread(Bread.WATER_BREAD);
        this.builder.addSauce(new Sauce("Ketchup"));
        this.builder.addSauce(new Sauce("Mostard"));
        this.builder.addSauce(new Sauce("Rose"));
    }

    constructHotDog(){
        this.builder.setSandwichType(SandwichType.HOTDOG);
        this.builder.setProtein(3);
        this.builder.setSalad(Salad.CORN_PEA);
        this.builder.setBread(Bread.HOTDOG_BREAD);
        this.builder.addSauce(new Sauce("Ketchup"));
        this.builder.addSauce(new Sauce("Mostard"));
        this.builder.addSauce(new Sauce("Mayonnaise"));
    }
}