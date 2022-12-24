import styled from "styled-components";

export const finishPurchase = () => {
  return (
    <>
      <Title>THANK YOU!</Title>
    </>
  );
};

export default finishPurchase;

export const Title = styled.p`
  font-weight: bold;
  font-size: 70px;
  margin-top: 20px;
  color: white;
`;
