import styled from "styled-components";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { PureComponent, Component } from "react";

import * as muiColors from "@material-ui/core/colors";

import React from "react";

const mColors = Object.keys(muiColors).filter(color => color !== "common");

export class ColorSelector extends PureComponent {
  render() {
    const {
      handleChange,
      selectedValue,
      label = "Event Color",
      name = "color-picker",
      colors = mColors
    } = this.props;
    return (
      <ColorFieldset>
        <FormLabel required component="legend">
          {label}
        </FormLabel>
        <RadioGroup
          row
          name={name}
          onChange={handleChange}
          value={selectedValue}
        >
          {colors.map((color, i) => (
            <ColorRadio key={i} value={color} />
          ))}
        </RadioGroup>
      </ColorFieldset>
    );
  }
}
const ColorRadio = styled(Radio)`
  color: ${({ value }) => muiColors[value]["400"]} !important;
`;
const ColorFieldset = styled(FormControl).attrs({
  component: "fieldset",
  required: true,
  fullWidth: true,
  margin: "normal"
})`
  background: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.text.disabled} !important;
  border-radius: 5px;
`;