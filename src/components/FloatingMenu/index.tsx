import React from 'react';
import { Container, Img, Infos, SignOutInfo, StyledFloatingMenu } from './styled';
import { SignOut } from 'phosphor-react';
import { Link } from 'react-router-dom';

const FloatingMenu: React.FC = () => {
  return (
    <StyledFloatingMenu>

      <Link to="/admin/profile"><Img src='https://i.pinimg.com/564x/85/71/72/8571727e081f426167ac04b819ce8dbf.jpg'></Img></Link>
      <Container>
        <Infos>
          <p>Neymar JR</p>
          <p>Microsoft Windows</p>
        </Infos>
        <SignOutInfo>
          <SignOut size={32} />
        </SignOutInfo>
      </Container>
    </StyledFloatingMenu>
  );
};

export default FloatingMenu;
