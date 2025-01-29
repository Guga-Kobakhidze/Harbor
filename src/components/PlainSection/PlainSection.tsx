import { StyledPlainBox, StyledPlainTitle } from "./PlainSection.style";
import { StyledBtn } from "../../theme/Components";

interface PlainSectionProps {
  hasbtn?: boolean;
  onClick?: () => void;
  content: string;
  hasbackground?: boolean;
}

const PlainSection = ({
  hasbtn,
  onClick,
  content,
  hasbackground = false,
}: PlainSectionProps) => {
  return (
    <StyledPlainBox $hasbackground={hasbackground ? "true" : null}>
      <StyledPlainTitle>{content}</StyledPlainTitle>
      {hasbtn && <StyledBtn onClick={() => onClick?.()}>Contact us</StyledBtn>}
    </StyledPlainBox>
  );
};

export default PlainSection;
