import { PHOENIX } from "./module/config.js";
import { phoenixItem } from "./module/item/sheet.js";

// Configuración Inicial de los Valores
CONFIG.PHOENIX = PHOENIX;
CONFIG.time.roundTime = 10;

// Hooks
Hooks.once("init", function () {
    console.log("phoenix | Initialising The Ordinal Adventure System");
    
    CONFIG.PHOENIX = PHOENIX;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("phoenix", phoenixItem, { makeDefault: true });
});