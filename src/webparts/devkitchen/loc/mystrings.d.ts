declare interface IDevkitchenStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'devkitchenStrings' {
  const strings: IDevkitchenStrings;
  export = strings;
}
