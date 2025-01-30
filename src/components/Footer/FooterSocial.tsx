import styled from "styled-components";
import { Link } from "react-router-dom";
import { pxToRem } from "../../helper";
import { Paragraph, StyledLink } from "./Footer.style";
import { FlexBoxCenter } from "../../theme/GlobalStyle";

interface FooterSocialProps {
  image: string;
  values: string[];
  isblank?: boolean;
  link?: string;
  isnumber?: boolean;
}

export const StyledSocial = styled.div`
  ${FlexBoxCenter};
  gap: ${pxToRem(34)};

  @media (max-width: 900px) {
    gap: ${pxToRem(20)};
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const StyledValues = styled.div`
  ${FlexBoxCenter};
  flex-direction: column;
  align-items: start;
`;

const FooterSocial = ({
  link,
  image,
  values,
  isblank,
  isnumber = false,
}: FooterSocialProps) => {
  return (
    <>
      {isnumber ? (
        <StyledSocial>
          <picture>
            <source srcSet={`${image}.svg`} type="image/*" />
            <img src={image} alt="social-image" />
          </picture>
          <StyledValues>
            <StyledLink to={`tel:${values[0]}`}>{values[0]}</StyledLink>
            <StyledLink to={`tel:${values[1]}`}>{values[1]}</StyledLink>
          </StyledValues>
        </StyledSocial>
      ) : (
        <Link to={link ?? "#"} target={isblank ? "_blank" : "_self"}>
          <StyledSocial>
            <picture>
              <source srcSet={`${image}.svg`} type="image/*" />
              <img src={image} alt="social-image" />
            </picture>
            <StyledValues>
              <Paragraph $opacity="1">{values[0]}</Paragraph>
              {values[1] && <Paragraph $opacity="1">{values[1]}</Paragraph>}
            </StyledValues>
          </StyledSocial>
        </Link>
      )}
    </>
  );
};

export default FooterSocial;
