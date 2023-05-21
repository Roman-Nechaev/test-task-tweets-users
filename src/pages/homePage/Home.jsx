import {
  Container,
  Text,
  Title,
  RiGithubFillSt,
  RiLinkedinBoxLinSt,
  RiTelegramLineSt,
  SocialLi,
  SocialLink,
  WrapperSocial,
} from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <Title>Welcome, dear friend.</Title>
      <Text>
        In this app, you can view user cards and start following them. All
        changes are chronicled on the backend, so don`t worry that your changes
        won`t be saved or displayed incorrectly. You can use the filter to see
        the users you follow as well as to see the users you are not subscribed
        to. Have a nice time 😉
      </Text>

      <WrapperSocial>
        <SocialLi>
          <SocialLink href="https://t.me/nechaev_roma" target="_blanc">
            <RiTelegramLineSt />
          </SocialLink>
        </SocialLi>
        <SocialLi>
          <SocialLink
            href="https://github.com/Roman-Nechaev/test-task-tweets-users"
            target="_blanc"
          >
            <RiGithubFillSt />
          </SocialLink>
        </SocialLi>
        <SocialLi>
          <SocialLink
            href="https://www.linkedin.com/in/roman-kolenko/"
            target="_blanc"
          >
            <RiLinkedinBoxLinSt />
          </SocialLink>
        </SocialLi>
      </WrapperSocial>
    </Container>
  );
};
