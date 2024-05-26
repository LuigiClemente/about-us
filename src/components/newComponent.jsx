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
      const cw = window.innerWidth;
  
      if (foodConfig.pathData) {
        const vertices = Matter.Vertices.fromPath(foodConfig.pathData).map(vertex => ({
          x: vertex.x  * (cw < 600 ? scale * 0.8 : 1),
          y: vertex.y  * (cw < 600 ? scale * 0.8 : 1),
        }));
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
    const xPosition = (event.touches[0].clientX - rect.left) / rect.width;
    const yPosition = (event.touches[0].clientY - rect.top) / rect.height;
    addNewFood(xPosition, yPosition);
  };

  useEffect(() => {
    const updateWorldScale = () => {
      setSceneData((prev) => ({
        ...prev,
        worldScale: Math.min(window.innerWidth, window.innerHeight) / 1500,
      }));
    };

    updateWorldScale();
    window.addEventListener('resize', updateWorldScale);

    const cw = window.innerWidth;
    const ch = window.innerHeight;

    const plateScale = cw < 700 ? 0.61 : 1.62;  // Adjust scale based on window width

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

    World.add(engine.current.world, [
      Bodies.rectangle(window.innerWidth * 0.5, window.innerHeight * 0.85, 1000 * 1.6, cw < 700 ? 50 * 2 : 50 * 3.2, {
        isStatic: false,
        render: {
          sprite: {
            texture: "https://res.cloudinary.com/dizm8txou/image/upload/v1716066209/about-us/foods-2/plate-mid_ut7say.webp",
            xScale: plateScale,
            yScale: plateScale
          },
        }
      }),
      Bodies.rectangle(window.innerWidth * 0.55, ch, 1000 * 1.4, 5, {
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

    return () => {
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
      window.removeEventListener('resize', updateWorldScale);
    };
  }, []);

  const update = () => {
    const timeScale = 1;
    Engine.update(engine.current, 1000 / 60, timeScale);
    requestAnimationFrame(update);
  };

  useEffect(() => {
    update();
    return () => cancelAnimationFrame(update);
  }, []);

  return (
    <div>
      <div
        onMouseUp={addNewFoodOnClick}
        onTouchStart={addNewFoodOnTouch}
        ref={scene}
        style={{ width: '100vw', height: '100vh' }}
      />
    </div>
  );
}

export default NewComponent;
