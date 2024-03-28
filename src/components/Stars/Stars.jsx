import star from "../../assets/images/star.svg";
import starRed from "../../assets/images/star-red.svg";

export default function Stars({ scaleValue }) {
  const range = [1, 2, 3, 4, 5];
  return (
    <div>
      {range.map((data, index) =>
        scaleValue >= data ? (
          <img key={index} className="house__star" src={starRed} />
        ) : (
          <img key={index} className="house__star" src={star} />
        )
      )}
    </div>
  );
}
