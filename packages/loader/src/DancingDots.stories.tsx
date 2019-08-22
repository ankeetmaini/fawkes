import React from 'react';
import { storiesOf } from '@storybook/react';
import DancingDots from './DancingDots';

storiesOf('DancingDots', module).add('size', () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <DancingDots dotCount={3} />
    </div>
  </>
));
