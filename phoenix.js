import OrdinalPhoenixItemSheet from "./module/sheets/phoenixItemSheet.js";

Hooks.once("init", function () {
    console.log("phoenix | Initialising Ordinal Adventure");
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("phoenix", phoenixItemSheet, { makeDefault: true });
});