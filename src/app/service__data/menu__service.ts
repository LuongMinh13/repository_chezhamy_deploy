import { Injectable } from "@angular/core";
import { IMenu } from "../menu/menu__data";

@Injectable({
    providedIn: 'root'
})

export class MenuServices {
    getMenu(): IMenu[] {
        return [
            {
                "ImageMenu": "../../assets/img/menu/PhoBo.png",
                "MenuTitle": "Pho Chez Ha My",
                "MenuSubtitle": "Soupe composée d'un bouillon clair à base d'os à moelle et de viande de boeuf, des lamelles de boeuf, d'oignon, des épices, du nuoc mam et de pâtes plates de riz accompagnée d'herbes aromatiques."
            },
            {
                "ImageMenu": "../../assets/img/menu/BoBunTom.png",
                "MenuTitle": "Bo Bun Crevette",
                "MenuSubtitle": "Composé de vermicelles de riz accompagnés de germes de soja, de crevette sauté aux oignons, de nems, de concombre en julienne, cacahuète. Accompagnée le menthe et coriandre"
            },
            {
                "ImageMenu": "../../assets/img/menu/BoLaLot.png",
                "MenuTitle": "Boeuf La Lot",
                "MenuSubtitle": "Les Bo la lot sont des rouleaux vietnamiens de bœuf à la citronnelle aux vermicelles de riz. La viande de bœuf est marinée dans du jus d’orange et roulé dans des feuilles de bétel et accompagnée d'herbes aromatiques."
            }
        ]
    }
}