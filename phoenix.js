// Import Modules:
import {PHOENIX} from "./module/config.js";


// Import Documents:
import ActorPhoenix from "./module/actor/entity.js";
import ItemPhoenix from "./module/item/entity.js";

// Import Applications:
import ActorSheetPhoenixPNJ from "./module/actor/sheets/PNJ.js";
import ActorSheetPhoenixNPC from "./module/actor/sheets/NPC.js";
import ItemSheetPhoenix from "./module/item/sheet.js";


/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", function() {
    console.log(`Phoenix | Initializing Ordinal Adventure System\n${PHOENIX.ASCII}`);

    game.phoenix = {
        applications: {
          ActorSheetPhoenixPNJ,
          ActorSheetPhoenixNPC,
          ItemSheetPhoenix,
        },
    }

// Record Configuration Values:
    CONFIG.PHOENIX = PHOENIX;
    CONFIG.Actor.documentClass = ActorPhoenix;
    CONFIG.Item.documentClass = ItemPhoenix;
    CONFIG.time.roundTime = 10;

// Register System Settings
    registerSystemSettings();

// Registro de plantillas:
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("phoenix", ActorSheetPhoenixPNJ, {
        types: ["PNJ"],
        makeDefault: true,
        label: "PHOENIX.SheetClassPNJ"
    });

    Actors.registerSheet("phoenix", ActorSheetPhoenixNPC, {
        types: ["NPC"],
        makeDefault: true,
        label: "PHOENIX.SheetClassNPC"
    });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("phoenix", ItemSheetPhoenix, {
        makeDefault: true,
    });

   // Iniciativa:
   CONFIG.Combat.initiative.formula = "1d20 + @attributes.init.mod + @attributes.init.prof + @attributes.init.bonus + @abilities.dex.bonuses.check + @bonuses.abilities.check";
   Combatant.prototype._getInitiativeFormula = _getInitiativeFormula;
});

