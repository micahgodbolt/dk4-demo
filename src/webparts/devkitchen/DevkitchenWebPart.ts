import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';


import * as strings from 'devkitchenStrings';
import Devkitchen from './components/Devkitchen';
import { IDevkitchenProps } from './components/IDevkitchenProps';
import { IDevkitchenWebPartProps } from './IDevkitchenWebPartProps';


export default class DevkitchenWebPart extends BaseClientSideWebPart<IDevkitchenWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDevkitchenProps > = React.createElement(
      Devkitchen,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
