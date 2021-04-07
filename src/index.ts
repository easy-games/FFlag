import { t } from "@rbxts/t";
import SheetValues, { FFlagValueTypes, SheetManager } from "./SheetValues";

export class FFlagManager {
    public SheetManager: SheetManager;

    constructor(SpreadId: string) {
        this.SheetManager = new SheetValues(SpreadId);
    }

    GetFFlag<T extends FFlagValueTypes>(fflag: FFlag<T>) {
        const value = this.SheetManager.Values[fflag.Name];
        if (!fflag.Guard(value)) throw `Value "${value}" (${typeOf(value)}) for FFLag ${fflag.Name} is incorrect type`;

        if (!value) return fflag.DefaultValue;
        return value;
    }
}

export class FFlag<T extends FFlagValueTypes> {
    constructor(public Name: string, public Guard: t.check<T>, public DefaultValue: T) {}
}
