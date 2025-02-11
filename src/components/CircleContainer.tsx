import { useRef, useState } from "react";
import { ICircle } from "../types/type";
import { areCirclesIntersecting, getRandomRadius } from "../utils/common/circleIntersection";
import { CircleComponent } from "./CircleComponent";
import randomcolor from "randomcolor";

export const CircleContainer: React.FC = () => {
    const [circles, setCircles] = useState<ICircle[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const randomColor = randomcolor();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newCircle: ICircle = { id: Date.now(), x, y, radius: getRandomRadius() };

        setCircles((prevCircles) => {
            if (prevCircles.length >= 2) {
                return [];
            } else {
                return [...prevCircles, newCircle];
            }
        });
    };


    const isIntersecting =
        circles.length === 2 && areCirclesIntersecting(circles[0], circles[1]);

    return (
        <>
            <div ref={containerRef} onClick={handleClick} style={{ width: "100vw", height: "100vh", position: "relative", backgroundColor: isIntersecting ? randomColor : "grey", display: "flex", alignItems: "center", justifyContent: "center", }}
            >

                <div style={{ position: "absolute", top: "20px", left: "20px", padding: "15px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.2)", textAlign: "center", }}
                >
                    <h3 className="text-grey-500" style={{ margin: "0", fontSize: "16px", textDecoration: 'underline', fontFamily: 'initial', color: 'darkblue' }}>Here You Can Create Circles and Check Intersection - Max 2!!!</h3>
                    <p className="text-grey-500" style={{ margin: "5px 0", fontSize: "14px", fontFamily: 'initial' }}>
                        Circles: {circles.length}/2
                    </p>
                    {circles.length === 2 && (
                        <>
                            <h1 className="font-bold" style={{ color: "black", fontFamily: 'initial' }}>
                                Status: <span style={{ color: isIntersecting ? "green" : "red", fontWeight: "bold   " }}>
                                    {isIntersecting ? '"Intersect"' : '"Not Intersecting"'}
                                </span>
                            </h1>
                        </>
                    )
                    }

                </div>

                {circles.map((circle) => (
                    <CircleComponent key={circle.id} circle={circle} />
                ))}
            </div>
        </>
    );
};
