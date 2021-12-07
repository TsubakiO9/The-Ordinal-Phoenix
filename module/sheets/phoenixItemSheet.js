export default class phoenixItemSheet extends ItemSheet {
    get template () {
        return `systems/phoenixItemSheet/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getdata(){
        const data = super.getData();

        data.config = CONFIG.PHOENIX;
        
        return data;
    }
}