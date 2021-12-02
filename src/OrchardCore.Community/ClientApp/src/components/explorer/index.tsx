import React, { Component } from 'react';
import { Stack, IStackItemStyles } from 'office-ui-fabric-react';
import {Top} from './Top';
import {Navigate} from './Left';

const topStyles: IStackItemStyles = {
  root: {
    height: 40,
    overflow: 'hidden'
  }
};

const navStyles: IStackItemStyles = {
  root: {
    width: 220,
    overflow: 'hidden'
  }
};

const detailStyles: IStackItemStyles = {
  root: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: 'calc(100vh - 44px)',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight:20
  }
};

export class Explorer extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (

        <Stack>
        <Stack.Item>
            <Top/>
        </Stack.Item>
        <Stack horizontal>
            <Stack.Item styles={navStyles}>
            <Navigate />
            </Stack.Item>
            <Stack.Item grow styles={detailStyles}>
                <div id='detail'/>
            </Stack.Item>
        </Stack>
        </Stack> 

    );
  }
}

