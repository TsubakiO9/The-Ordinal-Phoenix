import { PHOENIX } from "./module/config.js";
import { PHOENIXItemSheet } from "./module/item/sheet.js";

// Hooks
Hooks.once("init", function () {
    console.log("phoenix | Initialising The Ordinal Adventure System");

    CONFIG.PHOENIX = PHOENIX;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("phoenix", PHOENIXItemSheet, { makeDefault: true });
});
