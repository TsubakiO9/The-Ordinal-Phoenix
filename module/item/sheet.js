export default class ItemSheet extends ItemSheet {
    get template () {
        return `systems/ItemSheet/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getdata(){
        const data = super.getData();

        data.config = CONFIG.PHOENIX;
        
        return data;
    }
}