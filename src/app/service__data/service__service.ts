import { Injectable } from "@angular/core";
import { IService } from "../services/services__data";

@Injectable({
    providedIn: 'root'
})

export class ServicesService{
    getServices(): IService[]{
        return[
            {
                "ServicesIcon" : "../../assets/icon/cooking (1).png",
                "ServicesTitle": "Excellent cuisine",
                "ServicesSubtitle" : "Pour votre bonheur nous avons sélectionné des meilleurs plats, cuisiner par le meilleur soin de notre chef."
            },
            {
                "ServicesIcon" : "../../assets/icon/meat (1).png",
                "ServicesTitle" :"Meilleur ingrédient",
                "ServicesSubtitle" : "Les plats cuisinés entièrement sur place à partir de produits bruts. Les produits ont sélectionné par nos soins."
            },
            {
                "ServicesIcon" : "../../assets/icon/package.png",
                "ServicesTitle" : "Livraison à votre domicile",
                "ServicesSubtitle" : "Retrouvez-vous sur l'application Deliveroo, ou simplement de nous appeler pour faites livrer votre plats à votre domicile",
            }
        ]
    }
}