import { useEffect, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import type { IRack } from "../../bridge/Interfaces/rack.interface";
import rackServices from "../../services/rack.services";
import { Skeleton } from "antd";

const RoomMap: React.FC = () => {
  const [listRacks, setListRacks] = useState<IRack[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const stageSize: number = window.innerWidth;
  const gridSize: number = stageSize / 10;
  //   const gridHeight: number = window.innerHeight;
  const stageHeight: number = window.innerHeight;
  // That is the nupmber of passage
  const rows: number = 7;
  const cols: number = 7;

  useEffect(() => {
    const fetchRacks = () => {
      rackServices.getAllRacks().then((racks) => {
        setListRacks(racks);
        setLoading(false);
      });
    };

    fetchRacks();
  }, []);
  return (
    <>
      <div>
        {loading && <Skeleton active />}
        {!loading && (
          <Stage width={stageSize} height={stageHeight}>
            <Layer>
              {/* Draw the grid */}
              {Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: cols }).map((_, col) => <Rect key={`${row}-${col}`} x={col * gridSize} y={row * gridSize} width={stageSize} height={stageHeight} fill="#f0f0f0" stroke="#ddd" />)
              )}
            </Layer>
          </Stage>
        )}
      </div>
    </>
  );
};

export default RoomMap;
