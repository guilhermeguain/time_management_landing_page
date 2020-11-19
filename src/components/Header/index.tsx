import React, { useState, useEffect, useCallback } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import {
  FcHome,
  FcAbout,
  FcApproval,
  FcHighPriority,
  FcIdea,
  FcSupport,
} from 'react-icons/fc';

import { Container } from './styles';

interface WindowSizeData {
  width: undefined | number;
  height: undefined | number;
}

const Header: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowSize, setWindowSize] = useState<WindowSizeData>({
    width: undefined,
    height: undefined,
  });

  const isMobile = windowSize.width && windowSize.width < 768;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    setScrollPosition(Math.floor((scrollTop / totalHeight) * 100));

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollTop]);

  const topics = [
    { title: 'Início', icon: <FcHome size={24} />, link: '#home' },
    { title: 'O que é', icon: <FcAbout size={24} />, link: '#what' },
    {
      title: 'Importância',
      icon: <FcApproval size={24} />,
      link: '#importance',
    },
    {
      title: 'Dificuldades',
      icon: <FcHighPriority size={24} />,
      link: '#difficulties',
    },
    { title: 'Dicas', icon: <FcIdea size={24} />, link: '#tips' },
    { title: 'Ferramentas', icon: <FcSupport size={24} />, link: '#tools' },
  ];

  const handleHamburgerClick = useCallback(() => {
    setToggleMenu(!toggleMenu);
  }, [toggleMenu]);

  return (
    <Container>
      <div
        aria-hidden="true"
        className={`mobile-menu-overlay ${toggleMenu ? 'active' : ''}`}
        onClick={() => {
          setToggleMenu(false);
        }}
      />
      {(toggleMenu || !isMobile) && (
        <nav className={`${isMobile ? 'mobile-menu' : 'main-menu'}`}>
          {!!scrollPosition && (
            <div className="progress-bar">
              <div
                className="progress-bar__track"
                style={{ width: `${scrollPosition}%` }}
              />
            </div>
          )}
          {topics.map(topic => (
            <a
              key={topic.title}
              href={topic.link}
              title={topic.title}
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              {topic.icon}
              <span>{topic.title}</span>
            </a>
          ))}
        </nav>
      )}
      {isMobile && (
        <HamburgerMenu
          isOpen={toggleMenu}
          menuClicked={handleHamburgerClick}
          width={18}
          height={16}
          strokeWidth={2}
          rotate={0}
          color="#283048"
          borderRadius={0}
          animationDuration={0.5}
        />
      )}
    </Container>
  );
};

export default Header;
