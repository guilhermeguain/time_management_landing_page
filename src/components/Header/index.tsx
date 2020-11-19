import React, { useState, useEffect } from 'react';
import {
  FcHome,
  FcAbout,
  FcApproval,
  FcHighPriority,
  FcIdea,
  FcSupport,
} from 'react-icons/fc';

import { Container } from './styles';

const Header: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    setScrollPosition(Math.floor((scrollTop / totalHeight) * 100));

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <Container>
      <nav>
        {!!scrollPosition && (
          <div className="progress-bar">
            <div
              className="progress-bar__track"
              style={{ width: `${scrollPosition}%` }}
            />
          </div>
        )}
        <a href="#home">
          <FcHome size={24} />
          <span>Início</span>
        </a>
        <a href="#what">
          <FcAbout size={24} />
          <span>O que é</span>
        </a>
        <a href="#importance">
          <FcApproval size={24} />
          <span>Importância</span>
        </a>
        <a href="#difficulties">
          <FcHighPriority size={24} />
          <span>Dificuldades</span>
        </a>
        <a href="#tips">
          <FcIdea size={24} />
          <span>Dicas</span>
        </a>
        <a href="#tools">
          <FcSupport size={24} />
          <span>Ferramentas</span>
        </a>
      </nav>
    </Container>
  );
};

export default Header;
