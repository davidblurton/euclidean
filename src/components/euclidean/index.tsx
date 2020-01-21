import { h } from 'preact';

interface Props {
    n: number;
    pattern: number[];
    offset: number;
    beat: number;
    width?: number;
    height?: number;
}

const circleRadius = 6;

// const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

interface Point {
    x: number;
    y: number;
}

function polygon(vertices: number, radius: number) {
    return Array.from(Array(vertices), (_, i) => {
        const angle = Math.PI - (i * 2 * Math.PI) / vertices;

        const x = radius * Math.sin(angle);
        const y = radius * Math.cos(angle);

        return {
            x,
            y
        };
    });
}

function translate(x: number, y: number) {
    return (point: Point) => {
        return {
            x: point.x + x,
            y: point.y + y
        };
    };
}

function toPolygonPoints(points: Point[]) {
    return points
        .map((point: Point) => {
            return `${point.x},${point.y}`;
        })
        .join(" ");
}

const Euclidean: preact.FunctionalComponent<Props> = ({
    n,
    pattern,
    offset,
    beat,
    width = 400,
    height = 400
}) => {
    const radius = width / Math.PI;

    const points = polygon(n, radius).map(translate(width / 2, height / 2));

    const activePoints = points.filter((_, index) => {
        return Boolean(pattern[(index - offset + n) % n]);
    });

    const getPointColor = (index: number) => {
        if (index === beat) {
            return "red";
        }

        return pattern[index] === 1 ? "black" : "white";
    };

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "30vw", height: "30vw" }}
        >
            <polygon
                points={toPolygonPoints(points)}
                fill="none"
                stroke="black"
            />

            <polygon
                points={toPolygonPoints(activePoints)}
                fill="none"
                stroke="black"
                stroke-width="2"
            />

            {points.map((point: Point, index: number) => {
                return (
                    <circle
                        key={`circle${index}`}
                        cx={point.x}
                        cy={point.y}
                        r={circleRadius}
                        fill={getPointColor(index)}
                        stroke="black"
                    />
                );
            })}
        </svg>
    );
};

export default Euclidean;
