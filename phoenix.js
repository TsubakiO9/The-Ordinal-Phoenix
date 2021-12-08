// Import Modules
import {PHOENIX} from "./module/config.js";


// Import Documents


// Import Applications
import ActorSheetPhoenixPNJ from "./module/actor/sheets/.js";
import ActorSheetPhoenixNPC from "./module/actor/sheets/.js";
import ActorSheetPhoenixVehicle from "./module/actor/sheets/v.js";
import ItemSheetPhoenix from "./module/item/sheet.js";

// Hooks
Hooks.once("init", function () {
    console.log("phoenix | Initialising The Ordinal Adventure System");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("phoenix", ItemSheetPhoenix, { makeDefault: true });
});
