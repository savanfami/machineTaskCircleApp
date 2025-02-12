import { ICircle } from "../../types/type";


// export const areCirclesIntersecting=(circle1:ICircle,circle2:ICircle):boolean=>{
//  const distance=Math.sqrt(
//     Math.pow(circle2.x-circle1.x,2)+Math.pow(circle2.y-circle1.y,2)
//  )

//  return distance<circle1.radius+circle2.radius
// }

export const areCirclesIntersecting = (circle1: ICircle, circle2: ICircle): boolean => {
    const distance = Math.sqrt(
        Math.pow(circle2.x - circle1.x, 2) + Math.pow(circle2.y - circle1.y, 2)
    );

    const sumOfRadii = circle1.radius + circle2.radius;
    const diffOfRadii = Math.abs(circle1.radius - circle2.radius);

    return distance >= diffOfRadii && distance <= sumOfRadii;
};


export const getRandomRadius=():number=>{
    return Math.floor(Math.random()*(200-20+1)+20)
}