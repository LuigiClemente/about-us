import React, { useState, useEffect, useRef } from 'react';
import { Engine, Render, Runner, World, Bodies, Composite, Mouse, MouseConstraint, Events } from 'matter-js';
import { foodList } from './utils/data/foodList';

const GameComponent = () => {
    const [scene, setScene] = useState({
        mode: 'night',
        worldScale: Math.min(window.innerWidth, window.innerHeight) / 1500,
        furnitureScale: 1,
        food: [],
        mouseCategory: 11,
        nextFood: null,
        walls: false,
        platesCategory: 2,
        foodCategory: 8,
        standsCategory: 4,
        wallCategory: 3,
    });

    const interactionAreaRef = useRef(null);
    const engine = useRef(Engine.create({
        gravity: { x: 0, y: 3 },
        positionIterations: 12,
        velocityIterations: 12,
        constraintIterations: 10,
    }));    
    const runner = useRef(Runner.create());

    useEffect(() => {
        if (interactionAreaRef.current) {
            const render = Render.create({
                element: interactionAreaRef.current,
                engine: engine.current,
                options: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    background: '#fffafa',
                    wireframes: false,
                },
            });
                            
            Render.run(render);
            Runner.run(runner.current, engine.current);
    
            // Create Mouse
            const mouse = Mouse.create(render.canvas);
    
            // Create Mouse Constraint without collision filtering to see if it works generally
        const mouseConstraint = MouseConstraint.create(engine.current, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });
            // Event listener for detecting dragging of food objects
Events.on(mouseConstraint, "startdrag", (event) => {
    const foodObject = event.body;
    if (foodObject.label) {
        // Disable collision between the dragged food object and other bodies
        foodObject.collisionFilter.mask = 0;
    }
});

// Event listener for re-enabling collision when dragging ends
Events.on(mouseConstraint, "enddrag", (event) => {
    const foodObject = event.body;
    if (foodObject.label) {
        // Re-enable collision between the dragged food object and other bodies
        foodObject.collisionFilter.mask = scene.foodCategory | scene.wallCategory;
    }
});
            World.add(engine.current.world, mouseConstraint);

            return () => {
                Render.stop(render);
                Runner.stop(runner.current);
                World.clear(engine.current.world);
                Engine.clear(engine.current);
                if (render.canvas) {
                    render.canvas.remove();
                }
            };
        }
    }, [interactionAreaRef]); // Make sure the effect reruns if the ref changes
    

    const handleResize = () => {
        setScene(prev => ({
            ...prev,
            worldScale: Math.min(window.innerWidth, window.innerHeight) / 1500,
        }));
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const swapWorld = () => {
        setScene(prev => ({
            ...prev,
            mode: prev.mode === 'day' ? 'night' : 'day',
            furnitureScale: prev.mode === 'day' ? 4 : 2,
        }));
    };
    
    function createPlate(x, y, scale, sprite) {
        return Bodies.rectangle(window.innerWidth * x, window.innerHeight * y, 1000 * scale, 50 * scale, {
            isStatic: true,
            render: {
                sprite: {
                    texture: sprite,
                    xScale: scale,
                    yScale: scale
                }
            }
        });
    }
    
    function createStand(x, y, scale, sprite) {
        return Bodies.rectangle(window.innerWidth * x, window.innerHeight * y, 200 * scale, 300 * scale, {
            isStatic: true,
            render: {
                sprite: {
                    texture: sprite,
                    xScale: scale,
                    yScale: scale
                }
            }
        });
    }
    
function createFood(config, x, y) {
    const scale = scene.worldScale * config.scale;
    return Bodies.rectangle(window.innerWidth * x, window.innerHeight * y, config.width * scale, config.height * scale, {
        label: config.label,
        render: {
            sprite: {
                texture: config.sprite,
                xScale: scale,
                yScale: scale,        
            }
        },
        density: 0.005,
        friction: 0.5,
        frictionAir: 0.05,
        restitution: 0.7,
        isStatic: false,
                collisionFilter: {
            category: scene.foodCategory,
            mask: scene.foodCategory | scene.wallCategory,
        },
    });
}

    const addScene = () => {
        Composite.clear(engine.current.world);
        const plateSprite = '/foods/plate-top.webp';
        const standSprite = '/objects/tea-set-dummy-stand-2.webp';
        const plate = createPlate(0.5, 0.75, 1, plateSprite);
        const stand = createStand(0.5, 0.75, 1, standSprite);
        World.add(engine.current.world, [plate]);

        // Create collision filter for food objects
        const foodCollisionFilter = {
            category: scene.foodCategory,
            mask: scene.foodCategory | scene.wallCategory,
        };

        // Apply collision filter to existing food objects
        scene.food.forEach(food => {
            food.collisionFilter = foodCollisionFilter;
        });
    };

    const addNewFoodOnClick = (event) => {
      // Optionally, you can use the event to get the click position and use it
      const rect = interactionAreaRef.current.getBoundingClientRect();
      const xPosition = (event.clientX - rect.left) / rect.width;
      const yPosition = (event.clientY - rect.top) / rect.height;
      addNewFood(xPosition, yPosition);
  };

const addNewFood = (x = 0.5, y = 0.1) => {
    const foodConfig = foodList[scene.mode][Math.floor(Math.random() * foodList[scene.mode].length)];
    const newFood = createFood(foodConfig, x, y);
    
    // Apply collision filter to the food object
    newFood.collisionFilter = {
        category: scene.foodCategory,
        mask: scene.foodCategory | scene.wallCategory,
    };
    
    World.add(engine.current.world, newFood);
    setScene(prev => ({
        ...prev,
        food: [...prev.food, newFood],
        nextFood: newFood
    }));
};
    useEffect(() => {
        addScene();
        addNewFood();
    }, [scene.mode]); // Rerun when mode changes

    return (
        <div>
            <div ref={interactionAreaRef} id="container" onClick={addNewFoodOnClick}></div>
            <div className="controls">
                <input type="checkbox" name="switch" id="switch" />
                <div className="switch-guard"></div>
                <label className="switch" htmlFor="switch" onClick={swapWorld}>
                    <span className="before">Day Mode</span>
                    <span className="after">Night Mode</span>
                </label>
            </div>
        </div>
    );
};

export default GameComponent;

