import { RainbowHighlight } from './RainbowHighlight';

const HighlightText = ({ color, text }: { color: string; text: string }) => {
  return (
    <RainbowHighlight color={color} textLength={text.length}>
      <h1 className='text-4xl md:text-8xl font-bold text-white my-2'>{text}</h1>
    </RainbowHighlight>
  );
};

export default HighlightText;
