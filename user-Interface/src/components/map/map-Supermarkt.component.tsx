import React, { useEffect, useRef, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import type { IRack } from "../../bridge/Interfaces/rack.interface";
import rackServices from "../../services/rack.services";
import { Skeleton } from "antd";
import HeaderNav from "../nav/Header-nav.component";
import colorPalette from "../../palette/color-palette";

const RoomMap: React.FC = () => {
  const [listRacks, setListRacks] = useState<IRack[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const stageSize: number = window.innerWidth;
  //   const gridHeight: number = window.innerHeight;
  const stageHeight: number = 1000;
  // That is the nupmber of passage
  const CELL_size = 10;

  useEffect(() => {
    const fetchRacks = () => {
      rackServices
        .getAllRacks()
        .then((racks) => {
          setListRacks(racks);
        })
        .catch((error) => {
          console.log("Error", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchRacks();
  }, []);
  return (
    <>
      <div className="bg-zinc-800">
        {loading && <Skeleton active />}
        {!loading && (
          <div>
            <div>
              <HeaderNav isHome={true} isConnect={true} />
            </div>
            <Stage width={stageSize} height={stageHeight}>
              <Layer>
                {listRacks.map((rack, rackIndex) =>
                  rack.coordonates.map(([row, col], postIndex) => (
                    <React.Fragment>
                      <Rect
                        key={`rack-${rackIndex}-${postIndex}`}
                        x={col * CELL_size}
                        y={row * CELL_size}
                        width={CELL_size * 2}
                        height={CELL_size * 2}
                        fill={`${colorPalette[rack.category.Category]}`} // Rack color
                        stroke={`${colorPalette[rack.category.Category]}`}
                      />
                    </React.Fragment>
                  ))
                )}
              </Layer>
            </Stage>
          </div>
        )}
      </div>
    </>
  );
};

export default RoomMap;
