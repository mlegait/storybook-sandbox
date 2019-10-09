import { configure, addParameters } from "@storybook/react";

addParameters({ docs: { inlineStories: false } });

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module);
