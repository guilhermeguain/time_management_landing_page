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
        {topics.map(topic => (
          <a href={topic.link} title={topic.title}>
            {topic.icon}
            <span>{topic.title}</span>
          </a>
        ))}
      </nav>
    </Container>
  );
};

export default Header;
