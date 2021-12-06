import OrdinalPhoenixItemSheet from "./module/sheets/Ordinal-PhoenixItemSheet";

Hooks.once("init", function () {
    console.log("Ordinal-Phoenix | Initialising Ordinal Adventure");
    
    OrdinalPhoenixItemSheet.unregisterSheet("core", ItemSheet);
    OrdinalPhoenixItemSheet.registerSheet("Ordinal-Phoenix", OrdinalPhoenixItemSheet, { makeDefault: true });
});