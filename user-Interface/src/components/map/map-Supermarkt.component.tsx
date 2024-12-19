import React, { useEffect, useRef, useState } from "react";
import { Circle, Layer, Line, Rect, Stage } from "react-konva";
import type { IRack } from "../../bridge/Interfaces/rack.interface";
import rackServices from "../../services/rack.services";
import { FloatButton, Skeleton } from "antd";
import HeaderNav from "../nav/Header-nav.component";
import colorPalette from "../../palette/color-palette";
import type { MapWay } from "../../models/map-way.model";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const RoomMap: React.FC = () => {
  const [listRacks, setListRacks] = useState<IRack[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [obstacles, setObstacles] = useState<number[][]>([]);
  const navigate = useNavigate();
  const stageSize: number = window.innerWidth;
  const stageHeight: number = window.innerHeight;
  const CELL_size = 13;
  const rows = 22;
  const cols = 15;

  const loacation = useLocation();
  const { currentPosition, targetPosition, rackPosition } = loacation.state || {};

  const way: MapWay = {
    position: currentPosition,
    targetPosition: targetPosition,
    rackPosition: rackPosition,
  };

  const handleGoHome = () => {
    navigate("/home");
  };

  //Path constants
  const [start, setStart] = useState<number[]>(way.position!);
  const [end, setEnd] = useState<number[]>(way.targetPosition!);
  const [path, setPath] = useState<number[][]>([]);
  const [actuPos, setActuPos] = useState<number[]>(way.position!);

  //Helper functions to display the way
  const toCanvasCoords = ([row, col]: [number, number]) => [col * CELL_size + CELL_size / 2, row * CELL_size + CELL_size / 2];

  const calculatePath = (start: number[], end: number[]) => {
    // A* algorithm for shortest path avoiding obstacles
    const heuristic = ([r1, c1]: [number, number], [r2, c2]: [number, number]) => Math.abs(r1 - r2) + Math.abs(c1 - c2);
    // Simple BFS for shortest path
    const queue = [{ pos: start, path: [start], cost: 0 }];

    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
      queue.sort((a, b) => a.cost - b.cost);
      const { pos, path, cost } = queue.shift() || {};
      const [row, col] = pos!;

      if (row === end[0] && col === end[1]) return path;

      if (!visited.has(pos!.toString())) {
        visited.add(pos!.toString());
        console.log("i AM COMING HIER");
      }

      const neighbors = [
        [row - 1, col], // Up
        [row + 1, col], // Down
        [row, col - 1], // Left
        [row, col + 1], // Right
        [row - 1, col - 1], // Top-left
        [row - 1, col + 1], // Top-right
        [row + 1, col - 1], // Bottom-left
        [row + 1, col + 1], // Bottom-right
      ].filter(([r, c]) => r >= 0 && r < rows && c >= 0 && c < cols && !obstacles.some(([obstacleRow, obstacleCol]) => obstacleRow === r && obstacleCol === c));

      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor.toString())) {
          queue.push({
            pos: neighbor,
            path: [...path!, neighbor],
            cost: path!.length + heuristic(neighbor as [number, number], end as [number, number]),
          });
        }
      });
    }

    return [];
  };

  useEffect(() => {
    const fetchRacks = () => {
      rackServices
        .getAllRacks()
        .then((racks) => {
          setListRacks(racks);
          racks.forEach((rack) => {
            setObstacles((prev) => [...prev, ...rack.coordonates]);
          });
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

  useEffect(() => {
    const newPath: number[][] | undefined = calculatePath(start, end);
    if (newPath == undefined) throw Error("No path");
    setPath(newPath);
    setActuPos(start);
  }, [start, end]);

  //Move along the path
  // useEffect(() => {
  //   const moveUser = () => {
  //     if (path.length > 0 && actuPos.toString() !== end.toString()) {
  //       const interval = setInterval(() => {
  //         const currentIndex: number = path.findIndex((pos) => pos.toString() === actuPos.toString());
  //         console.log("curentIndex--------", currentIndex);
  //         console.log("pathLength--------", path.length);
  //         if (currentIndex < path.length - 1) {
  //           setActuPos(path[currentIndex + 1]);
  //           console.log("NewpOS------", path[currentIndex + 1]);
  //         } else {
  //           clearInterval(interval);
  //         }
  //       }, 50000);
  //     }
  //   };

  //   moveUser();

  //   console.log("Iam exuste", actuPos);
  // }, [path, actuPos, end]);

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
                {way.position && way.targetPosition && (
                  //Draw the point
                  <Circle x={toCanvasCoords(actuPos as [number, number])[0]} y={toCanvasCoords(actuPos as [number, number])[1]} radius={5} fill="blue" />
                  // Draw the path */}
                )}
                {way.position && way.targetPosition && (
                  <Line
                    points={path.map((point) => toCanvasCoords(point as [number, number])).flat()} // [x1, y1, x2, y2]
                    stroke="blue"
                    strokeWidth={2}
                    lineJoin="round"
                    lineCap="round"
                  />
                )}
                {/* Draw the end point */}
                <Circle x={toCanvasCoords(end as [number, number])[0]} y={toCanvasCoords(end as [number, number])[1]} radius={5} fill="white" />
              </Layer>
            </Stage>
          </div>
        )}
      </div>
      <FloatButton icon={<HomeOutlined onClick={handleGoHome} />} type="primary" style={{ insetInlineEnd: 24 }} />
    </>
  );
};

export default RoomMap;
