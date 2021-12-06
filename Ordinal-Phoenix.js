import OrdinalPhoenixItemSheet from "./module/sheets/Ordinal-PhoenixItemSheet";

Hooks.once("init", function () {
    console.log("Ordinal-Phoenix | Initialising Ordinal Adventure");
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("Ordinal-Phoenix", OrdinalPhoenixItemSheet, { makeDefault: true });
});