import { useEffect, useRef, useState } from 'react';
import { Bodies, Engine, Render, Runner, World, Mouse, MouseConstraint } from 'matter-js';
import { foodList } from './utils/data/foodList';

function NewComponent(props) {
  const scene = useRef();
  const engine = useRef(Engine.create());
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

  function createFood(config, x, y) {
    const scale = scene.worldScale * config.scale;
    return Bodies.rectangle(window.innerWidth * x, window.innerHeight * y, config.width * scale, config.height * scale, {
        isStatic: false,                
        label: config.label,
        render: {
            sprite: {
                texture: config.sprite,
                xScale: scale,
                yScale: scale,        
            }
        },
        mass: 10,
        restitution: 0.9,
        friction: 0.005,
    });
}

    const addNewFood = (x = 0.5, y = 0.1) => {
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
            density: 0.005,  // Lower for lighter objects
            friction: 0.5,   // Friction with surfaces
            frictionAir: 0.02, // Air friction
            restitution: 0.7, // Bounciness
            mass:10,
        });

        World.add(engine.current.world, [newFood]);
    };

    
    const addNewFoodOnClick = (event) => {
        console.log('tesdt')        // Optionally, you can use the event to get the click position and use it
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
        Bodies.rectangle(window.innerWidth * 0.5, window.innerHeight * 0.85, 1000 * 1.4, 50 * 1.4, {
            isStatic: true,
            render: {
                sprite: {
                    texture: "/foods/plate-top.webp",
                    xScale: 1.4,
                    yScale: 1.4
                    
                },
                
            }}),
    ]);

    // // Add a ball
    // const ball = Bodies.circle(1000, 100, 10 + Math.random() * 30, {
    //   mass: 10,
    //   restitution: 0.9,
    //   friction: 0.005,
    //   render: {
    //     fillStyle: '#6000ff'
    //   },
    //   isStatic: false
    // });
    // World.add(engine.current.world, [ball]);

    // Run the engine and renderer
    Runner.run(engine.current);
    Render.run(render);

    // Set up mouse interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        render: { visible: false }
      }
    });
    World.add(engine.current.world, mouseConstraint);

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
      <div onClick={addNewFoodOnClick} ref={scene} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

export default NewComponent;
