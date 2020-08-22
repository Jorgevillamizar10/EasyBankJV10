import React, { useState, useEffect } from 'react';
import {
  Nav,
  Link,
  Div,
  Img,
  Button,
  Cabecera,
  MenuH,
  Figure,
  ButtonMenu,
  DesktopMenu,
  DesktopList,
  LinkDesk,
} from './styles';
import Logo from '../../images/logo.svg';
import HamburguerMenu from '../../images/icon-hamburger.svg';
import IconDelete from '../../images/icon-close.svg';

export const Header = () => {
  const [menu, setMenu] = useState(() => {
    try {
      const menu = window.localStorage.getItem('menu');
      return JSON.parse(menu);
    } catch (e) {
      return false;
    }
  });

  const [showFixed, setShowFixed] = useState(false);

  const Icon = !menu ? HamburguerMenu : IconDelete;

  // para que al actualizar la pagina no me cambie el estado
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem('menu', value);
      setMenu(value);
    } catch (e) {
      console.error(e);
    }
  };

  // console.log(menu);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 70;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener('scroll', onScroll);

      // esta funcion deberia limpiar el eventListener de arriba
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showFixed]
  );

  // para manejar el boton menu
  const renderMenu = (fixed) => (
    /* Menu Hamburguesa */
    <ButtonMenu
      // className={fixed ? 'fixed' : ''}
      fixed={fixed}
      onClick={() => setLocalStorage(!menu)}
    >
      <MenuH src={Icon} alt='menu-hamburguesa' />
    </ButtonMenu>
  );

  return (
    <>
      {menu ? (
        <DesktopMenu>
          <DesktopList>
            <LinkDesk to='/'>Home</LinkDesk>
            <LinkDesk to='/about'>About</LinkDesk>
            <LinkDesk to='/contact'>Contact</LinkDesk>
            <LinkDesk to='/blog'>Blog</LinkDesk>
            <LinkDesk to='/careers'>Careers</LinkDesk>
          </DesktopList>
        </DesktopMenu>
      ) : null}
      <Cabecera>
        <Div>
          {/* logo */}
          <Figure>
            <Img src={Logo} alt='logo' />
          </Figure>
          {/* Menu Hamburguesa */}
          {renderMenu()}
          {showFixed && renderMenu(true)}

          {/* menu */}
          <Nav>
            <Link to='/'>Home</Link>

            <Link to='/about'>About</Link>

            <Link to='/contact'>Contact</Link>

            <Link to='/blog'>Blog</Link>

            <Link to='/careers'>Careers</Link>
          </Nav>
          {/* boton */}
          <Button>Request Invite</Button>
        </Div>
      </Cabecera>
    </>
  );
};
