import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
const marginTop = 20;
storiesOf('Button', module).add('size', () => (
  <>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>size</h1>
        <div style={{ margin: marginTop }}>
          <Button label="Small" size="small" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button label="Regular" size="regular" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button label="Large" size="large" />
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h1>disabled</h1>
        <div style={{ margin: marginTop }}>
          <Button label="Small" size="small" disabled />
        </div>
        <div style={{ margin: marginTop }}>
          <Button label="Regular" size="regular" disabled />
        </div>
        <div style={{ margin: marginTop }}>
          <Button label="Large" size="large" disabled />
        </div>
      </div>
    </div>
  </>
));
