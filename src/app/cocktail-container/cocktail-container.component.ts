import { Component, OnInit } from "@angular/core";
import { Cocktail } from "../shared/interfaces/cocktail.interface";

@Component({
  selector: "app-cocktail-container",
  templateUrl: "./cocktail-container.component.html",
  styleUrls: ["./cocktail-container.component.scss"]
})
export class CocktailContainerComponent implements OnInit {
  public selectedCocktail: Cocktail;
  public cocktails: Cocktail[];

  constructor() {}

  ngOnInit() {
    this.selectedCocktail = this.cocktails[0];
  }

  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
