import { PHOENIX } from "./module/config.js";
import { ItemSheet } from "./";
import {} from "";

Hooks.once("init", function () {
    console.log("phoenix | Initialising Ordinal Adventure");
    
    CONFIG.PHOENIX = PHOENIX;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("PHOENIX", ItemSheet, { makeDefault: true });
});