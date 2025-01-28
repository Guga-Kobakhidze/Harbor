import styled from "styled-components";
import { Link } from "react-router-dom";
import { pxToRem } from "../../helper";
import { Paragraph, StyledLink } from "./Footer.style";

interface FooterSocialProps {
  image: string;
  values: string[];
  isblank?: boolean;
  link?: string;
  isnumber?: boolean;
}

export const StyledSocial = styled.div`
  display: flex;
  gap: ${pxToRem(34)};
  align-items: center;
`;

export const StyledValues = styled.div`
  display: flex;
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
          <img src={image} alt={values[0]} />
          <StyledValues>
            <StyledLink to={`tel:${values[0]}`}>{values[0]}</StyledLink>
            <StyledLink to={`tel:${values[1]}`}>{values[1]}</StyledLink>
          </StyledValues>
        </StyledSocial>
      ) : (
        <Link to={link ?? "#"} target={isblank ? "_blank" : "_self"}>
          <StyledSocial>
            <img src={image} alt={values[0]} />
            <StyledValues>
              <Paragraph opacity="1">{values[0]}</Paragraph>
              {values[1] && <Paragraph opacity="1">{values[1]}</Paragraph>}
            </StyledValues>
          </StyledSocial>
        </Link>
      )}
    </>
  );
};

export default FooterSocial;
