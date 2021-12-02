import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
} from 'framework7-react';
import { PrimaryButton } from 'office-ui-fabric-react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';


const overflowProps = { ariaLabel: 'More commands' };

const _items = [
  {
    key: 'newItem',
    text: 'New',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Add' },
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          text: 'Email message',
          iconProps: { iconName: 'Mail' },
          ['data-automation-id']: 'newEmailButton' // optional
        },
        {
          key: 'calendarEvent',
          text: 'Calendar event',
          iconProps: { iconName: 'Calendar' }
        }
      ]
    }
  },
  {
    key: 'upload',
    text: 'Upload',
    iconProps: { iconName: 'Upload' },
    href: 'https://dev.office.com/fabric'
  },
  {
    key: 'share',
    text: 'Share',
    iconProps: { iconName: 'Share' },
    onClick: () => console.log('Share')
  },
  {
    key: 'download',
    text: 'Download',
    iconProps: { iconName: 'Download' },
    onClick: () => console.log('Download')
  }
];

const _overflowItems = [
  { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
  { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
  { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } }
];

const _farItems = [
  {
    key: 'tile',
    text: 'Grid view',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Grid view',
    iconOnly: true,
    iconProps: { iconName: 'Tiles' },
    onClick: () => console.log('Tiles')
  },
  {
    key: 'info',
    text: 'Info',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'Info',
    iconOnly: true,
    iconProps: { iconName: 'Info' },
    onClick: () => console.log('Info')
  }
];

export default () => (
  <Page>
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
      </NavLeft>
      <NavTitle>Newbit</NavTitle>
   
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right"></Link>
      </NavRight>
    </Navbar>
    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    <Block strong>
      <CommandBar
        items={_items}
        overflowItems={_overflowItems}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />  
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
      <PrimaryButton text="kk"/>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/about/" title="About"></ListItem>
      <ListItem link="/form/" title="Form"></ListItem>
      <ListItem link="/launch/" title="Launch"></ListItem>
    </List>
    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>
    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">Right Panel</Button>
        </Col>
      </Row>
    </Block>
    <List>
      <ListItem link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></ListItem>
      <ListItem link="/load-something-that-doesnt-exist/" title="Default Route (404)"></ListItem>
    </List>
  </Page>
);
