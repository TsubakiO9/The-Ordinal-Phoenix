export default class ItemSheetPhoenix extends ItemSheet {
    get template() {
        const path = "systems/phoenix/templates/items/";
        return `${path}/${this.item.data.type}.html`;
      }
}