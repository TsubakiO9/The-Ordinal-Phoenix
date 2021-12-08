// Import Modules:
import {PHOENIX} from "./module/config.js";


// Import Documents:


// Import Applications:
import ActorSheetPhoenixPNJ from "./module/actor/sheets/.js";
import ActorSheetPhoenixNPC from "./module/actor/sheets/.js";
import ActorSheetPhoenixVehicle from "./module/actor/sheets/v.js";
import ItemSheetPhoenix from "./module/item/sheet.js";


/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", function() {
    console.log(`DnD5e | Initializing the DnD5e Game System\n${DND5E.ASCII}`);

// Registro de plantillas:
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("phoenix", ActorSheetPhoenixPNJ, {
        types: ["PNJ"],
        makeDefault: true,
        label: "PHOENIX.SheetClassPNJ"
    });

    Actors.registerSheet("phoenix", ActorSheetPhoenixNPC, {
        types: ["npc"],
        makeDefault: true,
        label: "DND5E.SheetClassNPC"
    });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("dnd5e", ItemSheet5e, {
        makeDefault: true,
        label: "DND5E.SheetClassItem"
    });


// Preload Handlebars Templates
    return preloadHandlebarsTemplates();
});


 // Record Configuration Values:
 CONFIG.DND5E = DND5E;
 CONFIG.Actor.documentClass = ActorPhoenix;
 CONFIG.Item.documentClass = ItemPhoenix;
 CONFIG.Token.documentClass = TokenDocument5e;
 CONFIG.time.roundTime = 10;