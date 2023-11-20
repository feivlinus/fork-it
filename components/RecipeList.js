import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function RecipeList({ storedRecipes }) {
  //Add empty entry for the Create Recipe Link/Symbol
  const recipeData = [...storedRecipes, {}];

  return (
    <RecipeStyledUl>
      {recipeData.map((recipe, index, array) =>
        //If its the last entry of the recipeData add the Link for create Form
        index + 1 === array.length ? (
          <li key="createLink">
            <StyledDiv>
              <StyledLink href={"/recipe/create"}>✚</StyledLink>
            </StyledDiv>
          </li>
        ) : (
          <li key={recipe.name}>
            <Link href={`/recipe/${recipe.id}`}>
              <StyledFigure>
                <Image
                  src={
                    recipe.imageURL
                      ? recipe.imageURL
                      : "/recipe-images/generic-food-3.png"
                  }
                  alt={recipe.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <StyledFigcaption>{recipe.name}</StyledFigcaption>
              </StyledFigure>
            </Link>
          </li>
        )
      )}
    </RecipeStyledUl>
  );
}

const StyledFigure = styled.figure`
  position: relative;
  height: 150px;
  width: 150px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: -10;
  margin: 0;
`;

const StyledFigcaption = styled.figcaption`
  font-size: 0.8rem;
  position: absolute;
  left: 5%;
  bottom: 10%;
  color: #fff;
  text-shadow: 1px 1px 5px #000;
  z-index: 10;
`;

const RecipeStyledUl = styled.ul`
  all: unset;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 150px));
  justify-content: center;
  gap: 2.5vh 5vw;
`;

const StyledDiv = styled.div`
  height: 150px;
  width: 150px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: -10;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 3rem;
`;
