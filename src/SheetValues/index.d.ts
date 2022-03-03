export type FFlagValueTypes = number | boolean | string | Vector3 | Vector2 | UDim2 | UDim | Color3 | BrickColor | RGB | CFrame | Enum | Rect;
declare type FFlagValues = { [key: string]: FFlagValueTypes };

declare type LastSource = "Google API" | "Datastore Override" | "Datastore" | "MsgService Subscription";

export interface SheetManager {
    Values: FFlagValues;

    /** Unix timestamp of the last time SheetManager.Values was updated */
    LastUpdated: number;

    /**
     * Name of the service used to retrieve the current SheetManager.Values
     * (Google API, Datastore, Datastore Override, MsgService Subscription)
     *
     * *(Used for debugging)*
     */
    LastSource: LastSource;

    /** Fires when SheetManager.Values is updated */
    Changed: RBXScriptSignal<(newValues: FFlagValues) => void>;

    /**
     * Forces gets the latest values from the sheet
     *
     * *(This is called automatically and is only exposed for critical cases)*
     */
    UpdateValues(): void;

    /**  Returns the Value or DefaultValue if the Value doesn't exist */
    GetValue(valueName: string, defaultValue: any): FFlagValues

    GetValueChangedSignal(valueName: string): RBXScriptSignal<(newValue: FFlagValues, oldValue: FFlagValues) => void>;

    /** Cleans up the SheetManager */
    Destroy(): void;
}

declare interface SheetManagerConstructor {
    new (SpreadId: string): SheetManager;
}

declare const SheetValues: SheetManagerConstructor;
export default SheetValues;
