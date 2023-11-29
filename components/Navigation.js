import styled from "styled-components";
import NavigationIcons from "./Icons/NavigationIcons";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNavigationContainer>
      <StyledNavigationLink href="/">
        <NavigationIcons variant={"home"} color={"#BABABA"} size={32} />
      </StyledNavigationLink>

      <StyledNavigationLink href="/recipe/create">
        <NavigationIcons variant={"create"} color={"#BABABA"} size={32} />
      </StyledNavigationLink>

      {/* <Link href="/">
        <NavigationIcons variant={"favorites"} color={"#BABABA"} size={32} />
      </Link> */}
    </StyledNavigationContainer>
  );
}

const StyledNavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25) inset;
  bottom: 0;
  position: fixed;
  z-index: 50;
`;

const StyledNavigationLink = styled(Link)`
  &:hover,
  &:active {
    svg {
      fill: #6e6e6e;
    }
  }
`;
