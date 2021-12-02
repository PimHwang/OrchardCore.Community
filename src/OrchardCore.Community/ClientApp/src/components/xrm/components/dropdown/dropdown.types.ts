import { Dropdown, IDropdown, IDropdownProps, DropdownMenuItemType, IDropdownOption, IDropdownInternalProps, IDropdownState } from 'office-ui-fabric-react/lib/Dropdown';


export interface IXrmDropdownProps extends IDropdownInternalProps {
  entity: string;
  optionSet: string;
  attribute: string;
  data:any;
}

export interface IXrmDropdownState extends IDropdownState {
  options: IDropdownOption[],
  selectedKey: any
}
