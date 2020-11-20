import React from 'react';
import { FiPlay, FiChevronRight } from 'react-icons/fi';

// Components
import Header from '../../components/Header';

// Importance images
import revolucaoDigitalImg from '../../assets/revolucao-digital.png';
import smartphonesImg from '../../assets/smartphones.png';

// Difficulties images
import desorganizacaoImg from '../../assets/desorganizacao.png';
import procrastinacaoImg from '../../assets/procrastinacao.png';
import distracoesImg from '../../assets/distracoes.png';

// Tips images
import facaPlanosImg from '../../assets/faca-planos.png';
import estabelecaPrazosImg from '../../assets/estabeleca-prazos.png';
import aprendaADizerNaoImg from '../../assets/aprenda-a-dizer-nao.png';
import eviteMultitarefasImg from '../../assets/evite-multitarefas.png';
import fujaDeDistracoesImg from '../../assets/fuja-das-distracoes.png';
import cuideDeVoceImg from '../../assets/cuide-de-voce.png';

// Tools imagens
import trelloImg from '../../assets/trello.png';
import notionImg from '../../assets/notion.png';
import googleCalendarImg from '../../assets/google-calendar.png';
import rescueTimeImg from '../../assets/rescue-time.png';

// Styled components
import {
  Container,
  Content,
  Section,
  TitleH2,
  Hero,
  WhatContent,
  ImportanceContent,
  DifficultiesContent,
  TipsContent,
  ToolsContent,
} from './styles';

const Home: React.FC = () => {
  const objectives = [
    {
      title: 'effective',
      content: {
        main: 'Ser mais efetivo',
        sub: '(fazer realmente o que precisa ser feito)',
      },
    },
    {
      title: 'efficient',
      content: { main: 'Ser mais eficiente', sub: '(fazer bem feito)' },
    },
    {
      title: 'productive',
      content: {
        main: 'Ser mais produtivo',
        sub: '(aproveite o seu tempo da melhor maneira)',
      },
    },
  ];

  const difficulties = [
    {
      title: 'Desorganização',
      img: desorganizacaoImg,
      desc:
        'Faz com que você gaste tempo demais procurando algo, além de ser um catalisador do estresse. Um ambiente desorganizado facilita dispersões, dificulta a concentração e impede que você seja mais ágil e efetivo.',
    },
    {
      title: 'Procrastinação',
      img: procrastinacaoImg,
      desc:
        'A atividade adiada precisará ser feita com menor planejamento, maior pressão e muitas vezes fora do horário em que deveria ser feita. Gera desconforto, ansiedade e descontrole.',
    },
    {
      title: 'Distrações',
      img: distracoesImg,
      desc:
        'Distrações constantes diminuem a produtividade, o que nos deixa insatisfeitos e desmotivados. Trabalhar em um ambiente sem distrações favorece a concentração e possibilita a conclusão da atividade em menos tempo.',
    },
  ];

  const tips = [
    {
      img: facaPlanosImg,
      title: 'Faça planos',
      content:
        'Crie planos com metas diárias, semanais, mensais e anuais. Escrever facilita a visualização e memorização das suas metas.',
    },
    {
      img: estabelecaPrazosImg,
      title: 'Estabeleça prazos',
      content:
        'A definição do tempo para a execução de uma tarefa torna o objetivo mais concreto e palpável.',
    },
    {
      img: aprendaADizerNaoImg,
      title: 'Aprenda a dizer "não"',
      content:
        'Não desperdice seu tempo com pessoas e projetos que não estão alinhados com os seus objetivos.',
    },
    {
      img: eviteMultitarefasImg,
      title: 'Evite multitarefas',
      content:
        'Fazer muitas coisas ao mesmo tempo compromete a qualidade das atividades realizadas e aumenta a margem de erro.',
    },
    {
      img: fujaDeDistracoesImg,
      title: 'Fuja de distrações',
      content:
        'Enquanto estiver trabalhando em tarefas específicas, evite olhar o celular ou checar seu e-mail.',
    },
    {
      img: cuideDeVoceImg,
      title: 'Cuide de você',
      content:
        'Se você não estiver bem, definitivamente não conseguirá colocar em prática todas as outras dicas.',
    },
  ];

  const tools = [
    {
      img: trelloImg,
      title: 'Trello',
      content:
        'Software que utiliza a metodologia kanban, com blocos temáticos, e ótimo para administrar projetos.',
      link: 'https://trello.com/',
    },
    {
      img: notionImg,
      title: 'Notion',
      content:
        'Serviço que permite criar listas, lembretes, documentos e compartilhar com outras pessoas.',
      link: 'https://www.notion.so/',
    },
    {
      img: googleCalendarImg,
      title: 'Google Calendar',
      content:
        'Calendário digital que te ajuda a organizar suas tarefas e seus respectivos prazos.',
      link: 'https://calendar.google.com/calendar',
    },
    {
      img: rescueTimeImg,
      title: 'Rescue Time',
      content:
        'Registra seu desenvolvimento e te diz quanto do seu tempo está sendo desperdiçado com a famigerada procrastinação.',
      link: 'https://www.rescuetime.com/',
    },
  ];

  return (
    <Container id="home">
      <Header />
      <Hero>
        <span className="category">Soft Skill</span>
        <h1>Gestão do Tempo</h1>
        <h2>Como fazer mais e melhor</h2>
        <a href="#what">
          <FiPlay size={24} />
          <span>Começar</span>
        </a>
      </Hero>
      <Content>
        <Section id="what">
          <WhatContent>
            <TitleH2>O que é</TitleH2>
            <p>
              Gestão do tempo é a habilidade de priorizar e organizar tarefas a
              fim de alcançar um melhor aproveitamento do tempo.
            </p>
            <p>
              Todos temos as mesmas 24 horas todos os dias, porém apenas algumas
              pessoas conseguem utilizá-las de forma mais eficiente. Gerir seu
              tempo é justamente o processo de planejar, controlar e executar
              suas ações de forma que você tenha consciência sobre a quantidade
              de tempo que leva para fazer cada uma das suas atividades do dia.
            </p>
            <h4>Principais objetivos:</h4>
            <ul>
              {objectives.map(objective => (
                <li key={objective.title}>
                  <FiChevronRight size={20} />
                  <p>
                    <span className="main">{objective.content.main}</span>
                    <span className="sub">{objective.content.sub}</span>
                  </p>
                </li>
              ))}
            </ul>
          </WhatContent>
        </Section>
        <Section id="importance">
          <ImportanceContent>
            <TitleH2>Importância</TitleH2>
            <div className="row">
              <img src={revolucaoDigitalImg} alt="Revolução Digital" />
              <div>
                <p>
                  Antes do advento da chamada Revolução Digital (ainda em
                  curso), existiam lacunas de tempo de espera que eram
                  compreendidas e respeitadas por todos durante a realização de
                  tarefas.
                </p>
                <p>
                  Se a redação de um documento levava um turno inteiro de
                  trabalho, não seria esse um motivo para o gestor se mostrar
                  impaciente. Afinal, era o que podia ser feito com a tecnologia
                  existente.
                </p>
              </div>
            </div>
            <p>
              Mas a onipresença da informação transformou intervalos de tempo em
              minutos produtivos, levando a espera passiva a reverter em
              possibilidades de ganhos e melhores resultados.
            </p>
            <div className="row">
              <div>
                <p>
                  Bilhões de smartphones nas mãos das pessoas romperam barreiras
                  e eliminaram restrições físicas ou de acesso.
                </p>
                <p>
                  A tecnologia permitiu que o tempo de deslocamento, por
                  exemplo, fosse convertido na conclusão de relatórios, no envio
                  de e-mails, na oportunidade de um curso de idiomas e até mesmo
                  na manutenção de relacionamentos.
                </p>
              </div>
              <img src={smartphonesImg} alt="Smartphones" />
            </div>
            <p>
              As facilidades proporcionadas pelos recursos tecnológicos atuais
              “borram” as linhas divisórias entre os momentos da vida,
              confundindo as prioridades e nos permitindo sacrificar elementos
              essenciais que trariam equilíbrio.
            </p>
            <p>É por isso que a gestão do tempo é tão importante.</p>
            <p>
              Ela permite clareza nas escolhas. Possibilita dedicar tempo ao
              trabalho para o atendimento às metas, ser mais produtivo e ter
              maior foco e concentração.
            </p>
            <p>
              Tudo isso para que, ao final do dia, sem nenhum sentimento de
              culpa, se possa “desligar” e voltar a atenção para os
              relacionamentos, para a família e para o lazer.
            </p>
            <p>
              Quando nos propomos a assumir o controle sobre o nosso tempo, nos
              comprometemos a fazer o nosso melhor dentro do espaço definido
              para cada momento.
            </p>
          </ImportanceContent>
        </Section>
        <Section id="difficulties">
          <DifficultiesContent>
            <TitleH2>Dificuldades</TitleH2>
            <div className="list">
              {difficulties.map(difficulty => (
                <div key={difficulty.title} className="list__item">
                  <img
                    src={difficulty.img}
                    width="256"
                    height="256"
                    alt={difficulty.title}
                  />
                  <h3>{difficulty.title}</h3>
                  <p>{difficulty.desc}</p>
                </div>
              ))}
            </div>
          </DifficultiesContent>
        </Section>
        <Section id="tips">
          <TipsContent>
            <TitleH2>Dicas</TitleH2>
            <div className="list">
              {tips.map(tip => (
                <div key={tip.title} className="list__item">
                  <div className="list__item__img">
                    <img
                      src={tip.img}
                      width="100"
                      height="100"
                      alt={tip.title}
                    />
                  </div>
                  <div className="list__item__content">
                    <h3>{tip.title}</h3>
                    <p>{tip.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </TipsContent>
        </Section>
        <Section id="tools">
          <ToolsContent>
            <TitleH2>Ferramentas</TitleH2>
            <div className="list">
              {tools.map(tool => (
                <div key={tool.title} className="list__item">
                  <img
                    src={tool.img}
                    width="230"
                    height="80"
                    alt={tool.title}
                  />
                  <h3>{tool.title}</h3>
                  <p>{tool.content}</p>
                  <a href={tool.link} target="_blank" rel="noreferrer">
                    Conheça
                  </a>
                </div>
              ))}
            </div>
          </ToolsContent>
        </Section>
      </Content>
    </Container>
  );
};

export default Home;
