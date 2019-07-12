import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Natural from "./Natural";
import { duration } from "./processors";

const story = storiesOf("Natural", module);

story.add("process duration with <input />", () => (
  <Natural processor={duration} onChange={action("natural on-change")}>
    {handleText => {
      return <input onChange={event => handleText(event.target.value)} />;
    }}
  </Natural>
));
