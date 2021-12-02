import React from 'react';
import {Page} from 'framework7-react';

import {Explorer} from './explorer'

// Initialize resources
//import 'framework7/css/framework7.bundle.css';
//import '../css/icons.css';
import '../css/app.css';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();

export default () => (
    <Page>
        <Explorer />
    </Page>
  );
  