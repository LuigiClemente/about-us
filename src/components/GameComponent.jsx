import React, { useState, useEffect, useRef } from 'react';
import Matter, { Engine, Render, Runner, World, Bodies, Composite, Mouse, MouseConstraint } from 'matter-js';
import { foodList } from './utils/data/foodList';

const GameComponent = () => {
    const [scene, setScene] = useState({
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

    const interactionAreaRef = useRef(null);
    const engine = useRef(Engine.create({
        gravity: { x: 0, y: 3 },
        positionIterations: 12,
        velocityIterations: 12,
        constraintIterations: 10,
    }));    
    const runner = useRef(Runner.create());
    const renderRef = useRef(null);
    const plateSprite = '/foods/plate-top.webp';
    const plate = createPlate(0.5, 0.85, 1.4, plateSprite);
    
    
    useEffect(() => {
        if (interactionAreaRef.current && !renderRef.current) {
            const render = Render.create({
                element: interactionAreaRef.current,
                engine: engine.current,
                options: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    background: '#fffafa',
                    wireframes: true,
                },
            });
    
            Render.run(render);
            Runner.run(runner.current, engine.current);
            renderRef.current = render;
    
            const mouse = Mouse.create(render.canvas);
            const mouseConstraint = MouseConstraint.create(engine.current, {
                mouse: mouse,
                constraint: { stiffness: 0.8, render: { visible: true }, },

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
                renderRef.current = null;
            };
        }
    }, [interactionAreaRef]);

    
    useEffect(() => {
        const handleResize = () => {
            setScene(prev => ({
                ...prev,
                worldScale: Math.min(window.innerWidth, window.innerHeight) / 1500,
            }));
            // Update render dimensions
            if (renderRef.current) {
                renderRef.current.canvas.width = window.innerWidth;
                renderRef.current.canvas.height = window.innerHeight;
                renderRef.current.options.width = window.innerWidth;
                renderRef.current.options.height = window.innerHeight;
            }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const swapWorld = () => {
        console.log(scene.mode)
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
                    
                },
                
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
            isStatic: false,                
            label: config.label,
            render: {
                sprite: {
                    texture: config.sprite,
                    xScale: scale,
                    yScale: scale,        
                }
            },
            collisionFilter: {
                category: scene.foodCategory,
                mask: scene.foodCategory | scene.wallCategory // Only collide with other food and walls
            },
            density: 0.005,  // Lower for lighter objects
            friction: 0.5,   // Friction with surfaces
            frictionAir: 0.05, // Air friction
            restitution: 0.7, // Bounciness
        });
    }

    const addScene = () => {
        Composite.clear(engine.current.world);
        World.add(engine.current.world, [plate]);
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
    World.add(engine.current.world, newFood);
    setScene(prev => ({
        ...prev,
        food: [...prev.food, newFood], // Keep track of food added
        nextFood: newFood
    }));
    };

    useEffect(() => {
        addScene();
        addNewFood();
    }, [scene.mode]); // Rerun when mode changes

    useEffect(() => {
        // Recalculate positions or re-add bodies if necessary when the scene is updated
            // Potentially remove and re-add bodies to reset their positions based on the new scale
            World.clear(engine.current.world, true); // Clear all bodies without clearing engine settings
            addScene(); // Re-add all bodies with updated positions and scales
            addNewFood(); // Update this function to reposition foods
    }, [window.innerWidth]); // React on width changes

    return (
        <div>
            <div ref={interactionAreaRef} id="container" className='absolute' onClick={addNewFoodOnClick}></div>
            <div className="absolute right-0 controls">
                <input
                    type="checkbox"
                    name="switch"
                    id="switch"
                    onChange={swapWorld}  // Binding the mode switch function
                    checked={scene.mode === 'day'}  // Control the checked state based on the mode
                />
                <div className="switch-guard"></div>
                <label className="switch" htmlFor="switch">
                    <span className="before">Day Mode</span>
                    <span className="after">Night Mode</span>
                </label>
            </div>
        </div>
    );
};

export default GameComponent;

