import { useEffect, useRef, useState } from 'react';
import Matter, { Bodies, Engine, Render, Runner, World, Mouse, MouseConstraint, Events } from 'matter-js';
import { foodList } from './utils/data/foodList';

function NewComponent(props) {
  const scene = useRef();
  const engine = useRef(Engine.create());
  const [isDragging, setIsDragging] = useState(false);
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
    if (!isDragging) {
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
      });

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

  const addNewFoodOnTouch = (event) => {
    const rect = scene.current.getBoundingClientRect();
    const touch = event.touches[0];
    const xPosition = (touch.clientX - rect.left) / rect.width;
    const yPosition = (touch.clientY - rect.top) / rect.height;
    addNewFood(xPosition, yPosition);
  };

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;
    const pixelRatio = window.devicePixelRatio || 1;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        showAngleIndicator: false,
        showCollisions: false,
        showVelocity: false,
        background: '#fffafa',
        pixelRatio: pixelRatio,
      }
    });

    const plateWidth = Math.min(cw * 0.8, 1000);
    const plateHeight = plateWidth * 0.05;
    const plateX = cw * 0.5;
    const plateY = ch * 0.85;

    World.add(engine.current.world, [
      Bodies.rectangle(plateX, plateY, plateWidth * 1.6, plateHeight * 3.2, {
        isStatic: false,
        render: {
          sprite: {
            texture: "https://res.cloudinary.com/dizm8txou/image/upload/v1716066209/about-us/foods-2/plate-mid_ut7say.webp",
            xScale: 1.62,
            yScale: 1.62
          },
        }
      }),
      Bodies.rectangle(cw * 0.55, ch, cw * 1.4, 5, {
        isStatic: true,
        render: {
          visible: false
        }
      }),
    ]);

    Runner.run(engine.current);
    Render.run(render);

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

    render.canvas.addEventListener('mouseup', addNewFoodOnClick);
    render.canvas.addEventListener('touchstart', addNewFoodOnTouch);
    render.canvas.addEventListener('touchmove', (event) => {
      event.preventDefault();
    }, { passive: false });

    const update = () => {
      const timeScale = 0.8;
      Engine.update(engine.current, 1000 / 60, timeScale);
      requestAnimationFrame(update);
    };
    update();

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};

      if (render.canvas) {
        render.canvas.removeEventListener('mouseup', addNewFoodOnClick);
        render.canvas.removeEventListener('touchstart', addNewFoodOnTouch);
        render.canvas.removeEventListener('touchmove', (event) => {
          event.preventDefault();
        });
      }
    };
  }, []);

  return (
    <div>
      <div ref={scene} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

export default NewComponent;