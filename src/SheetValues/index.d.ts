declare type FFlagValueTypes = number | boolean | string | Vector3 | Vector2 | UDim2 | UDim;
declare type FFlagValues = { [key: string]: FFlagValueTypes };

declare type LastSource = "Google API" | "Datastore Override" | "Datastore" | "MsgService Subscription";

declare interface SheetManager {
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
    Updated: RBXScriptSignal<(newValues: FFlagValues) => void>;

    /**
     * Forces gets the latest values from the sheet
     *
     * *(This is called automatically and is only exposed for critical cases)*
     */
    UpdateValues(): void;

    /** Cleans up the SheetManager */
    Destroy(): void;
}

declare interface SheetManagerConstructor {
    new (SpreadId: string): SheetManager;
}

export = SheetManagerConstructor;
