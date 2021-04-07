# SheetValues

This is a Typescript wrapper for [SheetValues](https://devforum.community/t/sheetvalues-using-google-sheets-for-live-updating-values/364), by BoatBomber. The goal of this package is to provide a typesafe way of accessing FFlag values.

## Example
`fflag-provider.ts`
```typescript
const SPREAD_ID = "Spreadsheet ID";
const FFlagProvider = new FFlagManager(SPREAD_ID);

export = FFlagProvider;
```

`fflag-definitions.ts`
```typescript
export const FFLAG_TEST = new FFlag("SomeTestFFlag", t.boolean, false);
```

`test.server.ts`
```typescript
while (wait(1)) {
    print(FFlagProvider.GetFFlag(FFLAG_TEST));
}
```