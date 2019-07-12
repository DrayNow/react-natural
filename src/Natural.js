import React, { createElement } from "react";

export default function Natural({ processor, onChange, children }) {
  return children(text => onChange(processor(text), text));
}
