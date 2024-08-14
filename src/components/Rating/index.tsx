import { Container } from "./styles";

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

interface RatingProps {
  grade: number;
  isBigSize: boolean;
}

export function Rating({ grade, isBigSize = false }: RatingProps) {
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= grade) {
      stars.push(<VscStarFull key={i} />);
    } else {
      stars.push(<VscStarEmpty key={i} />);
    }
  }

  return <Container $isBigSize={isBigSize}>{stars}</Container>;
}