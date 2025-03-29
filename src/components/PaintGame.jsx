import React, { useState, useRef, useEffect } from 'react';
import paint from "../assets/pain.webp";

const PaintGame = () => {
  const [tool, setTool] = useState('pencil');
  const [color, setColor] = useState('#000000');
  const [size, setSize] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [windowState, setWindowState] = useState('normal'); // normal, minimized, maximized
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  
  // Setup canvas context on component mount
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    
    // Set white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctxRef.current = ctx;
  }, []);
  
  // Update stroke style when color changes
  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = color;
    }
  }, [color]);
  
  // Update line width when size changes
  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.lineWidth = size;
    }
  }, [size]);
  
  const startDrawing = (e) => {
    const { offsetX, offsetY } = getCoordinates(e);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
    
    if (tool === 'eraser') {
      ctxRef.current.save();
      ctxRef.current.strokeStyle = 'white';
    }
  };
  
  const draw = (e) => {
    if (!isDrawing) return;
    
    const { offsetX, offsetY } = getCoordinates(e);
    
    if (tool === 'pencil' || tool === 'eraser') {
      ctxRef.current.lineTo(offsetX, offsetY);
      ctxRef.current.stroke();
    } else if (tool === 'line') {
      // This would require more complex implementation with a temporary canvas
      // Simplified for demonstration
    }
  };
  
  const stopDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
    
    if (tool === 'eraser') {
      ctxRef.current.restore();
    }
  };
  
  const getCoordinates = (e) => {
    if (e.touches) {
      // Touch event
      const rect = canvasRef.current.getBoundingClientRect();
      return {
        offsetX: e.touches[0].clientX - rect.left,
        offsetY: e.touches[0].clientY - rect.top
      };
    } else {
      // Mouse event
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY
      };
    }
  };
  
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  
  const handleWindowAction = (action) => {
    setWindowState(action);
  };
  
  const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#808080'];
  
  if (windowState === 'minimized') {
    return (
      <div className="fixed bottom-0 left-4 bg-gray-300 border border-gray-400 p-1" onClick={() => setWindowState('normal')}>
        <span className="text-xs">Paint</span>
      </div>
    );
  }
  
  return (
    <div className={`bg-gray-300 border-2 border-gray-400 shadow-md ${windowState === 'maximized' ? 'fixed inset-0' : 'w-full max-w-4xl mx-auto my-4'}`}>
      {/* Title Bar */}
      <div className="bg-blue-900 text-white px-2 py-1 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <img src={paint} alt="Paint icon" className="w-6 h-6" />
          <span className="text-sm font-bold">Paint</span>
        </div>
        <div className="flex">
          <button className="bg-gray-300 border border-gray-500 w-5 h-5 flex items-center justify-center mx-px text-black text-xs"
                 onClick={() => handleWindowAction('minimized')}>_</button>
          <button className="bg-gray-300 border border-gray-500 w-5 h-5 flex items-center justify-center mx-px text-black text-xs"
                 onClick={() => handleWindowAction(windowState === 'maximized' ? 'normal' : 'maximized')}>□</button>
          <button className="bg-gray-300 border border-gray-500 w-5 h-5 flex items-center justify-center mx-px text-black text-xs"
                 onClick={() => alert('Close button clicked')}>✕</button>
        </div>
      </div>
      
      {/* Menu Bar */}
      <div className="flex border-b border-gray-500 px-1">
        <div className="px-2 py-1 text-sm hover:bg-blue-900 hover:text-white cursor-pointer">File</div>
        <div className="px-2 py-1 text-sm hover:bg-blue-900 hover:text-white cursor-pointer">Edit</div>
        <div className="px-2 py-1 text-sm hover:bg-blue-900 hover:text-white cursor-pointer">View</div>
        <div className="px-2 py-1 text-sm hover:bg-blue-900 hover:text-white cursor-pointer">Help</div>
      </div>
      
      {/* Toolbar */}
      <div className="p-2 flex flex-wrap border-b border-gray-500">
        <div className="flex flex-col items-center mr-4">
          <div className="text-xs mb-1">Tools</div>
          <div className="grid grid-cols-2 gap-1">
            <button className={`w-8 h-8 border border-gray-500 ${tool === 'pencil' ? 'bg-gray-400' : 'bg-gray-300'}`} 
                   onClick={() => setTool('pencil')}>✏️</button>
            <button className={`w-8 h-8 border border-gray-500 ${tool === 'eraser' ? 'bg-gray-400' : 'bg-gray-300'}`}
                   onClick={() => setTool('eraser')}>🧽</button>
            <button className={`w-8 h-8 border border-gray-500 ${tool === 'line' ? 'bg-gray-400' : 'bg-gray-300'}`}
                   onClick={() => setTool('line')}>📏</button>
            <button className={`w-8 h-8 border border-gray-500 ${tool === 'fill' ? 'bg-gray-400' : 'bg-gray-300'}`}
                   onClick={() => setTool('fill')}>🪣</button>
          </div>
        </div>
        
        <div className="flex flex-col items-center mr-4">
          <div className="text-xs mb-1">Size</div>
          <input type="range" min="1" max="10" value={size} onChange={(e) => setSize(e.target.value)} 
                className="w-20" />
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-xs mb-1">Colors</div>
          <div className="grid grid-cols-3 gap-1">
            {colors.map((c) => (
              <div key={c} 
                  className={`w-6 h-6 cursor-pointer ${color === c ? 'ring-2 ring-blue-500' : ''}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setColor(c)}>
              </div>
            ))}
          </div>
        </div>
        
        <button className="ml-4 px-2 py-1 bg-gray-300 border border-gray-500 text-sm"
                onClick={clearCanvas}>
          Clear
        </button>
      </div>
      
      {/* Canvas */}
      <div className="relative bg-white w-full overflow-hidden" style={{ height: '400px' }}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
      
      {/* Status Bar */}
      <div className="bg-gray-300 border-t border-gray-500 p-1 text-xs flex justify-between">
        <div>Tool: {tool.charAt(0).toUpperCase() + tool.slice(1)}</div>
        <div>Size: {size}px</div>
      </div>
    </div>
  );
};

export default PaintGame;