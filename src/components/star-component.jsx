import react from "react";
// export interface StarProps{
//     rating :number,
//     minof: number,
//     outof : number
// }
const StarComponent=(props)=>{
    let newRating=(((+props.rating - +props.minof)*(5-1))/(+props.outof - +props.minof))+1;
    let claculatedRating=Math.floor(newRating); 
    let  stars=[];
    for(let i=0;i<claculatedRating;i++){
        stars.push(<i key={i} className="fa fa-star"></i>)
    }
    if(+newRating%1){
        stars.push(<i key={"final"} className="fa fa-star-half"></i>)
    }
    return(
        <div>
            {stars}
        </div>
    );
}
export default StarComponent;
