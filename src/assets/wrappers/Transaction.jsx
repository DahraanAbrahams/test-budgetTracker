import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--white);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    h5 {
      letter-spacing: 0;
    }
  }
  .main-icon {
    width: 80px;
    height: 80px;
    display: grid;
    place-items: center;
    margin-right: 2rem;
  }
  .info {
    h3 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: flex;
    flex-direction: column;
    .description, .createdAt{
      display: flex;
      align-items: center;
      justify-items: center;
      padding: 3px 0px;
    }
    span {
      margin-left: 0.5rem;
      font-size: 1rem;
    }
  }

  footer {
    margin-top: 1rem;
  }
  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
  }
  .edit-btn {
    color: var(--grey-50);
    background: var(--primary-300);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--grey-50);
    background: var(--primary-200);
  }
  &:hover .actions {
    visibility: visible;
  }
`;

export default Wrapper;
