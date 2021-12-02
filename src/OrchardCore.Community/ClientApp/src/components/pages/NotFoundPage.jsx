import React from 'react';
import { Page, Navbar, Block } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Not found" backLink="Back" />
    <Block strong>
      <p>Sorry</p>
      <p>内容没找到.</p>
    </Block>
  </Page>
);
