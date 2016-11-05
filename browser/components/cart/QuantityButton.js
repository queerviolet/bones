import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DropDownMenuLabeledExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} label="1" />
        <MenuItem value={2} label="2" />
        <MenuItem value={3} label="3" />
        <MenuItem value={4} label="4" />
        <MenuItem value={5} label="5" />
      </DropDownMenu>
    );
  }
}