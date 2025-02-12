import setSeries from "../api/setSeries.json";
import SeriesCard from "./seriesCard";

const Netflix = () => {
  return (
    <ul className = "grid grid-three--cols">
      {setSeries.map((curElem) => (
         <SeriesCard key={curElem.id} data={curElem}/>// Fixed the JSX
      ))}
    </ul>
  );
};

export default Netflix;
