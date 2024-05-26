import { useEffect, useRef, useState } from 'react';
import Matter, { Bodies, Engine, Render, Runner, World, Mouse, MouseConstraint, Events } from 'matter-js';
import { foodList } from './utils/data/foodList';

function NewComponent(props) {
  const scene = useRef();
  const engine = useRef(Engine.create());
  const [isDragging, setIsDragging] = useState(false);  // State to track if dragging is happening
  const [sceneData, setSceneData] = useState({
    mode: 'night',
    worldScale: Math.min(window.innerWidth, window.innerHeight) / 1500,
    furnitureScale: 1,
    food: [],
    nextFood: null,
    walls: false,
    platesCategory: 2,
    foodCategory: 8,
    standsCategory: 4,
    wallCategory: 3,
  });

  const scalePathData = (pathData, scale) => {
    return pathData.split(' ').map(coord => (parseFloat(coord) * scale).toFixed(2)).join(' ');
  };
  const scaledPathData = scalePathData("136 7 202 24 244 108 305 115 289 144 226 144 190 171 118 158 7 66", 0.8)

  console.log(scaledPathData)
  
  const addNewFood = (x, y) => {
    if (!isDragging) {  // Only add new food if not dragging
      const foodConfig = foodList[sceneData.mode][Math.floor(Math.random() * foodList[sceneData.mode].length)];
      const scale = sceneData.worldScale * foodConfig.scale;
      const newFood = Bodies.rectangle(window.innerWidth * x, window.innerHeight * y, foodConfig.width * scale, foodConfig.height * scale, {
        isStatic: false,
        label: foodConfig.label,
        render: {
          sprite: {
            texture: foodConfig.sprite,
            xScale: scale,
            yScale: scale,
          }
        },
        // density: 0.01,  // Increased for more realistic mass
        // friction: 0.2,   // Adjusted for more realistic sliding behavior
        // frictionAir: 0.01, // Reduced for less air resistance
        // restitution: 0.7, // Adjusted for more realistic bounciness
        // chamfer: { radius: 50 }, // Adds rounded corners

      });

          // Add pathData to define the shape
    if (foodConfig.pathData) {
      const path = foodConfig.pathData;
      const vertices = Matter.Vertices.fromPath(path);
      Matter.Body.setVertices(newFood, vertices);
    }
      
      World.add(engine.current.world, [newFood]);
    }
  };

  const addNewFoodOnClick = (event) => {
    const rect = scene.current.getBoundingClientRect();
    const xPosition = (event.clientX - rect.left) / rect.width;
    const yPosition = (event.clientY - rect.top) / rect.height;
    addNewFood(xPosition, yPosition);
  };

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes:false,
        background: '#fffafa',
      }
    });

    // Add boundaries
    World.add(engine.current.world, [
      Bodies.rectangle(window.innerWidth * 0.5, window.innerHeight * 0.85, 1000 * 1.6, 50 * 3.2,{
        isStatic: false,
        render: {
          sprite: {
            texture: "https://res.cloudinary.com/dizm8txou/image/upload/v1716066209/about-us/foods-2/plate-mid_ut7say.webp",
            xScale: 1.62,
            yScale: 1.62
          },
        }
      }),
      Bodies.rectangle(window.innerWidth * 0.55, ch, 1000 * 1.4, 5,  { // Position it at the bottom of the canvas
        isStatic: true,
        render: {
          visible: false // Make the floor invisible
        }
      }),
    ]);

    // Run the engine and renderer
    Runner.run(engine.current);
    Render.run(render);
    // Set up mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        render: { visible: false }
      },
      startEvent: 'mousedown',
      endEvent: 'mouseup'
    });
    World.add(engine.current.world, mouseConstraint);
    Events.on(mouseConstraint, 'startdrag', () => setIsDragging(true));
    Events.on(mouseConstraint, 'enddrag', () => setIsDragging(false));

    // Ensure proper cleanup on unmount
    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);

  

  return (
    <div>
      <div onMouseUp={addNewFoodOnClick} ref={scene} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

export default NewComponent;
