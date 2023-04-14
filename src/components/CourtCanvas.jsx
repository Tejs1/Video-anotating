import { useRef } from "react";

function CourtCanvas({ location, setLocation }) {
  const canvasRef = useRef();
  function computePositionOnCanvas(event) {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
    return null;
  }
  function drawPoint(event) {
    if (location) return;
    const cordinates = computePositionOnCanvas(event);
    if (cordinates) {
      const context = canvasRef.current.getContext("2d");
      context.fillStyle = "red";
      context.beginPath();
      context.arc(cordinates.x, cordinates.y, 3, 0, 2 * Math.PI);
      context.fill();
      setLocation({ x: cordinates.x, y: cordinates.y });
    }
  }
  return (
    <canvas
      height={368}
      width={720}
      ref={canvasRef}
      onMouseDown={(e) => drawPoint(e)}
    />
  );
}

export default CourtCanvas;
