import { RainbowHighlight } from "./RainbowHighlight";

const HighlightText = ({ color, text }) => {
  return (
    <RainbowHighlight color={color}>
      <h1 className="text-4xl md:text-8xl font-bold text-white my-2">{text}</h1>
    </RainbowHighlight>
  );
};

export default HighlightText;
