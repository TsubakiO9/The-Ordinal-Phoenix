import ActorSheetPhoenix from "./base.js";

export default class ActorSheetPhoenixPNJ extends ActorSheetPhoenix {
    get template() {
        const path = "systems/phoenix/templates/items/";
        return `${path}/${this.item.data.type}.html`;
    }
}