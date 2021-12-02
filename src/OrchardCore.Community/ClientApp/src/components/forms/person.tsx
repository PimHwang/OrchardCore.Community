import React, { Component } from 'react';
import { render } from 'react-dom';
import {  DefaultButton,  PrimaryButton,  IStackTokens, } from "office-ui-fabric-react";
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { IContact } from '../data/IContact';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';
import { Dropdown, IDropdown, IDropdownProps, DropdownMenuItemType, IDropdownOption, IDropdownInternalProps, IDropdownState } from 'office-ui-fabric-react/lib/Dropdown';

import { Metadata } from '../xrm/metadata';
//import { XrmDropdown } from '../xrm/components/dropdown';

interface AppProps { }

interface AppState {
  name: string;
  data: any;
  selectedKey: any;
  }

const entities: string[] = ["contact", "account"]
const stackTokens: IStackTokens = { childrenGap: 15 };
const contactData: any = {};

const ido: IDropdownOption[] = [          
          { key: 1, text: 'Apple'},
          { key: 2, text: 'Banana' },
          { key: 3, text: 'Grape'}
        ];

export class Person extends Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: 'React',
      data: {},
      selectedKey: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    var self = this;
    this.getData().then( (data:any) => {
              this.setState({ 
          data: data,
          selectedKey: data.fruit.key
          });

        self.forceUpdate();
    });

  }

  componentDidMount() {
    //this.getData();
  }

  getData() {

    var getDate = new Promise<boolean>((resolve, reject) => {
  

      fetch('https://next.json-generator.com/api/json/get/4J94VS8r_')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject('Something went wrong ...');
        }
      })
      .then(data => {
        let index = Math.floor(Math.random() * Math.floor(5));
        const d = data[index];

          resolve(d);
      });


    });
  

  return getDate;

    
  };

  private onXrmControlChange = (event: React.FormEvent<Element>, option?: IDropdownOption, index?: number) :void => {
    // update data
     this.setState({});
  }

  private onChange = (event: any, option?: IDropdownOption, index?: number) :void => {
   
    if (option === null) return;
    
     let d = this.state.data;
     if (event && event.target && event.target.id) {
       d[event.target.id] = option;
     }
     
     this.setState(
       {
         data: d
         }
     );
  }

_primaryClicked = (): void => {
    var self = this;
    this.getData().then( (data:any) => {
              this.setState({ 
          data: data,
          selectedKey: data.fruit.key
          });

        self.forceUpdate();
    });
  };

_checkData = (): void => {
     let d = this.state.data;
     console.log(d);
  };
  handleChange(event:any) {
    let data = this.state.data;

    data[event.target.id] = event.target.value;
    this.setState({data: data});
  }

  
  handleDateChange = (date: Date | null | undefined): void => {
    console.log(date);
    let data = this.state.data;

    data.birthDate = date;
    this.setState({data: data});
  };

  toDate =(dateStr: string | null | undefined): Date | null => {
    if (!dateStr || isNaN(Date.parse(dateStr))) return null;

    return new Date(dateStr);
  }

   render() {
    return (
      <div>
      <Metadata />
      <Stack  tokens={stackTokens} grow>
      <Stack horizontal tokens={stackTokens}>
        <Stack.Item grow>
        <TextField label="Firstname" name="firstName" id="firstName" required value={this.state.data.firstName} onChange={this.handleChange}/>
        </Stack.Item>
        <Stack.Item grow>
        <TextField label="Lastname" name="lastName" id="lastName" value={this.state.data.lastName} onChange={this.handleChange}/>
        </Stack.Item>
        <Stack.Item grow>
        <DatePicker label="Birthdate" allowTextInput={true} 
            
            onSelectDate={this.handleDateChange}/>
        </Stack.Item>
        
      </Stack>
        <Stack  horizontal tokens={stackTokens}>
        <Stack.Item grow>
        </Stack.Item>
        <Stack.Item grow>

        </Stack.Item>
        </Stack>
        

        

      <Stack horizontal tokens={stackTokens} horizontalAlign="end">
      <Stack.Item>
         <PrimaryButton
          text="Fetch Data"
          onClick={this._primaryClicked}/>
      </Stack.Item>
      <Stack.Item>

      </Stack.Item>
      </Stack>
<Stack>
</Stack>
<pre>{JSON.stringify(this.state.data, null, 2) }</pre>
         </Stack>

</div>         
    );
  }
}


