import React, { ReactElement, useContext } from 'react';
import { SidebarContext } from '../../../contexts/SidebarContext';
import { Container, IconMenu, Icon, Title } from './styles';

interface ItemMenuProps {
  title: string;
  icon: ReactElement<any, any>; //JSX.Element
  path: string;
};

const ItemMenu: React.FC<ItemMenuProps> = ({icon, title, path}) => {

  const { isActive } = useContext(SidebarContext);
  return(
    <Container active={ isActive } to={path}>
        <IconMenu><Icon>{icon}</Icon></IconMenu><Title active={ isActive }>{title}</Title>
    </Container>
  );
}

export default ItemMenu;
