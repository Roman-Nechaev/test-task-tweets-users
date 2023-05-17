import styled from '@emotion/styled';

export const WrapperCards = styled.div`
  max-width: 1200px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Cards = styled.ul`
  position: relative;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardsItem = styled.li`
  flex-basis: calc((100% - 20px) / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const BackgroundImg = styled.img`
  margin: 0 auto;
  margin-top: 28px;

  width: 308px;
  height: 168px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -70%);

  width: 80px;
  height: 80px;
`;

export const DecorLine = styled.div`
  margin-top: 18px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Tweets = styled.p`
  margin-top: 62px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;

  text-align: center;
`;

export const Followers = styled.p`
  margin-top: 16px;
  font-family: 'Montserrat';

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
  text-align: center;
`;

export const Button = styled.button`
  margin: 0 auto;
  margin-top: 26px;

  font-family: 'Montserrat';

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;
  text-transform: uppercase;

  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;
  border: none;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background: #5cd3a8;
  }
`;
