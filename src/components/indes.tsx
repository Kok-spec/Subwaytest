
import haikei from "./stryt.png";
import PanoramaViewer from "./PanoramaViewer";
import { useState } from "react";

interface Props {
  className?: string;
}

function StationMap({ className = "" }: Props) {
  const [viewIndex, setViewIndex] = useState(0);

  return (
    <div
      className={`absolute inset-0 m-auto w-[1147px] h-[783px] bg-cover bg-[50%_50%] ${className}`}
      style={{ backgroundImage: `url(${haikei})` }}
    >
      {/* 各ボタン */}
      <button
        className={`absolute w-[3.40%] h-[4.85%] top-[64.11%] left-[89.45%] bg-[#fdf8f8b0] rounded-[19.5px/19px] ${
          viewIndex === 0 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(0)}
        aria-label="view 0"
      />
      <button
        className={`absolute w-[3.40%] h-[4.85%] top-[49.17%] left-[68.44%] bg-[#fdf8f8b0] rounded-[19.5px/19px] ${
          viewIndex === 1 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(1)}
        aria-label="view 1"
      />
      <button
        className={`absolute w-[3.40%] h-[4.85%] top-[42.15%] left-[73.23%] bg-[#fdf8f8b0] rounded-[19.5px/19px] ${
          viewIndex === 2 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(2)}
        aria-label="view 2"
      />
      <button
        className={`absolute w-[3.40%] h-[4.85%] top-[52.62%] left-[76.29%] bg-[#fdf8f8b0] rounded-[19.5px/19px] ${
          viewIndex === 3 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(3)}
        aria-label="view 3"
      />
      <button
        className={`absolute w-[3.40%] h-[4.85%] top-[65.39%] left-[78.47%] bg-[#fdf8f8b0] rounded-[19.5px/19px] ${
          viewIndex === 4 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(4)}
        aria-label="view 4"
      />
      <button
        className={`absolute w-[3.40%] h-[4.85%] top-[76.63%] left-[78.81%] bg-[#fdf8f8b0] rounded-[19.5px/19px] ${
          viewIndex === 5 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(5)}
        aria-label="view 5"
      />
      <button
        className={`absolute w-[3.40%] h-[4.85%] top-[74.71%] left-[69.31%] bg-[#fdf8f8b0] rounded-[19.5px/19px] ${
          viewIndex === 6 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(6)}
        aria-label="view 6"
      />

      {/* 画像出力 */}
      <div className="absolute w-[45.77%] h-[49.55%] top-[34.74%] left-[18.22%] bg-color-icon-disabled-default">
        <PanoramaViewer viewIndex={viewIndex} />
      </div>
    </div>
  );
}

export default StationMap;
