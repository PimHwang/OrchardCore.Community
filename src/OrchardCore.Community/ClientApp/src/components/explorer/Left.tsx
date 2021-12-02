import React, { Component, useState, Suspense, lazy } from 'react';
import { Nav, INavLink } from 'office-ui-fabric-react/lib/Nav';
import { render } from 'react-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Account } from '../forms/account';
import { Person } from '../forms/person';
//import { AccountList } from './accounts/list';
//import { ShimmerApplicationExample } from './accounts/detailList';
import { List } from '../accounts/list';

export class Navigate extends Component {
    static displayName = Navigate.name;

    constructor(props:any) {
        super(props);

        this.state = {
            selectedKey: "key3"
        };

        this.onLinkClick = this.onLinkClick.bind(this);
        
    }

    onLinkClick(ev: any, item?: any) {
      
     let component = null;
    switch(item.key) {
      case "person":
        component = <Person />;
        break;
      case "account":
        component = <Account />;
        break;
      case "accountList":
        component = <List />;
        break;
      default:
        component = <Person />;
    }
      
      render(
        <Suspense fallback={<div>Loading...</div>}>
              {component}
            </Suspense>
        , document.getElementById('detail'));

    }

    render() {
        return (
            <Nav
            onLinkClick={this.onLinkClick}
                selectedKey="{this.state.selectedKey}"
                selectedAriaLabel="Selected"
                ariaLabel="Nav basic example"
                styles={{
                    root: {
                        backgroundColor: 'rgb(239, 239, 239)',
                        overflowY: 'hidden',
                        position: 'relative'
                    }
                }}
                groups={[
                    {
                        links: [
                            {
                                name: 'Dashboard',
                                url: '',
                                expandAriaLabel: 'Expand Home section',
                                collapseAriaLabel: 'Collapse Home section',
                                links: [
                                    {
                                        name: 'Person',
                                        icon: 'Contact',
                                        url: '',
                                        key: 'person',
                                        target: '_blank'
                                    },
                                    {
                                        name: 'Account',
                                        icon: 'AccountManagement',
                                        url: '',
                                        key: 'account',
                                        target: '_blank'
                                    }
                                    
                                ],
                                isExpanded: true
                            },
                           {
                                        name: 'Accounts',
                                        icon: 'AccountManagement',
                                        url: '',
                                        key: 'accountList',
                                        target: '_blank'
                                    }
                            
                        ]
                    }
                ]}
                />
        );
    }
}
