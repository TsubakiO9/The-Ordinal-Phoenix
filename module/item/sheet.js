export default class phoenixItemSheet extends ItemSheet {
    get template() {
        return `systems/phoenix/templates/items/${this.item.data.type}-.html`;
    }
}