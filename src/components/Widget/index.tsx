import React, { ReactElement } from 'react';

import { Container, Title, Left, Right, Counter } from './styles';

interface IWidgetProps {
  path?: string;
  title?: string;
  amount?: String;
  isMoney?: Boolean;
  diff?: Number;
  icon?: ReactElement<any, any>;
}

const Widget: React.FC<IWidgetProps> = ({path, title, amount, isMoney, diff, icon}) => {
  return (
    <Container>
      <Left>
        <Title>{title}</Title>
        <Counter>
          {isMoney && "$"} {amount}
        </Counter>
        <span className="link">Link</span>
      </Left>
      <Right>
        <div className="percentage positive">
          {icon}
          {diff} %
        </div>
        {icon}
      </Right>
    </Container>
  );
}

export default Widget;