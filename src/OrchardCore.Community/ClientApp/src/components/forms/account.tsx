import React, { Component } from 'react';
import { render } from 'react-dom';
import {  DefaultButton,  PrimaryButton,  IStackTokens, } from "office-ui-fabric-react";
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { IAccount } from '../data/IAccount';
import { DatePicker, DayOfWeek, IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';

interface AppProps { }

interface AppState {
  name: string;
  data: any;
  }

const stackTokens: IStackTokens = { childrenGap: 15 };
const accountData = {};

export class Account extends Component<AppProps, AppState> {
  constructor(props:any) {
    super(props);
    this.state = {
      name: 'React',
      data: accountData
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  componentDidMount() {
    console.log("mount");
    this.getData();
  }

  getData() {
    fetch('https://next.json-generator.com/api/json/get/NkeswSIHO')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        let d = data[0];
        d.birthDate = new Date(d.birthDate);
        console.log(data[0]);
        this.setState({ data: data[0] });
      })
  };

_primaryClicked = (): void => {
    this.getData();
  };

  handleChange(event:any) {
    let data:any = this.state.data;

    data[event.target.name] = event.target.value;
    this.setState({data: data});

        console.log(data);
  }

  handleDateChange(date:any) {
    let data:any = this.state.data;

    data.birthDate = date;
    this.setState({data: data});
  }


  render() {
    let data:any = this.state.data;
    return (
      <Stack tokens={stackTokens}>
        <TextField label="Account" name="company" required value={this.state.data.company} onChange={this.handleChange}/>
        <TextField label="Email" name="email" value={data.email} onChange={this.handleChange}/>
        <TextField label="Address" name="address" value={data.address} onChange={this.handleChange}/>
        <TextField label="Phone" name="phone" 
        iconProps={{ iconName: 'Phone' }}
        value={data.phone} onChange={this.handleChange}/>

         </Stack>
        
      
    );
  }

}


