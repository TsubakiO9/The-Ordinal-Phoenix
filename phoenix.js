import { PHOENIX } from "./module/config.js";
import { phoenixItemSheet } from "./module/sheets/phoenixItemSheet.js";
import {} from "";

Hooks.once("init", function () {
    console.log("phoenix | Initialising Ordinal Adventure");
    
    CONFIG.PHOENIX = PHOENIX;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("phoenix", phoenixItemSheet, { makeDefault: true });
});