import styled from "styled-components";
const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;
const LinkA = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  &: hover {
    color: black;
    font-size: 20px;
  }
  transition: all 0.5s;
`;
const TextSpan = styled.span`
  margin-left: 10px;
  color: #059862;
`;

export default function BarraNav() {
  return (
    <div>
      <NavBar>
        <LinkA href="/html/">
          <TextSpan>HTML</TextSpan>{" "}
          <img src="/img/images.png" width={36} height={36} />
        </LinkA>
        <LinkA href="/css/">
          <TextSpan>CSS</TextSpan>
          <img src="/img/CSS.png" width={36} height={36} />
        </LinkA>
        <LinkA href="/js/">
          <TextSpan>JS</TextSpan>
          <img src="/img/JS.png" width={36} height={36} />
        </LinkA>
        <LinkA href="/ts/">
          <TextSpan>TS</TextSpan>
          <img src="/img/TS.png" width={36} height={36} />
        </LinkA>
        <LinkA href="/react/">
          <TextSpan>React</TextSpan>
          <img src="/img/react.png" width={36} height={36} />
        </LinkA>
        <LinkA href="/angular/">
          <TextSpan>Angular</TextSpan>
          <img src="/img/Angular.png" width={36} height={36} />
        </LinkA>
      </NavBar>
    </div>
  );
}
