import { ICircle } from "../types/type";

export const CircleComponent: React.FC<{ circle: ICircle }> = ({ circle }) => {
    return (
      <div style={{position: "absolute",width: circle.radius * 2,height: circle.radius * 2,borderRadius: "50%",border:'solid',left: circle.x - circle.radius,top: circle.y - circle.radius,}}
      />
    );
  };