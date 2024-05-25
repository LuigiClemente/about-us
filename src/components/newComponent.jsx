import { useEffect, useRef, useState } from 'react';
import { Bodies, Body, Engine, Render, Runner, World, Mouse, MouseConstraint, Events } from 'matter-js';
import { foodList } from './utils/data/foodList';

function NewComponent(props) {
  const scene = useRef();
  const engine = useRef(Engine.create());
  const [isDragging, setIsDragging] = useState(false);
  const [previewFood, setPreviewFood] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // console.log(previewFood)
  const addNewFood = (x, y) => {
      Body.setStatic(previewFood, false);
      // Body.setPosition(previewFood, { x: window.innerWidth * x, y: window.innerHeight * y });
      // Body.setVelocity(previewFood, { x: 0, y: 0 });
      previewFood.render.opacity = 1;
      // setPreviewFood(null);
      generateNewPreviewFood();
  };

  const addNewFoodOnClick = (event) => {
      console.log(previewFood)
    const rect = scene.current.getBoundingClientRect();
    const xPosition = (event.clientX - rect.left) / rect.width;
    const yPosition = (event.clientY - rect.top) / rect.height;
    addNewFood(xPosition, yPosition);
  };

  const generateNewPreviewFood = () => {
    const foodConfig = foodList[sceneData.mode][Math.floor(Math.random() * foodList[sceneData.mode].length)];
    const scale = sceneData.worldScale * foodConfig.scale;
    const newPreviewFood = Bodies.rectangle(0, 0, foodConfig.width * scale, foodConfig.height * scale, {
      isStatic: true,
      label: foodConfig.label,
      render: {
        sprite: {
          texture: foodConfig.sprite,
          xScale: scale,
          yScale: scale,
        },
        opacity: 0.5,
      },
    });
    setPreviewFood(newPreviewFood);
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
      },
    });

    World.add(engine.current.world, [
      Bodies.rectangle(window.innerWidth * 0.5, window.innerHeight * 0.85, 1000 * 1.1, 50 * 1, {
        isStatic: false,
        render: {
          sprite: {
            texture: "/foods-2/cutting-board.webp",
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      }),
      Bodies.rectangle(window.innerWidth * 0.5, ch, 1000 * 1, 50, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
    ]);

    Runner.run(engine.current);
    Render.run(render);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        render: { visible: false },
      },
    });

    World.add(engine.current.world, mouseConstraint);

    Events.on(mouseConstraint, 'startdrag', () => setIsDragging(true));
    Events.on(mouseConstraint, 'enddrag', () => setIsDragging(false));
    Events.on(mouseConstraint, 'mousemove', (event) => {
      const { x, y } = event.mouse.absolute;
      setMousePosition({ x, y });
    });

    generateNewPreviewFood();

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

  useEffect(() => {
    if (previewFood) {
      World.add(engine.current.world, previewFood);
    }
  }, [previewFood]);

  useEffect(() => {
    if (previewFood) {
      Body.setPosition(previewFood, { x: mousePosition.x, y: mousePosition.y });
    }
  }, [mousePosition]);

  // useEffect(() => {
  //   window.addEventListener('mouseup', addNewFoodOnClick);

  //   return () => {
  //     window.removeEventListener('mouseup', addNewFoodOnClick);
  //   };
  // }, []);

  return (
    <div>
      <div onClick={addNewFoodOnClick} ref={scene} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

export default NewComponent;
