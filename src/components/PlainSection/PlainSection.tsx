import { StyledPlainBox, StyledPlainTitle } from "./PlainSection.style";
import { StyledBtn } from "../../theme/Components";
import AnimatedText from "../AnimatedText/AnimatedText";

interface PlainSectionProps {
  hasbtn?: boolean;
  onClick?: () => void;
  content: string;
  hasbackground?: boolean;
  once?: boolean;
}

const PlainSection = ({
  hasbtn,
  onClick,
  content,
  once = true,
  hasbackground = false,
}: PlainSectionProps) => {
  return (
    <StyledPlainBox $hasbackground={hasbackground ? "true" : null}>
      <StyledPlainTitle>
        <AnimatedText text={content} once={once} />
      </StyledPlainTitle>
      {hasbtn && <StyledBtn onClick={() => onClick?.()}>Contact us</StyledBtn>}
    </StyledPlainBox>
  );
};

export default PlainSection;
