export default class ItemPhoenix extends ItemSheet {
    get template () {
        return `systems/phoenix/templates/items/${this.item.data.type}.html`;
    }

    getdata(){
        const data = super.getData();

        data.config = CONFIG.PHOENIX;
        
        return data;
    }
}