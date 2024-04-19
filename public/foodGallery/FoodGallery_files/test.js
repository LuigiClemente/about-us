webpackJsonp(
    [1],
    Array(19).concat([
      function (e, t, n) {
        e.exports = '../objects/tea-set-dummy-stand-2.webp'
      },
      function (e, t, n) {
        n(335)
        var o = n(2)(n(243), n(492), null, null)
        e.exports = o.exports
      },
      function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = n(36),
          i = n.n(o),
          a = n(351),
          r = n.n(a),
          s = n(11),
          h = (n.n(s), 'ontouchstart' in window || window.DocumentTouch)
        t.default = {
          data: function () {
            return {
              userInputCounter: 0,
              unbindEvents: !1,
              world: !1,
              scene: {
                food: [],
                foodScale: 0.5,
                mode: 'night',
                defaultCategory: 1,
                platesCategory: 2,
                standsCategory: 4,
                foodCategory: 8,
                wallCategory: 3,
                furnitureScale: 4,
                worldScale: Math.min(window.innerWidth, window.innerHeight) / 1500,
                walls: !1,
                plate1: !1,
              },
              sceneConfig: {
                plateBottom: {
                  x: 0.5,
                  y: 0.8,
                  scale: 1,
                  isStatic: !1,
                  label: 'Plate Bottom',
                  sprite: n(396),
                  pathData:
                    '1024.3 131.5 0.5 131.5 0.5 0.5 45.5 0.5 178.5 21.5 842.5 21.5 984.5 0.5 1024.3 0.5 1024.3 127.5',
                },
                plateMid: {
                  x: 0.5,
                  y: h ? 0.7 : 0.5,
                  isStatic: !1,
                  scale: 0.6,
                  label: 'Plate Middle',
                  sprite: n(397),
                  pathData: '1023.4 4.8 1023.4 132 0.5 132 0.5 0.5 1023.4 0.5',
                },
                plateTop: {
                  x: 0.5,
                  y: h ? 0.6 : 0.2,
                  scale: 0.4,
                  isStatic: !1,
                  label: 'Plate Top',
                  sprite: n(398),
                  pathData: '1026.3 132.9 0.5 132.9 0.5 0.5 180 12.5 838.5 12.5 1026.3 0.5 1026.3 124.5',
                },
                standOne: {
                  x: 0.5,
                  y: h ? 0.75 : 0.55,
                  scale: 0.6,
                  label: 'Stand One',
                  sprite: n(235),
                  pathData: '347.1 265.7 0.5 265.7 0.5 0.5 347.1 0.5 347.1 255.5',
                },
                standTwo: {
                  x: 0.5,
                  y: h ? 0.65 : 0.25,
                  scale: 0.6,
                  label: 'Stand Two',
                  sprite: n(235),
                  pathData: '347.1 265.7 0.5 265.7 0.5 0.5 347.1 0.5 347.1 255.5',
                },
              },
              foodConfig: {
                night: [
                  {
                    label: 'Duck',
                    width: 610,
                    height: 366,
                    scale: 1.2,
                    sprite: n(413),
                    pathData: '607 30 487 262 281 360 43 329 2 207 33 134 237 9 425 9 501 89 594 9',
                  },
                  {
                    label: 'Foiegras',
                    width: 255,
                    height: 214,
                    scale: 1,
                    sprite: n(414),
                    pathData: '169 2 250 49 250 168 89 211 11 155 4 39',
                  },
                  {
                    label: 'Acc03',
                    width: 201,
                    height: 209,
                    scale: 1,
                    sprite: n(409),
                    pathData: '95 2 197 51 197 153 110 204 10 153 5 51',
                  },
                  {
                    label: 'Acc02',
                    width: 391,
                    height: 257,
                    scale: 1,
                    sprite: n(408),
                    pathData: '155 7 326 155 384 178 384 214 298 253 3 184 46 89 114 89',
                  },
                  {
                    label: 'tartare',
                    width: 412,
                    height: 284,
                    scale: 1,
                    sprite: n(422),
                    pathData: '212 5 360 32 405 91 405 201 360 251 251 279 132 273 47 237 4 185 4 97 61 44',
                  },
                  {
                    label: 'icecream',
                    width: 262,
                    height: 232,
                    scale: 1,
                    sprite: n(415),
                    pathData: '145 3 208 19 259 154 125 226 24 226 5 194 24 115 62 45',
                  },
                  {
                    label: 'acc01',
                    width: 383,
                    height: 257,
                    scale: 1,
                    sprite: n(407),
                    pathData: '281 18 351 92 323 194 55 174 43 87 112 23',
                  },
                  {
                    label: 'mushrooms',
                    width: 312,
                    height: 179,
                    scale: 1,
                    sprite: n(417),
                    pathData: '136 7 202 24 244 108 305 115 289 144 226 144 190 171 118 158 7 66',
                  },
                  {
                    label: 'lamb',
                    width: 494,
                    height: 340,
                    scale: 1,
                    sprite: n(416),
                    pathData: '490 22 179 313 70 335 2 212 92 121 194 149 274 134 449 2',
                  },
                  {
                    label: 'chantilly',
                    width: 338,
                    height: 374,
                    scale: 1,
                    sprite: n(412),
                    pathData: '139 2 150 72 264 109 325 206 300 222 295 314 198 366 120 366 41 335 10 147 41 65',
                  },
                  {
                    label: 'scallop',
                    width: 478,
                    height: 303,
                    scale: 0.8,
                    sprite: n(421),
                    pathData: '197 1 387 57 471 147 444 237 380 274 152 298 15 211 43 179 36 52 111 15',
                  },
                  {
                    label: 'Cauliflower',
                    width: 371,
                    height: 419,
                    scale: 1.2,
                    sprite: n(411),
                    pathData: '128 4 296 112 365 273 218 416 8 255 8 105',
                  },
                  {
                    label: 'onion-rings',
                    width: 386,
                    height: 199,
                    scale: 1,
                    sprite: n(418),
                    pathData: '155 1 341 40 378 102 341 171 92 194 8 146 8 72',
                  },
                  {
                    label: 'oyster',
                    width: 605,
                    height: 290,
                    scale: 0.7,
                    sprite: n(419),
                    pathData: '187 19 594 133 538 239 342 286 173 273 9 133 82 32',
                  },
                  {
                    label: 'prawn',
                    width: 354,
                    height: 294,
                    scale: 1,
                    sprite: n(420),
                    pathData: '214 16 344 166 273 275 141 287 46 243 1 135 46 36 141 1',
                  },
                  {
                    label: 'acc04',
                    width: 394,
                    height: 339,
                    scale: 1,
                    sprite: n(410),
                    pathData: '202 3 314 28 392 106 368 253 214 335 111 323 22 253 5 116 84 36',
                  },
                ],
                nightOld: [
                  {
                    label: 'Cauliflower',
                    width: 534,
                    height: 617,
                    scale: 0.8,
                    sprite: n(399),
                    pathData: '12.5 391.7 0.5 141.7 158.5 0.7 498.5 349.7 388.5 527.7',
                  },
                  {
                    label: 'Chives',
                    width: 566,
                    height: 275,
                    scale: 0.8,
                    sprite: n(400),
                    pathData:
                      '142.5 187.6 0.5 181.6 0.5 168.6 153 179.6 216 108.6 24 45.6 28 29.6 227 98.6 313 5.6 366 0.6 323 120.6 519 27.6 525 42.6 374 116.6 562 140.6 564 150.6 457 197.6',
                  },
                  {
                    label: 'Icecream',
                    width: 519,
                    height: 468,
                    sprite: n(401),
                    pathData: '0.5 377.5 45.5 146.5 227.5 0.5 365.5 13.5 439.5 205.5 479.5 270.5',
                  },
                  {
                    label: 'Puree 1',
                    width: 453,
                    height: 419,
                    sprite: n(402),
                    pathData: '0.5 328.7 2.5 181.7 195.5 0.7 428.5 187.7 402.5 345.7',
                  },
                  {
                    label: 'Puree 2',
                    width: 473,
                    height: 366,
                    sprite: n(403),
                    pathData: '0.5 213.5 75.5 44.5 228.5 0.5 366.5 37.5 453.5 138.5 449.5 257.5',
                  },
                  {
                    label: 'Puree 3',
                    width: 476,
                    height: 325,
                    sprite: n(404),
                    pathData: '0.5 215.5 1.6 95.5 215.7 0.5 385.5 37.5 446.3 109.5 446.3 180.5',
                  },
                  {
                    label: 'Puree 4',
                    width: 444,
                    height: 334,
                    sprite: n(405),
                    pathData: '1.5 229.5 0.5 101.5 184.5 0.5 380.5 70.5 414.5 122.5 420.5 231.5',
                  },
                  {
                    label: 'Puree 5',
                    width: 488,
                    height: 368,
                    sprite: n(406),
                    pathData: '0.5 262.5 26.5 60.5 163.5 0.5 430.5 85.5 466.5 165.5 469.5 300.5',
                  },
                ],
                day: [
                  {
                    label: 'Cake 01',
                    width: 569,
                    height: 425,
                    sprite: n(376),
                    pathData:
                      '105.2 418.4 0 230.7 0 230.7 28 213.7 3.6 197.4 101.8 91.5 379.9 82.5 381.9 14.8 441.7 0 472.6 26.8 454.3 96.5 531.1 140.6 563.5 288.3 505.6 395.8',
                  },
                  {
                    label: 'Cake 02',
                    width: 550,
                    height: 458,
                    sprite: n(377),
                    pathData:
                      '137.1 433.6 18.2 313.9 0.5 251.6 34.2 154.6 26.4 130.4 200 0.5 425.5 45.4 530.5 170.8 547.2 242 479.9 385.5',
                  },
                  {
                    label: 'Cake 03',
                    width: 541,
                    height: 381,
                    sprite: n(378),
                    pathData:
                      '85.4 337.2 11.5 255.8 0.5 209.2 40.4 141.5 60.1 40.1 150.2 0.5 498.4 72 506.4 139.7 541.5 216.2 517.3 284.4 430.1 350.1',
                  },
                  {
                    label: 'Cake 04',
                    width: 549,
                    height: 651,
                    scale: 0.4,
                    sprite: n(379),
                    pathData: '2.5 576.8 0.5 210.8 118.5 134.8 226.5 0.8 314.5 124.8 475.5 145.8 508.5 524.8',
                  },
                  {
                    label: 'Cake 05',
                    width: 571,
                    height: 530,
                    sprite: n(380),
                    pathData: '56.6 425.1 0.6 231.1 126.6 105.1 108.6 1.1 226.6 79.1 366.6 37.1 538.6 271.1 422.6 467.1',
                  },
                  {
                    label: 'Cake 06',
                    width: 504,
                    height: 382,
                    sprite: n(381),
                    pathData: '8.5 292.5 0.5 84.5 146.5 16.5 336.5 0.5 468.5 62.5 482.5 264.5',
                  },
                  {
                    label: 'Cake 07',
                    width: 568,
                    height: 448,
                    sprite: n(382),
                    pathData: '82.7 276.6 0.7 164.6 258.7 0.6 540.7 196.6 478.7 288.6',
                  },
                  {
                    label: 'Cake 08',
                    width: 508,
                    height: 653,
                    sprite: n(383),
                    pathData: '24.5 555.3 0.5 211.3 156.5 1.3 162.5 51.3 366.5 27.3 484.5 459.3 414.5 561.3',
                  },
                  {
                    label: 'Cake 09',
                    width: 461,
                    height: 324,
                    sprite: n(384),
                    pathData: '0.5 211.5 1.5 84.5 204.5 0.5 377.5 30.5 451.5 106.5 456.5 224.5',
                  },
                  {
                    label: 'Cake 10',
                    width: 527,
                    height: 404,
                    sprite: n(385),
                    pathData: '8.5 290.6 0.5 92.6 75.5 87.6 107.5 0.6 239.5 36.6 249.5 88.6 384.5 158.6 391.5 330.6',
                  },
                  {
                    label: 'Coronation Chicken Sandwich',
                    width: 531,
                    height: 375,
                    scale: 0.7,
                    sprite: n(386),
                    pathData: '0.5 304.5 14.5 168.5 388.5 0.5 494.5 44.5 506.5 170.5',
                  },
                  {
                    label: 'Cucumber Sandwich',
                    width: 422,
                    height: 334,
                    scale: 0.7,
                    sprite: n(387),
                    pathData: '18.5 280.5 0.5 165.5 33.5 142.5 47.5 104.5 291.5 0.5 400.5 50.5 395.5 179.5',
                  },
                  {
                    label: 'Egg Sandwich',
                    width: 582,
                    height: 290,
                    scale: 0.7,
                    sprite: n(388),
                    pathData: '45.6 273.5 0.6 149.5 106.6 18.5 223.6 0.5 302.6 23.5 556.6 78.5 564.6 229.5',
                  },
                  {
                    label: 'Elcair',
                    width: 563,
                    height: 383,
                    sprite: n(389),
                    pathData:
                      '0.5 306.6 3.5 189.6 196.5 108.6 204.5 15.6 300.5 0.6 336.5 81.6 423.5 71.6 541.5 161.6 520.5 263.6',
                  },
                  {
                    label: 'Macaroon',
                    width: 544,
                    height: 497,
                    scale: 0.4,
                    sprite: n(390),
                    pathData: '0.5 380.5 15.5 72.5 132.5 0.5 436.5 9.5 511.5 140.5 455.5 426.5',
                  },
                  {
                    label: 'Malabar Marshmallow',
                    width: 548,
                    height: 350,
                    sprite: n(391),
                    pathData:
                      '0.4 282.7 108.4 172.7 123.4 90.7 222.4 50.7 287.4 112.7 457.4 0.7 540.4 119.7 394.4 212.7 393.4 280.7 327.4 327.7',
                  },
                  {
                    label: 'Meringue',
                    width: 532,
                    height: 274,
                    sprite: n(392),
                    pathData: '418 209.5 527 76.5 373 0.5 196 16.5 1 160.5 169 235.5',
                  },
                  {
                    label: 'Salmon Sandwich',
                    width: 542,
                    height: 717,
                    scale: 0.6,
                    sprite: n(393),
                    pathData:
                      '11.4 610.6 0.5 436.6 173.6 445.6 171.6 200.6 121.6 106.6 190.7 186.6 185.7 449.6 228.7 351.6 326.4 309.6 319.2 105.6 319.2 33.6 397.7 0.6 417.7 32.6 338.7 102.6 340.7 312.6 497.7 297.6 496.7 477.6 398.7 554.6 407.7 606.6',
                  },
                  {
                    label: 'Scone 01',
                    width: 532,
                    height: 424,
                    sprite: n(394),
                    pathData: '0.5 329.6 37.5 87.6 259.5 0.6 492.5 128.6 502.5 301.6',
                  },
                  {
                    label: 'Scone 02',
                    width: 480,
                    height: 379,
                    sprite: n(395),
                    pathData: '0.5 310.5 40.5 79.5 158.5 0.5 433.5 36.5 469.5 258.5',
                  },
                ],
              },
            }
          },
          beforeDestroy: function () {
            this.unbindEvents()
          },
          methods: {
            trackGameEvent: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
              if (window.ga) {
                var n = {
                  hitType: 'event',
                  eventCategory: 'Game',
                  eventAction: 'click',
                  eventLabel: 'the Gallery (Food Drop) ' + e + ' ' + t,
                }
                window.ga('send', n)
              }
            },
            swapWorld: function () {
              function e() {
                for (var e = 0; e < t.scene.engine.world.bodies.length; e++)
                  r.a.Composite.remove(t.scene.engine.world, t.scene.engine.world.bodies[e])
              }
              var t = this
              ;(t.userInputCounter += 1),
                t.$emit('game-actions', { click: t.userInputCounter }),
                r.a.Composite.remove(t.scene.engine.world, t.scene.walls[0]),
                r.a.Composite.remove(t.scene.engine.world, t.scene.walls[1]),
                r.a.Composite.remove(t.scene.engine.world, t.scene.plate1),
                'day' === t.scene.mode
                  ? ((t.scene.mode = 'night'), (t.scene.furnitureScale = 4))
                  : ((t.scene.mode = 'day'), (t.scene.furnitureScale = 2)),
                t.scene && t.scene.mode && t.trackGameEvent(t.scene.mode, 'switch'),
                setTimeout(function () {
                  e(),
                    h
                      ? t.world.add(t.scene.engine.world, [t.scene.walls[1]])
                      : t.world.add(t.scene.engine.world, [t.scene.walls[0]]),
                    t.addScene(),
                    (t.scene.nextFood = t.getNewFood()),
                    t.scene.food.push(t.scene.nextFood),
                    t.previewImg()
                }, 1e3)
            },
            previewImg: function () {
              var e = this,
                t = e.foodConfig[e.scene.mode][e.scene.food[e.scene.food.length - 1].array_id]
              e.scene.foodPreview.src = t.sprite
              var n = e.scene.foodScale
              t.scale && (n = t.scale),
                (e.scene.foodPreview.width = t.width * e.scene.worldScale * n),
                (e.scene.foodPreview.height = t.height * e.scene.worldScale * n)
            },
            addScene: function () {
              var e = this
              e.scene.plate1 = e.getPlate(e.sceneConfig.plateBottom)
              var t = e.getStand(e.sceneConfig.standOne),
                n = e.getPlate(e.sceneConfig.plateMid),
                o = e.getStand(e.sceneConfig.standTwo),
                i = e.getPlate(e.sceneConfig.plateTop)
              'day' === e.scene.mode
                ? e.world.add(e.scene.engine.world, [e.scene.plate1, t, n, o, i])
                : e.world.add(e.scene.engine.world, [n])
            },
            getPlate: function (e) {
              var t,
                n = this
              return r.a.Bodies.rectangle(
                window.innerWidth * e.x,
                window.innerHeight * e.y,
                1e3 * n.scene.worldScale * e.scale * n.scene.furnitureScale,
                50 * n.scene.worldScale * e.scale * n.scene.furnitureScale,
                ((t = {
                  density: 1,
                  friction: 1,
                  firctionAir: 1,
                  frictionStatic: 1,
                  sleepThreshold: 1,
                  restitution: 0,
                  inertia: 0,
                }),
                i()(t, 'restitution', 0),
                i()(t, 'isStatic', e.isStatic),
                i()(t, 'collisionFilter', {
                  mask: n.scene.platesCategory | n.scene.foodCategory | n.scene.standsCategory | n.scene.wallCategory,
                }),
                i()(t, 'render', {
                  sprite: {
                    texture: e.sprite,
                    xScale: 1 * n.scene.worldScale * e.scale * n.scene.furnitureScale,
                    yScale: 1 * n.scene.worldScale * e.scale * n.scene.furnitureScale,
                    yOffset: 0.15,
                  },
                }),
                t),
              )
            },
            getStand: function (e) {
              var t,
                n = this,
                o = r.a.Bodies.rectangle(
                  window.innerWidth * e.x,
                  window.innerHeight * e.y,
                  200 * n.scene.worldScale * e.scale * n.scene.furnitureScale,
                  300 * n.scene.worldScale * e.scale * n.scene.furnitureScale,
                  ((t = {
                    density: 1,
                    friction: 1e6,
                    firctionAir: 1e6,
                    frictionStatic: 1e6,
                    sleepThreshold: 1,
                    restitution: 0,
                    inertia: -100,
                  }),
                  i()(t, 'restitution', 0),
                  i()(t, 'collisionFilter', {
                    mask: n.scene.standsCategory | n.scene.wallCategory,
                  }),
                  i()(t, 'render', {
                    sprite: {
                      texture: e.sprite,
                      xScale: 1 * n.scene.worldScale * e.scale * n.scene.furnitureScale,
                      yScale: 1 * n.scene.worldScale * e.scale * n.scene.furnitureScale,
                      yOffset: 0,
                    },
                  }),
                  t),
                )
              if (e.pathData) {
                var a = e.pathData.split(' ')
                a = a.map(function (t) {
                  return (t = Math.max(t, 0)), (t * n.scene.worldScale * 1 * e.scale * n.scene.furnitureScale).toFixed(0)
                })
                var s = r.a.Vertices.fromPath(a.join(' '))
                r.a.Body.setVertices(o, s)
              }
              return o
            },
            getNewFood: function () {
              var e = this,
                t = Math.floor(Math.random() * e.foodConfig[e.scene.mode].length),
                n = e.scene.foodScale
              e.foodConfig[e.scene.mode][t].scale && (n = e.foodConfig[e.scene.mode][t].scale)
              var o = r.a.Bodies.rectangle(
                  0.5 * window.innerWidth,
                  0.1 * window.innerHeight,
                  e.foodConfig[e.scene.mode][t].width * e.scene.worldScale * e.scene.foodScale,
                  e.foodConfig[e.scene.mode][t].height * e.scene.worldScale * e.scene.foodScale,
                  {
                    density: 1,
                    friction: 1,
                    array_id: t,
                    firctionAir: 1,
                    frictionStatic: 1e3,
                    restitution: 0.001,
                    sleepThreshold: 100,
                    chamfer: 100,
                    interaction_type: 'food',
                    label: e.foodConfig[e.scene.mode][t].label,
                    collisionFilter: {
                      mask: e.scene.platesCategory | e.scene.foodCategory | e.scene.wallCategory,
                    },
                    render: {
                      sprite: {
                        texture: e.foodConfig[e.scene.mode][t].sprite,
                        xScale: 1 * e.scene.worldScale * n,
                        yScale: 1 * e.scene.worldScale * n,
                      },
                    },
                  },
                ),
                i = e.foodConfig[e.scene.mode][t].pathData.split(' ')
              i = i.map(function (t) {
                return (t = Math.max(t, 0)), (t * n * e.scene.worldScale).toFixed(0)
              })
              var a = r.a.Vertices.fromPath(i.join(' '))
              return r.a.Body.setVertices(o, a), o
            },
          },
          mounted: function () {
            function e(e) {
              p && p.update()
              var t = E.mouse,
                n = (C.allBodies(d.scene.engine.world), { x: t.position.x - 2, y: t.position.y - 2 }),
                o = t.position
              b = B.ray(d.scene.engine.world.bodies, n, o)
            }
            function t() {}
            function n() {
              ;(g = window.innerWidth),
                (m = window.innerHeight),
                g < 640 &&
                  Math.max(g, m) / Math.min(g, m) < 1.35 &&
                  setTimeout(function () {
                    n()
                  }, 300),
                d.scene.render.canvas &&
                  ((d.scene.render.canvas.width = g || d.scene.render.options.width || d.scene.render.canvas.width),
                  (d.scene.render.canvas.height = m || d.scene.render.options.height || d.scene.render.canvas.height)),
                t()
            }
            function o(e) {
              if (((d.userInputCounter += 1), d.$emit('game-actions', { click: d.userInputCounter }), b < 1)) {
                ;(document.body.style.cursor = '-webkit-grab'), (d.scene.foodPreview.style.opacity = 0)
                var t = e.mouse.position.x,
                  n = e.mouse.position.y
                w.setPosition(d.scene.nextFood, { x: t, y: n }),
                  d.world.add(d.scene.engine.world, d.scene.nextFood),
                  (d.scene.nextFood = d.getNewFood()),
                  d.scene.food.push(d.scene.nextFood),
                  d.scene && d.scene.mode && d.trackGameEvent(d.scene.mode, 'food')
              } else
                (document.body.style.cursor = '-webkit-grabbing'),
                  d.scene && d.scene.mode && d.trackGameEvent(d.scene.mode, 'throw')
            }
            function a(e) {
              ;(v = v < d.scene.food.length - 1 ? v + 1 : 0), d.previewImg()
            }
            function s(e) {
              ;(e = e || window.event),
                (A = e.clientX || e.touches[0].pageX),
                (f = e.clientY || e.touches[0].pageY),
                (d.scene.foodPreview.style.left = A - d.scene.foodPreview.width / 2 + 'px'),
                (d.scene.foodPreview.style.top = f - d.scene.foodPreview.height / 2 + 'px'),
                b.length > 0
                  ? ((d.scene.foodPreview.style.opacity = 0), (document.body.style.cursor = '-webkit-grab'))
                  : ((d.scene.foodPreview.style.opacity = 0.5), (document.body.style.cursor = '-webkit-grabbing'))
            }
            function l() {
              k.off(E, 'mousedown', o),
                k.off(E, 'mouseup', a),
                k.off(d.scene.render, 'afterRender', e),
                d.scene.render.canvas.removeEventListener('mousemove', s, !1),
                window.removeEventListener('resize', n, !1)
            }
            var c,
              d = this,
              u = d.$refs.interactionArea
            d.scene.foodPreview = d.$refs.foodPreview
            var p,
              g = window.innerWidth,
              m = window.innerHeight,
              A = 0,
              f = 0,
              v = 1,
              b = [],
              y = r.a.Engine
            d.world = r.a.World
            var w = r.a.Body
            d.Bodies = r.a.Bodies
            var C = (r.a.Common, r.a.Composites, r.a.Composite),
              k = r.a.Events,
              B = (r.a.Constraint, r.a.Query),
              x = r.a.MouseConstraint,
              I = (r.a.Mouse, r.a.Vertices, r.a.Svg, r.a.Render)
            ;(d.scene.engine = y.create({
              positionIterations: 10,
              velocityIterations: 10,
            })),
              (d.scene.engine.world.gravity.x = 0),
              (d.scene.engine.world.gravity.y = 3)
            d.scene.render = I.create({
              element: u,
              engine: d.scene.engine,
              options:
                ((c = {
                  width: window.innerWidth,
                  height: window.innerHeight,
                  background: '#fffafa',
                  showAngleIndicator: !1,
                  wireframes: !1,
                  showBounds: !1,
                  showDebug: !1,
                  showBroadphase: !1,
                }),
                i()(c, 'showBounds', !1),
                i()(c, 'showVelocity', !1),
                i()(c, 'showCollisions', !1),
                i()(c, 'showSeparations', !1),
                i()(c, 'showAxes', !1),
                i()(c, 'showPositions', !1),
                i()(c, 'showAngleIndicator', !1),
                i()(c, 'showIds', !1),
                i()(c, 'showShadows', !1),
                i()(c, 'showVertexNumbers', !1),
                i()(c, 'showConvexHulls', !1),
                i()(c, 'showInternalEdges', !1),
                i()(c, 'showMousePosition', !1),
                c),
            })
            var E = x.create(d.scene.engine, {
              element: d.scene.render.canvas,
              constraint: { stiffness: 0.8, render: { visible: !1 } },
            })
            ;(E.collisionFilter.mask =
              d.scene.defaultCategory | d.scene.platesCategory | d.scene.standsCategory | d.scene.wallCategory),
              d.world.add(d.scene.engine.world, E),
              (d.scene.render.mouse = E.mouse),
              d.scene.render.mouse.element.removeEventListener('mousewheel', d.scene.render.mouse.mousewheel),
              d.scene.render.mouse.element.removeEventListener('DOMMouseScroll', d.scene.render.mouse.mousewheel),
              d.addScene(),
              (d.scene.nextFood = d.getNewFood()),
              d.scene.food.push(d.scene.nextFood),
              d.previewImg()
            ;(d.scene.walls = [
              r.a.Bodies.rectangle(window.innerWidth / 2, m, window.innerWidth / 1.5, 30, {
                isStatic: !0,
                collisionFilter: { mask: d.scene.defaultCategory },
                render: { opacity: 0 },
              }),
              r.a.Bodies.rectangle(window.innerWidth / 2, m - 60, window.innerWidth / 1.5, 30, {
                isStatic: !0,
                collisionFilter: { mask: d.scene.defaultCategory },
                render: { opacity: 0 },
              }),
            ]),
              'day' === d.scene.mode ? (d.scene.furnitureScale = 2) : (d.scene.furnitureScale = 4),
              h
                ? d.world.add(d.scene.engine.world, [d.scene.walls[1]])
                : d.world.add(d.scene.engine.world, [d.scene.walls[0]]),
              y.run(d.scene.engine),
              I.run(d.scene.render),
              (function () {
                k.on(E, 'mousedown', o),
                  k.on(E, 'mouseup', a),
                  k.on(d.scene.render, 'afterRender', e),
                  d.scene.render.canvas.addEventListener('mousemove', s, !1),
                  window.addEventListener('resize', n, !1)
              })(),
              (d.unbindEvents = l)
          },
        }
      },
      function (e, t, n) {
        'use strict'
        Object.defineProperty(t, '__esModule', { value: !0 })
        var o = n(23),
          i = n(242),
          a = n.n(i),
          r = n(43),
          s = n(241)
        ;(o.a.config.productionTip = !0),
          new o.a({
            el: '#app',
            store: r.a,
            router: s.a,
            template: '<App/>',
            components: { App: a.a },
          })
      },
      function (e, t, n) {
        e.exports = '../foods/cake-1.webp'
      },
      function (e, t, n) {
        e.exports = '../foods/cake-2.webp'
      },
      function (e, t, n) {
        e.exports = '../foods/cake-3.webp'
      },
      function (e, t, n) {
        e.exports = '../foods/cake-4.webp'
      },
      function (e, t, n) {
        e.exports = '../foods/cake-5.webp'
      },
      function (e, t, n) {
        e.exports = '../foods/cake-6.webp'
      },
      function (e, t, n) {
        e.exports = '../foods/cake-7.webp'
      },
      function (e, t, n) {
        e.exports = '../foods/cake-8.webp'
      },
      function (e, t, n) {
        n(333)
        var o = n(2)(n(261), n(490), 'data-v-46007155', null)
        e.exports = o.exports
      },
      function (e, t) {
        e.exports = {
          render: function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('div', { staticClass: 'gallery' }, [
              n('div', { ref: 'interactionArea', attrs: { id: 'container' } }),
              e._v(' '),
              n('img', {
                ref: 'foodPreview',
                attrs: { src: '', id: 'food-preview' },
              }),
              e._v(' '),
              n('div', { staticClass: 'controls' }, [
                n('input', {
                  attrs: { type: 'checkbox', name: 'switch', id: 'switch' },
                }),
                e._v(' '),
                n('div', { staticClass: 'switch-guard' }),
                e._v(' '),
                n(
                  'label',
                  {
                    staticClass: 'switch',
                    attrs: { for: 'switch' },
                    on: { click: e.swapWorld },
                  },
                  [
                    n('span', { staticClass: 'before' }, [
                      n(
                        'svg',
                        {
                          attrs: {
                            width: '128px',
                            height: '77px',
                            viewBox: '0 0 128 77',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                          },
                        },
                        [
                          n('defs'),
                          e._v(' '),
                          n(
                            'g',
                            {
                              attrs: {
                                id: 'Page-1',
                                stroke: 'none',
                                'stroke-width': '1',
                                fill: 'none',
                                'fill-rule': 'evenodd',
                              },
                            },
                            [
                              n(
                                'g',
                                {
                                  attrs: {
                                    id: 'Artboard',
                                    transform: 'translate(0.000000, -26.000000)',
                                    fill: '#231F20',
                                    'fill-rule': 'nonzero',
                                  },
                                },
                                [
                                  n(
                                    'g',
                                    {
                                      attrs: {
                                        id: 'the-gallery-web_teapot',
                                        transform: 'translate(0.000000, 26.000000)',
                                      },
                                    },
                                    [
                                      n('path', {
                                        attrs: {
                                          d: 'M127.32,40.55 C127.32,40.55 125.78,28.13 115.82,25.13 C115.82,25.13 108.28,22.5 94.07,26.46 C92.28,22.46 89.45,21 86.45,20.71 C87.24,17 85.61,14.25 78.24,14.17 C76.11,8.67 73.57,2 65.45,0.21 C57.33,-1.58 52.2,8.67 51.07,15.17 C48.7,15.17 42.7,15.59 42.65,19.3 C42.8859991,20.0368982 43.2705852,20.7175817 43.78,21.3 C43.78,21.3 34.7,22.21 31.24,33.3 C30.2817894,36.8868258 29.8175066,40.5876314 29.86,44.3 C29.86,44.3 23.2,44.85 23.32,36.3 C23.44,27.75 18.32,18.97 13.65,15.39 C13.0317089,14.7029093 12.1177204,14.3596973 11.2,14.47 C11.2,14.47 -0.6,20.67 0.03,24.34 C0.2,25.34 1.76,25.4 1.76,25.4 C1.76,25.4 6.97,24.84 8.2,29.17 C9.43,33.5 8.3,40.59 8.3,40.59 C8.3,40.59 6.3,54.5 26.15,66.09 C31.07,68.67 33.32,69.92 36.49,68.34 C36.8273961,68.1400561 37.2196051,68.0525094 37.61,68.09 C37.61,68.09 39.4,74.92 53.03,75.71 C66.66,76.5 83.03,75.71 83.03,75.71 C83.03,75.71 89.45,75.71 92.91,71.59 C94.8101435,69.3395925 96.547859,66.9569171 98.11,64.46 C99.0255012,64.4444917 99.9304244,64.2614735 100.78,63.92 C101.7,63.42 105.2,63.21 105.2,63.21 C105.2,63.21 119.36,63 123.99,56.3 C128.62,49.6 127.32,40.55 127.32,40.55 Z M71.41,14.33 C66.8015032,15.2333359 62.090321,15.495816 57.41,15.11 C57.79,6.17 61.79,5.33 63.32,5.33 C70.2,5.67 71.66,14.33 71.41,14.33 Z M117.57,51.13 C112.74,57.34 104.78,55.21 100.94,54.75 C101.32,46 98.19,35.75 98.19,35.75 C113.24,25.96 118.57,37.67 118.57,37.67 C118.57,37.67 122.36,44.92 117.57,51.13 Z',
                                          id: 'Shape',
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                    ]),
                    e._v(' '),
                    n('span', { staticClass: 'after' }, [
                      n(
                        'svg',
                        {
                          attrs: {
                            width: '67px',
                            height: '113px',
                            viewBox: '0 0 67 113',
                            version: '1.1',
                            xmlns: 'http://www.w3.org/2000/svg',
                            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                          },
                        },
                        [
                          n('defs'),
                          e._v(' '),
                          n(
                            'g',
                            {
                              attrs: {
                                id: 'Page-1',
                                stroke: 'none',
                                'stroke-width': '1',
                                fill: 'none',
                                'fill-rule': 'evenodd',
                              },
                            },
                            [
                              n(
                                'g',
                                {
                                  attrs: {
                                    id: 'Artboard',
                                    transform: 'translate(-31.000000, -8.000000)',
                                    fill: '#231F20',
                                    'fill-rule': 'nonzero',
                                  },
                                },
                                [
                                  n(
                                    'g',
                                    {
                                      attrs: {
                                        id: 'the-gallery-web_forks',
                                        transform: 'translate(31.000000, 7.000000)',
                                      },
                                    },
                                    [
                                      n('path', {
                                        attrs: {
                                          d: 'M65.04,99.68 L28.44,43.08 C28.44,43.08 26.79,40.08 27.71,38.15 C28.7606677,36.1778754 28.7606677,33.8121246 27.71,31.84 C25.57,27.9 23.2866667,24.05 20.86,20.29 L9.07,2.08 C8.93419803,1.79078548 8.59284971,1.66222572 8.3,1.79 C8.03288539,1.96831132 7.95354568,2.32534003 8.12,2.6 L22.55,26.97 C22.6720907,27.4174502 22.4704881,27.8901248 22.0630403,28.1117193 C21.6555925,28.3333137 21.1492507,28.2456614 20.84,27.9 L6.05,1.35 C5.97621952,1.15227592 5.79401473,1.01565191 5.58353787,1.00022915 C5.37306101,0.98480638 5.17288696,1.09341144 5.0710727,1.27826876 C4.96925843,1.46312607 4.98446383,1.69035614 5.11,1.86 L19.25,28.76 C19.4502141,29.1414797 19.3078584,29.6130328 18.93,29.82 C18.7477346,29.921752 18.5319678,29.9451435 18.3321312,29.8848155 C18.1322946,29.8244874 17.9655145,29.6856101 17.87,29.5 L3.07,2.96 C2.93419803,2.67078548 2.59284971,2.54222572 2.3,2.67 C2.03288539,2.84831132 1.95354568,3.20534003 2.12,3.48 L16.26,30.37 C16.5354182,30.6778454 16.5932152,31.1233513 16.4054681,31.4912847 C16.2177211,31.8592182 15.8230716,32.0738521 15.4121827,32.0314926 C15.0012939,31.9891331 14.6587337,31.6984984 14.55,31.3 L2.04,5.89 C1.90016695,5.59944294 1.55568589,5.47136665 1.26,5.6 C1.12891362,5.68392189 1.03705882,5.81700959 1.00508834,5.96933953 C0.973117857,6.12166947 1.0037149,6.28045694 1.09,6.41 L9.91,26.18 C11.7366667,30.2666667 13.7166667,34.2833333 15.85,38.23 C16.9092042,40.1954009 18.8778198,41.5040616 21.1,41.72 C23.23,41.99 24.83,45.02 24.83,45.02 L50.24,107.02 C50.6797103,108.550117 51.555332,109.919145 52.76,110.96 C55.8119796,113.641871 60.3470028,113.75158 63.5250929,111.220423 C66.7031829,108.689266 67.6109831,104.244677 65.68,100.67 C65.4878176,100.326798 65.2740549,99.9961334 65.04,99.68 Z',
                                          id: 'Shape',
                                        },
                                      }),
                                      e._v(' '),
                                      n('path', {
                                        attrs: {
                                          d: 'M2.65,99.68 L39.25,43.08 C39.25,43.08 40.91,40.08 39.98,38.15 C38.9257711,36.1787663 38.9257711,33.8112337 39.98,31.84 C42.1066667,27.9 44.3866667,24.05 46.82,20.29 L58.62,2.08 C58.755802,1.79078548 59.0971503,1.66222572 59.39,1.79 C59.6571146,1.96831132 59.7364543,2.32534003 59.57,2.6 L45.13,26.97 C44.8545818,27.2778454 44.7967848,27.7233513 44.9845319,28.0912847 C45.1722789,28.4592182 45.5669284,28.6738521 45.9778173,28.6314926 C46.3887061,28.5891331 46.7312663,28.2984984 46.84,27.9 L61.64,1.36 C61.7014009,1.21731569 61.81747,1.10522347 61.9622074,1.04883227 C62.1069448,0.992441073 62.2682535,0.996464034 62.41,1.06 C62.6771146,1.23831132 62.7564543,1.59534003 62.59,1.87 L48.45,28.76 C48.2967981,29.0063078 48.2929295,29.3172857 48.4399566,29.5673284 C48.5869838,29.8173712 48.8606194,29.9651743 49.1503409,29.9510396 C49.4400624,29.9369049 49.6980109,29.7631673 49.82,29.5 L64.62,2.96 C64.712889,2.78136718 64.8940215,2.66585937 65.0951666,2.65698724 C65.2963117,2.64811512 65.4869106,2.74722656 65.5951666,2.91698726 C65.7034227,3.08674795 65.7128891,3.3013672 65.62,3.48 L51.43,30.37 C51.3079093,30.8174502 51.5095119,31.2901248 51.9169597,31.5117193 C52.3244075,31.7333137 52.8307493,31.6456614 53.14,31.3 L65.67,5.88 C65.7507055,5.6901728 65.9325014,5.56290439 66.1384857,5.55203096 C66.34447,5.54115754 66.5386546,5.64857883 66.638897,5.82885421 C66.7391393,6.0091296 66.7279259,6.23076277 66.61,6.4 L57.78,26.18 C55.96,30.2666667 53.98,34.2833333 51.84,38.23 C50.7755869,40.2103329 48.7888797,41.5247894 46.55,41.73 C44.43,42 42.82,45.03 42.82,45.03 L17.41,107.03 C16.9704134,108.557733 16.0987975,109.925927 14.9,110.97 C11.8480204,113.651871 7.31299716,113.76158 4.13490714,111.230423 C0.95681712,108.699266 0.0490168638,104.254677 1.98,100.68 C2.18131278,100.332428 2.40512295,99.9983835 2.65,99.68 Z',
                                          id: 'Shape',
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                    ]),
                  ],
                ),
              ]),
            ])
          },
          staticRenderFns: [],
        }
      },
    ]),
    [267],
  )
  