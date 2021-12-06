import OrdinalPhoenixItemSheet from "./module/sheets/Ordinal-PhoenixItemSheet.js";

Hooks.once("init", function () {
    console.log("OrdinalPhoenix | Initialising Ordinal Adventure");
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("OrdinalPhoenix", OrdinalPhoenixItemSheet, { makeDefault: true });
});