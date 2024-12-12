import { Layer, Rect, Stage } from "react-konva";

const RoomMap: React.FC = () => {
  const gridSize: number = window.innerWidth;
  // That is the nupmber of passage
  const rows: number = 7;
  const cols: number = 7;
  return (
    <>
      <div>
        <Stage width={cols * gridSize} height={rows * gridSize}>
          <Layer>
            {/* Draw the grid */}
            {Array.from({ length: rows }).map((_, row) =>
              Array.from({ length: cols }).map((_, col) => <Rect key={`${row}-${col}`} x={col * gridSize} y={row * gridSize} width={gridSize} height={gridSize} fill="#f0f0f0" stroke="#ddd" />)
            )}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default RoomMap;
