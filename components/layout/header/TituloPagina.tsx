import styled from "styled-components";
const LetraBonita = styled.h1`
  color: white;
  fonst-size: 20px;
  background: #059862;
`;

export default function TituloPagina(props: any) {
  return (
    <LetraBonita style={{ textAlign: "center" }}>{props.titulo}</LetraBonita>
  );
}
