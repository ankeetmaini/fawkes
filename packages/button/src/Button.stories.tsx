import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
const marginTop = 20;
storiesOf('Button', module).add('size', () => (
  <>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>normal</h1>
        <div style={{ margin: marginTop }}>
          <Button label="Button" size="s" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button label="Button" size="r" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button label="Button" size="l" />
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h1>disabled</h1>
        <div style={{ margin: marginTop }}>
          <Button disabled={true} label="Button" size="s" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button disabled={true} label="Button" size="r" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button disabled={true} label="Button" size="l" />
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h1>loading</h1>
        <div style={{ margin: marginTop }}>
          <Button loading={true} label="Button" size="s" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button loading={true} label="Button" size="r" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button loading={true} label="Button" size="l" />
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h1>disabled loading</h1>
        <div style={{ margin: marginTop }}>
          <Button disabled={true} loading={true} label="Button" size="s" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button disabled={true} loading={true} label="Button" size="r" />
        </div>
        <div style={{ margin: marginTop }}>
          <Button disabled={true} loading={true} label="Button" size="l" />
        </div>
      </div>
    </div>
  </>
));
