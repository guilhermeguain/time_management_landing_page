import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 40px;
  width: 100%;
  max-width: 1200px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;

  .mobile-menu-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    visibility: hidden;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);

    &.active {
      visibility: visible;
    }
  }

  nav {
    background: rgba(255, 255, 255, 0.8);

    a {
      text-decoration: none;
      position: relative;
      z-index: 5;

      display: flex;

      span {
        color: #283048;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }

  .mobile-menu {
    padding: 80px 40px 0;
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    max-width: 260px;
    height: 100vh;

    a {
      margin-bottom: 20px;
      border-bottom: 1px solid #ea6f00;
      padding-bottom: 20px;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }

  .main-menu {
    padding: 0 20px;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    list-style: none;
    position: relative;

    .progress-bar {
      content: '';
      width: 100%;
      margin-top: 3px;
      padding: 0 10px;
      position: absolute;
      right: 0;
      left: 0;
      top: 47%;

      display: flex;
      align-items: center;

      :before,
      :after {
        content: '';
        width: 10px;
        height: 10px;
        background: #ea6f00;
        border-radius: 100%;
        position: absolute;
      }

      :before {
        position: absolute;
        top: 0px;
        left: 10px;
      }

      :after {
        position: absolute;
        top: 0px;
        right: 10px;
      }

      &__track {
        margin-top: 4px;
        border-bottom: 2px solid #ea6f00;
      }
    }

    a {
      margin: 20px;

      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    span {
      margin-top: 10px;
    }
  }
`;

export { Container };
