import Widget from '../../components/Widget';
import * as RiIcons from 'react-icons/ri';

import { Container, Content, Widgets } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>

      <Content>        
        <Widgets>
          <Widget title='Veterinários' amount='Test' diff={20} isMoney icon={<RiIcons.RiDashboardLine />}/>
          <Widget title='Pets'/>
          <Widget title='Exames'/>
          <Widget title=''/>
        </Widgets>
      </Content>
    </Container>
  );
}

export default Dashboard;