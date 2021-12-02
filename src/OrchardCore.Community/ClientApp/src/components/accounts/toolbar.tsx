import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { ContextualMenuItem, IContextualMenuItem } from 'office-ui-fabric-react';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';

const overflowProps: IButtonProps = { ariaLabel: 'More commands' };
export interface IDetailsListDocumentsExampleState {
  items: ICommandBarItemProps[];

}
export class Toolbar extends React.Component<{}, IDetailsListDocumentsExampleState> {
  constructor(props: {}) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const _items: ICommandBarItemProps[] = [
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
              // onClick: this.handleChange,
              ['data-automation-id']: 'newEmailButton' // optional
            },
            {
              key: 'calendarEvent',
              text: 'Calendar event',
              // onClick: this.handleChange,
              iconProps: { iconName: 'Calendar' }
            }
          ]
        }
      },
      {
        key: 'edit',
        text: 'Edit',
        iconProps: { iconName: 'Edit' },
        //onClick: this.handleChange
      }
    ];

    this.state = {
      items: _items
    };
  }


  handleChange(ev: React.KeyboardEvent<HTMLElement>, item?: IContextualMenuItem) {
    //this.props.onButtonClick(item.key);
    
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <CommandBar
          items={items}
          ariaLabel="Use left and right arrow keys to navigate between commands"
        />
      </div>
    );
  }

};

