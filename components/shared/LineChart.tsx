interface DataPoint {
  x: number;
  y: number;
}

interface LineChartProps {
  data: DataPoint[][];
  width: number;
  height: number;
  hatchMarkLabels: string[];
  colors: string[];
}

const LineChart = ({
  data,
  width,
  height,
  hatchMarkLabels,
  colors,
}: LineChartProps) => {
  const xMax = width - 40;
  const yMax = height - 40;
  const xScale = xMax / (data[0].length - 1);
  const yMaxValue = Math.max(...data.flat().map((d) => d.y));
  const yScale = yMax / yMaxValue;

  return (
    <svg viewBox={`-10 -10 ${width} ${height}`} width={width} height={height}>
      {/* Draw hatch marks */}
      {hatchMarkLabels.map((label, index) => {
        const x = index * xScale;
        return (
          <g key={index}>
            <line
              x1={x}
              x2={x}
              y1={yMax}
              y2={yMax - yMax}
              stroke="#777777"
              strokeWidth={1}
            />
            <text
              x={x}
              y={yMax + 15}
              fontSize={12}
              textAnchor="middle"
              fill="white"
            >
              {label}
            </text>
            <text
              x={x + 12}
              y={yMax + 15}
              fontSize={10}
              textAnchor="middle"
              fill="white"
            >
              月
            </text>
          </g>
        );
      })}
      {/* Draw lines */}
      {data.map((lineData, lineIndex) => {
        const points = lineData
          .map((d, i) => `${i * xScale},${yMax - d.y * yScale}`)
          .join(" ");
        return (
          <polyline
            key={lineIndex}
            fill="none"
            stroke={colors[lineIndex]}
            strokeWidth={2}
            points={points}
          />
        );
      })}
      {/* Draw dots */}
      {data.map((lineData, lineIndex) =>
        lineData.map((d: any, i: number) => {
          const x = i * xScale;
          const y = yMax - d.y * yScale;
          return (
            <circle
              key={`${lineIndex}-${i}`}
              cx={x}
              cy={y}
              r={4}
              fill={colors[lineIndex]}
            />
          );
        })
      )}
    </svg>
  );
};

export default LineChart;
