import { useEffect, useRef, useState } from 'react';
import { Bodies, Engine, Render, Runner, World, Mouse, MouseConstraint, Events } from 'matter-js';
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
        density: 0.005,
        friction: 0.5,
        frictionAir: 0.025,
        restitution: 0.7,
        mass: 10,
      });
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
        wireframes: false,
        background: '#fffafa',
      }
    });

    // Add boundaries
    World.add(engine.current.world, [
      Bodies.rectangle(window.innerWidth * 0.5, window.innerHeight * 0.85, 1000 * 1.1, 50 * 1, {
        isStatic: false,
        render: {
          sprite: {
            texture: "/foods/plate-top.webp",
            xScale: 1.1,
            yScale: 1.1
          },
        }
      }),
      Bodies.rectangle(window.innerWidth * 0.5, ch, 1000 * 1, 50, { // Position it at the bottom of the canvas
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
