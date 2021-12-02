import React, { FunctionComponent } from 'react'; 
import { createComponent, IViewComponent } from '@uifabric/foundation';


export interface IXrmProps {
  optionSets: string[]
}

const XrmView: IViewComponent<IXrmProps> = props => {
  const { children, optionSets } = props;

  if (optionSets && optionSets.length > 0) {
    optionSets.forEach(function(entity) {
    fetch('https://next.json-generator.com/api/json/get/EJOeQAKHO')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        let w:any=window;
        w.xrm = w.xrm || {};
        w.xrm.metadata = w.xrm.metadata || {};
        w.xrm.metadata[entity] = data;
      })
    });
  }

  if (React.Children.count(children) < 1) {
    return null;
  }

  return <div>{children}</div>;
};

export const Metadata: React.FunctionComponent<{}> = createComponent(XrmView);

export default Metadata;