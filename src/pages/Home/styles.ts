import styled from 'styled-components';
import { shade } from 'polished';

import bgHero from '../../assets/bg-hero.jpg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url(${bgHero}) no-repeat 60% 30%;
  background-attachment: fixed;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
  max-width: 1200px;

  @media only screen and (min-width: 768px) {
    padding: 40px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const TitleH2 = styled.h2`
  margin-bottom: 20px;
  border-bottom: 2px solid #ea6f00;
  padding-bottom: 5px;

  font-weight: bold;
  color: #283048;
`;

const Hero = styled.section`
  margin: 20vh auto 0;
  padding: 40px;
  width: 100vw;
  max-width: 1200px;
  height: 100vh;
  width: 100%;

  .category {
    background-color: #ee3553;
    color: ${shade(0.7, '#ee3553')};
    font-weight: 700;
    padding: 8px 16px;
    border-radius: 12px;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 1;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
  }

  h1 {
    margin: 40px 0 20px;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.2em;
    color: #283048;
  }

  h2 {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1em;
    color: white;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  }

  a {
    background-color: #fff;
    border-radius: 20px;
    padding: 16px 24px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #283048;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);

    &:hover {
      color: #ea6f00;
    }

    svg,
    span {
      transition: color 0.2s;
    }

    span {
      margin-left: 10px;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 24px;
      line-height: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    margin: 30vh auto 0;

    h1 {
      margin: 20px 0;
      font-size: 64px;
    }

    h2 {
      font-size: 36px;
    }
  }
`;

const WhatContent = styled.div`
  padding: 20px;

  h4 {
    margin: 40px 0 10px;
    font-weight: 700;
    color: #ea6f00;
  }

  ul {
    list-style: none;
  }

  li {
    color: #283048;

    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }

    & + li {
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 40px;
  }
`;

const ImportanceContent = styled.div`
  padding: 20px;

  .row {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    img {
      margin-bottom: 20px;
    }

    img + div {
      margin-bottom: 10px;
    }

    div > p:first-child {
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 40px;

    .row {
      flex-flow: row nowrap;

      img {
        margin-bottom: 0px;
      }

      img + div,
      div + img {
        margin-left: 40px;
      }
    }
  }
`;

const DifficultiesContent = styled.div`
  padding: 20px 20px 0 20px;

  .list {
    display: flex;
    flex-flow: column wrap;

    &__item {
      margin: 0 0 20px 0;

      text-align: center;

      img {
        margin: 20px 0 10px;
      }

      h3 {
        font-weight: 700;
        margin-bottom: 20px;
        color: #ea6f00;
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 40px 40px 0 40px;

      .list {
        &__item {
          margin: 0 0 40px 0;
        }

        &:nth-of-type(3n) {
          margin: 0 0 40px 0;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .list {
      flex-flow: row wrap;

      &__item {
        margin: 0 40px 40px 0;
        max-width: calc(33.33% - (80px / 3));
      }
    }
  }
`;

const TipsContent = styled.div`
  padding: 20px;

  .list {
    &__item {
      display: flex;
      flex-flow: column wrap;
      align-items: center;

      &:not(:last-of-type) {
        margin-bottom: 40px;
      }

      &__img {
        margin: 0 0 20px 0;
        min-width: 100px;
      }

      &__content {
        h3 {
          margin-bottom: 10px;
          text-transform: uppercase;
          font-weight: bold;
          color: #ea6f00;
          text-align: center;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 40px;

    .list {
      &__item {
        flex-flow: row nowrap;

        &__img {
          margin: 0 40px 0 0;
        }

        &__content {
          h3 {
            text-align: left;
          }
        }
      }
    }
  }
`;

const ToolsContent = styled.div`
  padding: 40px 40px 0 40px;

  .list {
    display: flex;
    flex-direction: column;

    &__item {
      margin: 0 0 40px 0;

      display: flex;
      flex-direction: column;

      &:nth-of-type(4n) {
        margin: 0 0 40px 0;
      }

      img {
        margin: 20px 0;
        max-width: 100%;
        height: auto;
      }

      h3 {
        margin-bottom: 10px;
        font-weight: bold;
        color: #ea6f00;
      }

      p {
        margin-bottom: 40px;
        flex: 1;
      }

      a {
        background-color: #ea6f00;
        padding: 12px 24px;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.2, '#ea6f00')};
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .list {
      flex-flow: row nowrap;

      &__item {
        margin: 0 40px 40px 0;
        width: calc(25% - (120px / 4));
      }
    }
  }
`;

export {
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
};
