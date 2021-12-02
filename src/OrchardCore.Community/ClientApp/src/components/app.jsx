import React from 'react';

import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React, {App, View} from 'framework7-react';

import routes from './routes';

export default function () {

  Framework7.use(Framework7React);

  return (
    <App params={{
      id: 'io.framework7.newbit', 
      name: 'Newbit', 
      theme: 'auto', 
      routes,
    }}>
      <View  main />
    </App>
  );
  
};
