import { PHOENIX } from "./module/config.js";
import phoenixItemSheet from "./module/item/sheet.js";

// Hooks
Hooks.once("init", function () {
    console.log("phoenix | Initialising The Ordinal Adventure System");

    Items.unregisterSheet("core", phoenixItemSheet);
    Items.registerSheet("phoenix", phoenixItemSheet, { makeDefault: true });
});
