import { PHOENIX } from "./module/config.js";
import { ItemSheet } from "./module/item/sheet.js";
import {} from "";

Hooks.once("init", function () {
    console.log("PHOENIX | Initialising Ordinal Adventure");
    
    CONFIG.PHOENIX = PHOENIX;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("PHOENIX", ItemSheet, { makeDefault: true });
});