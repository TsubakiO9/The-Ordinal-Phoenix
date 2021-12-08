import ActorSheetPhoenix from "./base.js";

export default class ActorSheetPhoenixNPC extends ActorSheetPhoenix {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
          classes: ["phoenix", "sheet", "actor", "NPC"],
          width: 720,
          height: 680,
        });
      }
}