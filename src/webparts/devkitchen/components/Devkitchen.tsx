import * as React from 'react';
import { IDevkitchenProps } from './IDevkitchenProps';
import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity,
    IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';

export default class Devkitchen extends React.Component<IDevkitchenProps, void> {
  public render(): React.ReactElement<IDevkitchenProps> {
      
    const previewProps: IDocumentCardPreviewProps = {
        previewImages: [
        {
            previewImageSrc: String(require('document-preview.png')),
            iconSrc: String(require('icon-ppt.png')),
            width: 318,
            height: 196,
            accentColor: '#ce4b1f'
        }
        ],
    };

    return (
        <DocumentCard onClickHref='http://bing.com'>
          <DocumentCardPreview { ...previewProps } />
          <DocumentCardTitle title={ this.props.description } />
          <DocumentCardActivity
              activity='Created Feb 23, 2017'
              people={
                [
                    { name: 'Kat Larrson', profileImageSrc: String(require('avatar-kat.png')) }
                ]
              }
              />
        </DocumentCard>
        
    );
  }
}
