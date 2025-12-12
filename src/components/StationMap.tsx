
import stryt from "./stryt.png";
import PanoramaViewer from "./PanoramaViewer";
import { useState } from "react";

interface Props {
  className?: string;
}

function StationMap({ className = "" }: Props) {
  const [viewIndex, setViewIndex] = useState(0);

  return (
    <div
      className={`relative w-screen h-screen bg-contain bg-no-repeat bg-center ${className}`}
      style={{ backgroundImage: `url(${stryt})` }}
    >
      {/* 各ボタン */}
      <button
        className={`absolute w-[2.12%] h-[4.62%] top-[54.80%] left-[73.25%] bg-[#d9d9d9] rounded-[8.5px] shadow-[0px_4px_4px_#00000040] ${
          viewIndex === 0 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(0)}
        aria-label="view 0"
      />
      <button
        className={`absolute w-[2.12%] h-[4.62%] top-[57%] left-[63.00%] bg-[#d9d9d9] rounded-[8.5px] shadow-[0px_4px_4px_#00000040] ${
          viewIndex === 3 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(3)}
        aria-label="view 3"
      />
      <button
        className={`absolute w-[2.12%] h-[4.62%] top-[57.80%] left-[67.50%] bg-[#d9d9d9] rounded-[8.5px] shadow-[0px_4px_4px_#00000040] ${
          viewIndex === 2 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(2)}
        aria-label="view 2"
      />
      <button
        className={`absolute w-[2.12%] h-[4.62%] top-[62%] left-[69.62%] bg-[#d9d9d9] rounded-[8.5px] shadow-[0px_4px_4px_#00000040] ${
          viewIndex === 4 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(4)}
        aria-label="view 4"
      />
      <button
        className={`absolute w-[2.12%] h-[4.62%] top-[55.50%] left-[69.88%] bg-[#d9d9d9] rounded-[8.5px] shadow-[0px_4px_4px_#00000040] ${
          viewIndex === 1 ? "selected-button" : ""
        }`}
        onClick={() => setViewIndex(1)}
        aria-label="view 1"
      />

      {/* 画像出力 */}
      <div className="absolute w-[35.88%] h-[60%] top-[29.08%] left-[12.00%]">
        <PanoramaViewer viewIndex={viewIndex} />
      </div>
    </div>
  );
}

export default StationMap;