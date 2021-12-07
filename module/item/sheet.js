export default class PHOENIXItemSheet extends ItemSheet {
    get template() {
        const path = "systems/phoenix/templates/items/";
        return `${path}/${this.item.data.type}.html`;
      }

    getdata(){
        const data = super.getData();

        data.config = CONFIG.PHOENIX;
        
        return data;
    }
}