import { Layer, Rect, Stage } from "react-konva";

const RoomMap: React.FC = () => {
  const stageSize: number = window.innerWidth;
  const gridSize: number = stageSize / 10;
  //   const gridHeight: number = window.innerHeight;
  const stageHeight: number = window.innerHeight;
  // That is the nupmber of passage
  const rows: number = 7;
  const cols: number = 7;
  return (
    <>
      <div>
        <Stage width={stageSize} height={stageHeight}>
          <Layer>
            {/* Draw the grid */}
            {Array.from({ length: rows }).map((_, row) =>
              Array.from({ length: cols }).map((_, col) => <Rect key={`${row}-${col}`} x={col * gridSize} y={row * gridSize} width={stageSize} height={stageHeight} fill="#f0f0f0" stroke="#ddd" />)
            )}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default RoomMap;
