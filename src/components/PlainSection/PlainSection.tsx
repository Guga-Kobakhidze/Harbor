import { StyledPlainBox, StyledPlainTitle } from "./PlainSection.style";
import { StyledBtn } from "../../theme/Components";

interface PlainSectionProps {
  hasbtn?: boolean;
  onClick?: () => void;
  content: string;
}

const PlainSection = ({ hasbtn, onClick, content }: PlainSectionProps) => {
  return (
    <StyledPlainBox>
      <StyledPlainTitle>{content}</StyledPlainTitle>
      {hasbtn && <StyledBtn onClick={() => onClick?.()}>Contact us</StyledBtn>}
    </StyledPlainBox>
  );
};

export default PlainSection;
