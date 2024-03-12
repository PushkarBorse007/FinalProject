import styled from "styled-components";

export const Box = styled.div`
  padding: 50px 30px;
  background: #C60C30;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 400px;
  margin-top: 150px;

  @media (max-width: 100px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: white;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: black;
  margin-bottom: 40px;
  font-weight: bold;
`;