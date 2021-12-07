import { PHOENIX } from "./module/config.js";
import { PHOENIXItemSheet } from "./module/phoenixItemSheet.js";
import {} from "";

Hooks.once("init", function () {
    console.log("phoenix | Initialising Ordinal Adventure");
    
    CONFIG.PHOENIX = PHOENIX;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("PHOENIX", phoenixItemSheet, { makeDefault: true });
});