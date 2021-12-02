import * as React from 'react';
import { render } from "react-dom";
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { PrimaryButton, DefaultButton} from 'office-ui-fabric-react/lib/Button';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { ComboBox, IComboBoxOption, SelectableOptionMenuItemType } from 'office-ui-fabric-react/lib/ComboBox';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { ScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';


export interface IDialogBlockingExampleState {
  hideDialog: boolean;
  isDraggable: boolean;
  data: { };
  
}

const INITIAL_OPTIONS: IComboBoxOption[] = [
  { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F', disabled: true },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' }
];

const stackTokens: IStackTokens = { childrenGap: 10 };
 

export class EditAccountForm extends React.Component<{}, IDialogBlockingExampleState> {

  constructor(props: {}) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.state  = {
      hideDialog: true,
      isDraggable: false,
      data: { }
    };
  }

_parseDateFromString = (dateStr: string): Date | null => {
    
    return new Date(Date.parse(dateStr))
  };

  handleDateChange = (date: Date | null | undefined): void => {
    
     let data :any = this.state.data;

    data.date = date;
    this.setState({data: data});
    
  };
  toDate =(dateStr: string | null | undefined |any): Date | null => {
    if (!dateStr || isNaN(Date.parse(dateStr))) return null;

    return new Date(dateStr);
  }

handleChange(event:any) {
    let data:any = this.state.data;

    data[event.target.name] = event.target.value;
    this.setState({data: data});

        console.log(data);
  }

 

  private renderDetail() {
    let data:any = this.state.data;
    console.log("tab1");
  return (
    <div>
      <Stack horizontal tokens={stackTokens}>
      <Stack.Item grow>
                      <TextField label="Name" name="id" required value={data.id} onChange={this.handleChange} />
                      <TextField label="Company" name="company" required value={data.company} onChange={this.handleChange} />
                      <TextField label="Email" name="email" required value={data.email} onChange={this.handleChange} />
                      <TextField label="Phone" name="phone" required value={data.phone} onChange={this.handleChange} />


      </Stack.Item>
      <Stack.Item grow>
                  <DatePicker
                      label="Start date"
                      isRequired={false}
                      allowTextInput={true}
                      onSelectDate={this.handleDateChange}
                       
                    />

                      <ComboBox 
                        label="Sample subject lines you could add instead"
                        placeholder="Select or type an option"
                        autoComplete="on"
                        options={INITIAL_OPTIONS}
                      />
                              <SpinButton
                        defaultValue="0"
                        label={'Number of subjects to add:'}
                        min={0}
                        max={100}
                        step={1}
                        iconProps={{ iconName: 'IncreaseIndentLegacy' }}
                        // tslint:disable:jsx-no-lambda
                        onFocus={() => console.log('onFocus called')}
                        onBlur={() => console.log('onBlur called')}
                        incrementButtonAriaLabel={'Increase value by 1'}
                        decrementButtonAriaLabel={'Decrease value by 1'}
                      />
      </Stack.Item>
      </Stack>
      </div>
  )
}

 

  private _dragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu
  };

  public render() {
    let data:any = this.state.data;
    const { hideDialog, isDraggable } = this.state;
    return (
      <div>
        
        <Dialog
          hidden={hideDialog}
          onDismiss={this._closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
            title: 'Account',
            subText: ''
          }}
          modalProps={{
            isBlocking: true,
                        topOffsetFixed: true,
            styles: { main: { 
              selectors: {
                ['@media (min-width: 480px)']: {
                  width: '600px',
                  
                  minWidth: '600px',
                  maxWidth: '800px'
                }
              }} 
              },
            dragOptions: isDraggable ? this._dragOptions : undefined
          }}
        >

<Pivot aria-label="Basic Pivot Example">
          <PivotItem   headerText="Detail">
            {this.renderDetail()}
              
          </PivotItem>
          <PivotItem headerText="Views">
            
            <DatePicker
                      label="Start date"
                      isRequired={false}
                      allowTextInput={true}
                      onSelectDate={this.handleDateChange}
                    />

          </PivotItem>
            <PivotItem headerText="Filters">
              <Label >Pivot #3</Label>
            </PivotItem>
          </Pivot>
        <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="OK" />
            <DefaultButton onClick={this._closeDialog} text="Close" />
          </DialogFooter>
        </Dialog>
      </div>
    );
  }
  

  

  private _showDialog = (data: object): void => {
        this.setState({ hideDialog: false, data: data });
  };

  private _closeDialog = (): void => {
    this.setState({ hideDialog: true });
  };

  private _toggleDraggable = (): void => {
    this.setState({ isDraggable: !this.state.isDraggable });
  };
}
