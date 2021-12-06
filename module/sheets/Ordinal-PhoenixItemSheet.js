export default class OrdinalPhoenixItemSheet extends ItemSheet {
    get template () {
        return `systems/Ordinal-PhoenixItemSheet/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}