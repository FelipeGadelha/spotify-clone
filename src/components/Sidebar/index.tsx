import React, { useContext, useState } from 'react';
import ItemMenu from './MenuItem';
import * as FaIcons  from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';

import { Container, Content, Divider, Icon, TopSection } from './styles';
import { SidebarContext } from '../../contexts/SidebarContext';

const Sidebar: React.FC = () => {

  const {isActive, setIsActive} = useContext(SidebarContext);
  return (
    <Container active={isActive}>
      <Content>
        <TopSection>
          <h2>Vet Hero</h2>
          <Icon active={isActive} onClick={()=> setIsActive(!isActive)}>
            {(isActive) ? <FaIcons.FaChevronCircleLeft/> : <FaIcons.FaChevronCircleRight/>}
          </Icon>
        </TopSection>
        <ItemMenu path="/" icon={<RiIcons.RiDashboardLine />} title="Home"/>
        <ItemMenu path="/dash" icon={<RiIcons.RiDashboardLine />} title="Dashboard"/>
        <ItemMenu path="/registers" icon={<RiIcons.RiDashboardLine />} title="Registros"/>
        <Divider />
        <ItemMenu path="/reports" icon={<RiIcons.RiDashboardLine />} title="Relatórios"/>
        <ItemMenu path="/dash" icon={<RiIcons.RiDashboardLine />} title="Dashboard"/>
      </Content>
    </Container>
  );
}

export default Sidebar;