interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  let className = 'square';
  
  if (value === 'X') {
    className += ' x';
  } else if (value === 'O') {
    className += ' o';
  }

  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}