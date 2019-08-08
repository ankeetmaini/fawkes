import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';
const marginTop = 20;
storiesOf('Button', module).add('size', () => (
  <>
    <div style={{ margin: marginTop }}>
      <Button label="Button" size="s" />
    </div>
    <div style={{ margin: marginTop }}>
      <Button label="Button" size="r" />
    </div>
    <div style={{ margin: marginTop }}>
      <Button label="Button" size="l" />
    </div>
    <hr />
    <div style={{ margin: marginTop }}>
      <Button disabled={true} label="Button" size="s" />
    </div>
    <div style={{ margin: marginTop }}>
      <Button disabled={true} label="Button" size="r" />
    </div>
    <div style={{ margin: marginTop }}>
      <Button disabled={true} label="Button" size="l" />
    </div>
  </>
));
