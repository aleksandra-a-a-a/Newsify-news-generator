import styled from "styled-components";

const Note = styled.div`
  background: #202123;
  width: 35rem;
  height: 40rem;
  content: "";
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;

  @media (max-width: 414px) {
    max-width: 25rem;
    height: auto;
  }
`;

const CloseIcon = styled.div`
  color: #d5eb2a;
  text-align: right;
  padding: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
`;

const Meme = styled.div`
  text-align: center;

  .meme {
    width: 20rem;

    @media (max-width: 414px) {
        max-width: 18rem;
      }
  }
`;

const Text = styled.div`
  margin-top: 0.6rem;
  text-align: center;
  font-size: 1rem;
  padding: 0 2rem;
  line-height: 1.5;
`;

export { Note, CloseIcon, Meme, Text }