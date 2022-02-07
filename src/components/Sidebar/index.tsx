import React, { useState } from 'react';
import ItemMenu from './MenuItem';
import * as FaIcons  from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';

import { Container, Content, Divider, Icon, TopSection } from './styles';

const Sidebar: React.FC = () => {

  const [active, setActive] = useState<Boolean>(true);
  return (
    <Container active={active}>
      <Content>
        <TopSection>
          <h2>Vet Hero</h2>
          <Icon active={active} onClick={()=> setActive(!active)}>
            {(active) ? <FaIcons.FaChevronCircleLeft/> : <FaIcons.FaChevronCircleRight/>}
          </Icon>
        </TopSection>
        <ItemMenu path="/" icon={<RiIcons.RiDashboardLine />} title="Home"/>
        <ItemMenu path="/dash" icon={<RiIcons.RiDashboardLine />} title="Dashboard"/>
        <ItemMenu path="/dash" icon={<RiIcons.RiDashboardLine />} title="Dashboard"/>
        <Divider />
        <ItemMenu path="/dash" icon={<RiIcons.RiDashboardLine />} title="Dashboard"/>
        <ItemMenu path="/dash" icon={<RiIcons.RiDashboardLine />} title="Dashboard"/>
      </Content>
    </Container>
  );
}

export default Sidebar;