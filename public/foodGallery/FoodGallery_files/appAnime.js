webpackJsonp(
  [1],
  Array(19).concat([
    function (e, t, n) {
    },,,,,,,,,,,,,,,,,,,,,,,,
    function (e, t, n) {
    },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    function (e, t, n) {
      e.exports = '../objects/tea-set-dummy-stand-2.webp'
    },
    function (e, t, n) {
    },,,,,
    function (e, t, n) {
      'use strict'
      ;(function (e) {
        function o(e) {
          window.ga && e && (window.ga('set', 'page', e), window.ga('send', 'pageview'))
        }
        var i = n(23),
          a = n(502),
          r = n(504),
          s = n.n(r),
          h = n(15),
          l = n.n(h),
          c = n(236),
          d = n.n(c),
          u = n(470),
          p = n.n(u),
          g = n(461),
          m = n.n(g),
          A = n(463),
          f = n.n(A),
          v = n(477),
          b = n.n(v),
          y = n(476),
          w = n.n(y),
          C = n(479),
          k = n.n(C),
          B = n(478),
          x = n.n(B),
          I = n(475),
          E = n.n(I),
          M = n(474),
          S = n.n(M),
          j = n(473),
          Q = n.n(j),
          T = n(465),
          L = n.n(T),
          _ = n(466),
          D = n.n(_),
          P = n(467),
          G = n.n(P)
        i.a.use(a.a), i.a.use(s.a, { name: 'v-touch' })
        var Y = new a.a({
          mode: 'history',
          base: e,
          routes: [
            { path: '/_t', name: 'TestingGround', component: S.a },
            { path: '/orbit', name: 'TestOrbit', component: Q.a },
            { path: '/', name: 'home', title: 'Home', meta: { title: 'Home' } },
            {
              path: '/shop',
              name: 'shop',
              title: 'Shop',
              meta: { title: 'Shop' },
              beforeEnter: function (e, t, n) {
                window.location = 'https://shop.sketch.london'
              },
            },
            {
              path: '/happenings',
              name: 'happenings',
              title: 'Happenings',
              component: L.a,
              meta: { title: 'Happenings' },
              children: [
                {
                  path: '',
                  name: 'happenings',
                  title: 'Happenings',
                  component: D.a,
                },
                {
                  path: ':slug',
                  name: 'happening',
                  component: G.a,
                  title: 'Happening',
                  props: function (e) {
                    return { slug: e.params.slug }
                  },
                  beforeEnter: function (e, t, n) {
                    n()
                  },
                },
              ],
            },
            {
              path: '/display',
              name: 'homeDisplay',
              component: p.a,
              title: 'HomeDisplay',
              meta: { title: 'HomeDisplay' },
              props: { name: 'HomeDisplay' },
            },
            {
              path: '/secret',
              name: 'home',
              component: d.a,
              title: 'Home',
              meta: { title: 'Home' },
              props: { name: 'Home', secretActive: !0 },
            },
            {
              path: '/book/:restaurant?/:session?',
              name: 'book',
              component: m.a,
              title: 'Book',
              meta: { title: 'Book' },
              props: function (e) {
                return {
                  restaurant: e.params.restaurant,
                  session: e.params.session,
                  name: 'Book Restaurant',
                }
              },
              beforeEnter: function (e, t, n) {
                var o = e.params.restaurant,
                  i = e.params.session,
                  a = [
                    { 'the-gallery': 'afternoon-tea' },
                    { 'the-gallery': 'dinner' },
                    { 'the-gallery': 'breakfast' },
                    { 'the-lecture-room-and-library': 'lunch' },
                    { 'the-lecture-room-and-library': 'dinner' },
                    { 'the-parlour': 'breakfast' },
                    { 'the-parlour': 'comfort-food' },
                    { 'the-parlour': 'lunch' },
                    { 'the-glade': 'lunch' },
                    { 'the-glade': 'breakfast' },
                    { 'the-glade': 'dinner' },
                  ],
                  r = {
                    'the-lecture-room-and-library-lunch':
                      'https://bookings.quadranet.co.uk/?slug=sketch_lecture_room_lunch&brand=40',
                    'the-lecture-room-and-library-dinner':
                      'https://bookings.quadranet.co.uk/?slug=sketch_lecture_room_dinner&brand=40',
                    'the-parlour-breakfast': 'https://bookings.quadranet.co.uk/?slug=sketch_parlour_breakfast&brand=40',
                    'the-gallery-afternoon-tea': 'https://bookings.quadranet.co.uk/?slug=sketch_gallery_aft&brand=40',
                    'the-gallery-dinner': 'https://bookings.quadranet.co.uk/?slug=sketch_gallery_dinner&brand=40',
                    'the-glade-breakfast': 'https://bookings.quadranet.co.uk/?slug=sketch_glade_breakfast&brand=40',
                    'the-glade-lunch': 'https://bookings.quadranet.co.uk/?slug=sketch_glade_lunch&brand=40',
                  }
                o && i && l.a.find(a, [o, i]) ? n() : n({ path: '/book/the-gallery/afternoon-tea' })
              },
            },
            {
              path: '/booking',
              name: 'booking',
              component: f.a,
              title: 'Booking',
              meta: { title: 'Your Booking' },
              props: function (e) {
                return {
                  restaurant: e.params.restaurant,
                  session: e.params.session,
                  name: 'Book Restaurant',
                }
              },
              beforeEnter: function (e, t, n) {
                e.query &&
                e.query.booking &&
                e.query.date &&
                e.query.name &&
                e.query.party &&
                e.query.room &&
                e.query.time
                  ? n()
                  : n({ path: '/' })
              },
            },
            {
              path: '/booking/:catch',
              name: 'booking',
              title: 'Booking_Redirection',
              meta: { title: 'Booking_Redirection' },
              beforeEnter: function (e, t, n) {
                n({ path: '/' })
              },
            },
            {
              path: '/the-glade',
              name: 'glade',
              component: b.a,
              title: 'the Glade',
              meta: { title: 'the Glade' },
              props: { name: 'the Glade' },
            },
            {
              path: '/the-gallery',
              name: 'gallery',
              component: w.a,
              title: 'the Gallery',
              meta: { title: 'the Gallery' },
              props: { name: 'the Gallery' },
            },
            {
              path: '/the-parlour',
              name: 'parlour',
              component: k.a,
              title: 'the Parlour',
              meta: { title: 'the Parlour' },
              props: { name: 'the Parlour' },
            },
            {
              path: '/the-lecture-room',
              name: 'lecture-room',
              component: x.a,
              title: 'the Lecture Room & Library',
              meta: { title: 'the Lecture Room & Library' },
              props: { name: 'the Lecture Room & Library' },
            },
            {
              path: '/the-east-bar',
              name: 'east-bar',
              component: E.a,
              title: 'the East Bar & Pods',
              meta: { title: 'the East Bar & Pods' },
              props: { name: 'the East Bar & Pods' },
            },
            {
              path: '/the-lecture-room-and-library',
              redirect: { name: 'lecture-room' },
            },
            { path: '/the-east-bar-and-pods', redirect: { name: 'east-bar' } },
            { path: '/eastbar', redirect: { name: 'east-bar' } },
            { path: '/east-bar', redirect: { name: 'east-bar' } },
            {
              path: '*',
              redirect: function (e) {
                if (l.a.toLower(e.path).indexOf('lecture') >= 0) return { name: 'lecture-room' }
                if (l.a.toLower(e.path).indexOf('library') >= 0) return { name: 'lecture-room' }
                if (l.a.toLower(e.path).indexOf('glade') >= 0) return { name: 'glade' }
                if (l.a.toLower(e.path).indexOf('gallery') >= 0) return { name: 'gallery' }
                if (l.a.toLower(e.path).indexOf('pink') >= 0) return { name: 'gallery' }
                if (l.a.toLower(e.path).indexOf('shrigley') >= 0) return { name: 'gallery' }
                if (l.a.toLower(e.path).indexOf('east') >= 0) return { name: 'east-bar' }
                if (l.a.toLower(e.path).indexOf('pods') >= 0) return { name: 'east-bar' }
                e.fullPath
                return { name: 'home' }
              },
            },
          ],
        })
        Y.beforeEach(function (e, t, n) {
          e.path && o(e.path),
            e.meta &&
              e.meta.title &&
              ('Home' === e.meta.title
                ? (document.title = 'sketch London')
                : (document.title = e.meta.title + ' | sketch London')),
            n()
        }),
          (t.a = Y)
      }).call(t, '/')
    },
    function (e, t, n) {
      n(335)
      var o = n(2)(n(243), n(492), null, null)
      e.exports = o.exports
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
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
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
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
    },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},,,,,,,,
    function (e, t, n) {
      function o(e) {
        return n(i(e))
      }
      function i(e) {
        var t = a[e]
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.")
        return t
      }
      var a = {
        './af': 93,
        './af.js': 93,
        './ar': 100,
        './ar-dz': 94,
        './ar-dz.js': 94,
        './ar-kw': 95,
        './ar-kw.js': 95,
        './ar-ly': 96,
        './ar-ly.js': 96,
        './ar-ma': 97,
        './ar-ma.js': 97,
        './ar-sa': 98,
        './ar-sa.js': 98,
        './ar-tn': 99,
        './ar-tn.js': 99,
        './ar.js': 100,
        './az': 101,
        './az.js': 101,
        './be': 102,
        './be.js': 102,
        './bg': 103,
        './bg.js': 103,
        './bm': 104,
        './bm.js': 104,
        './bn': 106,
        './bn-bd': 105,
        './bn-bd.js': 105,
        './bn.js': 106,
        './bo': 107,
        './bo.js': 107,
        './br': 108,
        './br.js': 108,
        './bs': 109,
        './bs.js': 109,
        './ca': 110,
        './ca.js': 110,
        './cs': 111,
        './cs.js': 111,
        './cv': 112,
        './cv.js': 112,
        './cy': 113,
        './cy.js': 113,
        './da': 114,
        './da.js': 114,
        './de': 117,
        './de-at': 115,
        './de-at.js': 115,
        './de-ch': 116,
        './de-ch.js': 116,
        './de.js': 117,
        './dv': 118,
        './dv.js': 118,
        './el': 119,
        './el.js': 119,
        './en-au': 120,
        './en-au.js': 120,
        './en-ca': 121,
        './en-ca.js': 121,
        './en-gb': 122,
        './en-gb.js': 122,
        './en-ie': 123,
        './en-ie.js': 123,
        './en-il': 124,
        './en-il.js': 124,
        './en-in': 125,
        './en-in.js': 125,
        './en-nz': 126,
        './en-nz.js': 126,
        './en-sg': 127,
        './en-sg.js': 127,
        './eo': 128,
        './eo.js': 128,
        './es': 132,
        './es-do': 129,
        './es-do.js': 129,
        './es-mx': 130,
        './es-mx.js': 130,
        './es-us': 131,
        './es-us.js': 131,
        './es.js': 132,
        './et': 133,
        './et.js': 133,
        './eu': 134,
        './eu.js': 134,
        './fa': 135,
        './fa.js': 135,
        './fi': 136,
        './fi.js': 136,
        './fil': 137,
        './fil.js': 137,
        './fo': 138,
        './fo.js': 138,
        './fr': 141,
        './fr-ca': 139,
        './fr-ca.js': 139,
        './fr-ch': 140,
        './fr-ch.js': 140,
        './fr.js': 141,
        './fy': 142,
        './fy.js': 142,
        './ga': 143,
        './ga.js': 143,
        './gd': 144,
        './gd.js': 144,
        './gl': 145,
        './gl.js': 145,
        './gom-deva': 146,
        './gom-deva.js': 146,
        './gom-latn': 147,
        './gom-latn.js': 147,
        './gu': 148,
        './gu.js': 148,
        './he': 149,
        './he.js': 149,
        './hi': 150,
        './hi.js': 150,
        './hr': 151,
        './hr.js': 151,
        './hu': 152,
        './hu.js': 152,
        './hy-am': 153,
        './hy-am.js': 153,
        './id': 154,
        './id.js': 154,
        './is': 155,
        './is.js': 155,
        './it': 157,
        './it-ch': 156,
        './it-ch.js': 156,
        './it.js': 157,
        './ja': 158,
        './ja.js': 158,
        './jv': 159,
        './jv.js': 159,
        './ka': 160,
        './ka.js': 160,
        './kk': 161,
        './kk.js': 161,
        './km': 162,
        './km.js': 162,
        './kn': 163,
        './kn.js': 163,
        './ko': 164,
        './ko.js': 164,
        './ku': 165,
        './ku.js': 165,
        './ky': 166,
        './ky.js': 166,
        './lb': 167,
        './lb.js': 167,
        './lo': 168,
        './lo.js': 168,
        './lt': 169,
        './lt.js': 169,
        './lv': 170,
        './lv.js': 170,
        './me': 171,
        './me.js': 171,
        './mi': 172,
        './mi.js': 172,
        './mk': 173,
        './mk.js': 173,
        './ml': 174,
        './ml.js': 174,
        './mn': 175,
        './mn.js': 175,
        './mr': 176,
        './mr.js': 176,
        './ms': 178,
        './ms-my': 177,
        './ms-my.js': 177,
        './ms.js': 178,
        './mt': 179,
        './mt.js': 179,
        './my': 180,
        './my.js': 180,
        './nb': 181,
        './nb.js': 181,
        './ne': 182,
        './ne.js': 182,
        './nl': 184,
        './nl-be': 183,
        './nl-be.js': 183,
        './nl.js': 184,
        './nn': 185,
        './nn.js': 185,
        './oc-lnc': 186,
        './oc-lnc.js': 186,
        './pa-in': 187,
        './pa-in.js': 187,
        './pl': 188,
        './pl.js': 188,
        './pt': 190,
        './pt-br': 189,
        './pt-br.js': 189,
        './pt.js': 190,
        './ro': 191,
        './ro.js': 191,
        './ru': 192,
        './ru.js': 192,
        './sd': 193,
        './sd.js': 193,
        './se': 194,
        './se.js': 194,
        './si': 195,
        './si.js': 195,
        './sk': 196,
        './sk.js': 196,
        './sl': 197,
        './sl.js': 197,
        './sq': 198,
        './sq.js': 198,
        './sr': 200,
        './sr-cyrl': 199,
        './sr-cyrl.js': 199,
        './sr.js': 200,
        './ss': 201,
        './ss.js': 201,
        './sv': 202,
        './sv.js': 202,
        './sw': 203,
        './sw.js': 203,
        './ta': 204,
        './ta.js': 204,
        './te': 205,
        './te.js': 205,
        './tet': 206,
        './tet.js': 206,
        './tg': 207,
        './tg.js': 207,
        './th': 208,
        './th.js': 208,
        './tk': 209,
        './tk.js': 209,
        './tl-ph': 210,
        './tl-ph.js': 210,
        './tlh': 211,
        './tlh.js': 211,
        './tr': 212,
        './tr.js': 212,
        './tzl': 213,
        './tzl.js': 213,
        './tzm': 215,
        './tzm-latn': 214,
        './tzm-latn.js': 214,
        './tzm.js': 215,
        './ug-cn': 216,
        './ug-cn.js': 216,
        './uk': 217,
        './uk.js': 217,
        './ur': 218,
        './ur.js': 218,
        './uz': 220,
        './uz-latn': 219,
        './uz-latn.js': 219,
        './uz.js': 220,
        './vi': 221,
        './vi.js': 221,
        './x-pseudo': 222,
        './x-pseudo.js': 222,
        './yo': 223,
        './yo.js': 223,
        './zh-cn': 224,
        './zh-cn.js': 224,
        './zh-hk': 225,
        './zh-hk.js': 225,
        './zh-mo': 226,
        './zh-mo.js': 226,
        './zh-tw': 227,
        './zh-tw.js': 227,
      }
      ;(o.keys = function () {
        return Object.keys(a)
      }),
        (o.resolve = i),
        (e.exports = o),
        (o.id = 352)
    },,,,,,,,,,,,,,,,,,,,,,,,
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
      e.exports = '../foods/cake-9.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/cake-10.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/coronation-chicken-sandwich.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/cucumber-sandwich.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/egg-sandwich.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/elcair.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/macaroon.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/malabar-marshmallow.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/meringue.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/salmon-sandwich.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/scone-1.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/scone-2.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/plate-bottom.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/plate-mid.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/plate-top.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/cauliflower.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/chives.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/icecream.webp'
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
    },
    function (e, t, n) {
      e.exports = '../foods/acc-01.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/acc-02.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/acc-03.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/acc-04.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/cauliflower.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/chantilly.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/duck.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/foie-gras.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/icecream.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/lamb.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/mushrooms.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/onion-rings.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/oyster.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/prawn.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/scallop.webp'
    },
    function (e, t, n) {
      e.exports = '../foods/tartare.webp'
    },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    function (e, t, n) {
      n(337)
      var o = n(2)(n(244), n(494), 'data-v-5de37a50', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(323)
      var o = n(2)(n(245), n(480), 'data-v-064de0c6', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(342)
      var o = n(2)(n(246), n(499), null, null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(336)
      var o = n(2)(n(247), n(493), 'data-v-522c5255', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(334)
      var o = n(2)(n(248), n(491), 'data-v-4a7e6f48', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(331)
      var o = n(2)(n(249), n(488), 'data-v-3b5c3cb2', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(332)
      var o = n(2)(n(250), n(489), 'data-v-417bb6ca', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(327)
      var o = n(2)(n(251), n(484), 'data-v-2dd7dfda', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(343)
      var o = n(2)(n(252), n(500), 'data-v-e0ea26a8', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(326)
      var o = n(2)(n(253), n(483), 'data-v-18d8d7c3', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(328)
      var o = n(2)(n(254), n(485), 'data-v-332cb5df', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(329)
      var o = n(2)(n(256), n(486), 'data-v-3394ca1f', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(340)
      var o = n(2)(n(257), n(497), 'data-v-7bdb101f', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(339)
      var o = n(2)(n(258), n(496), 'data-v-715a3f58', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(341)
      var o = n(2)(n(259), n(498), 'data-v-a0d5c89a', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(324)
      var o = n(2)(n(260), n(481), 'data-v-10405ad9', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(333)
      var o = n(2)(n(261), n(490), 'data-v-46007155', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(344)
      var o = n(2)(n(262), n(501), 'data-v-e651fe40', null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(338)
      var o = n(2)(n(263), n(495), null, null)
      e.exports = o.exports
    },
    function (e, t, n) {
      n(325)
      var o = n(2)(n(264), n(482), 'data-v-115f8a04', null)
      e.exports = o.exports
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'booking' }, [
            e.redirectToQuadranet
              ? n(
                  'div',
                  {
                    staticStyle: {
                      position: 'fixed',
                      top: '0',
                      right: '0',
                      bottom: '0',
                      left: '0',
                      'z-index': '99999',
                      background: 'linear-gradient(0deg,#ffc8c8,white)',
                    },
                    attrs: { id: 'redirectToQuadranet' },
                  },
                  [
                    n(
                      'div',
                      {
                        staticStyle: {
                          position: 'fixed',
                          top: '50%',
                          left: '50%',
                          transform: 'translate3d(-50%,-50%,0)',
                          'z-index': '99999',
                          width: '90%',
                          'max-width': '20em',
                          'font-size': '2rem',
                          'text-align': 'center',
                        },
                      },
                      [
                        e._v(
                          '\n      Redirecting you to the booking page for ' +
                            e._s(e.bookTarget.displaySession) +
                            ' at ',
                        ),
                        n('span', {
                          domProps: {
                            innerHTML: e._s(e.bookTarget.displayName),
                          },
                        }),
                        e._v('...\n\n      '),
                        n('br'),
                        n('br'),
                        e._v(' '),
                        n(
                          'a',
                          {
                            staticClass: 'mad-sans-fill',
                            staticStyle: {
                              'text-decoration': 'underline',
                              'font-size': '1.5rem',
                            },
                            style: { opacity: e.externalBookingUrl ? 1 : 0 },
                            attrs: {
                              target: '_blank',
                              href: e.externalBookingUrl,
                            },
                          },
                          [e._v('\n        Click here if you are not redirected automatically')],
                        ),
                      ],
                    ),
                  ],
                )
              : e._e(),
            e._v(' '),
            n('div', { ref: 'webglCanvas', attrs: { id: 'container' } }),
            e._v(' '),
            n(
              'div',
              {
                staticClass: 'information-wrapper',
                style: { opacity: e.informationOpacity },
              },
              [
                n('div', { staticClass: 'information' }, [
                  'the-glade' === e.bookTarget.slug && 'lunch' == e.bookTarget.session
                    ? n('div', { staticClass: 'main' }, [
                        n('span', {
                          domProps: {
                            innerHTML: e._s(e.bookTarget.displayName),
                          },
                        }),
                      ])
                    : n('div', { staticClass: 'main' }, [
                        e._v('\n        ' + e._s(e.bookTarget.displaySession) + ' in '),
                        n('span', {
                          domProps: {
                            innerHTML: e._s(e.bookTarget.displayName),
                          },
                        }),
                      ]),
                ]),
              ],
            ),
            e._v(' '),
            n(
              'div',
              {
                ref: 'bookingForm',
                staticClass: 'booking-form',
                attrs: { tabindex: '-1' },
                on: {
                  keyup: function (t) {
                    return e.bookingFormKeyUp(t)
                  },
                },
              },
              [
                n(
                  'div',
                  { staticClass: 'booking-form-ui' },
                  [
                    n('div', { staticClass: 'field-controls mad-sans-fill' }, [
                      n(
                        'button',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: e.bookingStep > 0,
                              expression: 'bookingStep > 0',
                            },
                          ],
                          on: {
                            click: function (t) {
                              e.bookingStep = Math.max(0, e.bookingStep - 1)
                            },
                          },
                        },
                        [e._v('\n          Back\n        ')],
                      ),
                      e._v(' '),
                      n(
                        'button',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: e.bookingStep < 2,
                              expression: 'bookingStep < 2',
                            },
                          ],
                          on: {
                            click: function (t) {
                              e.bookingStep = Math.min(2, e.bookingStep + 1)
                            },
                          },
                        },
                        [e._v('\n          Next\n        ')],
                      ),
                    ]),
                    e._v(' '),
                    n('transition', { attrs: { name: 'fade' } }, [
                      n(
                        'div',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: 0 === e.bookingStep,
                              expression: 'bookingStep === 0',
                            },
                          ],
                          staticClass: 'field-group party-size',
                        },
                        [
                          n('div', { staticClass: 'field-label' }, [e._v('\n          Party:\n        ')]),
                          e._v(' '),
                          e._l(e.bookingPartyRange(), function (t, o) {
                            return n(
                              'button',
                              {
                                staticClass: 'party-size-picker',
                                class: { active: t === e.booking.partySize },
                                attrs: { tabindex: o + 1 },
                                on: {
                                  click: function (n) {
                                    return e.updatePartySize(t)
                                  },
                                },
                              },
                              [e._v('\n          ' + e._s(t) + '\n        ')],
                            )
                          }),
                        ],
                        2,
                      ),
                    ]),
                    e._v(' '),
                    n('transition', { attrs: { name: 'fade' } }, [
                      n(
                        'div',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: 1 === e.bookingStep,
                              expression: 'bookingStep === 1',
                            },
                          ],
                          staticClass: 'field-group date-picker',
                        },
                        [
                          e.isTouch
                            ? e._e()
                            : n('div', { staticClass: 'date-select' }, [
                                n('div', { staticClass: 'date-select-days' }, [
                                  n(
                                    'div',
                                    {
                                      directives: [
                                        {
                                          name: 'show',
                                          rawName: 'v-show',
                                          value: e.showDaysPanel,
                                          expression: 'showDaysPanel',
                                        },
                                      ],
                                      ref: 'daysPanel',
                                      staticClass: 'date-select-days-panel',
                                    },
                                    e._l(e.selectableDays, function (t) {
                                      return n(
                                        'div',
                                        {
                                          key: t,
                                          staticClass: 'date-select-day',
                                          class: {
                                            selected: e.bookingDateDay == t,
                                            selectable: e.checkDayStatus(t),
                                            disabled: !e.checkDayStatus(t),
                                          },
                                          on: {
                                            click: function (n) {
                                              return e.selectDay(t)
                                            },
                                          },
                                        },
                                        [
                                          n('span', { staticClass: 'day-label' }, [e._v(e._s(e.getDayWord(t)))]),
                                          n('span', { staticClass: 'day-num' }, [e._v(e._s(t))]),
                                        ],
                                      )
                                    }),
                                    0,
                                  ),
                                  e._v(' '),
                                  n(
                                    'div',
                                    {
                                      staticClass: 'date-select-days-display',
                                      on: {
                                        click: function (t) {
                                          return e.displayClicked('d')
                                        },
                                      },
                                    },
                                    [
                                      n('div', { staticClass: 'date-select-day' }, [
                                        n('span', { staticClass: 'day-label' }, [
                                          e._v(e._s(e.getDayWord(e.bookingDateDay))),
                                        ]),
                                        n('span', { staticClass: 'day-num' }, [e._v(e._s(e.bookingDateDay))]),
                                      ]),
                                    ],
                                  ),
                                ]),
                                e._v(' '),
                                n('div', { staticClass: 'date-select-months' }, [
                                  n(
                                    'div',
                                    {
                                      directives: [
                                        {
                                          name: 'show',
                                          rawName: 'v-show',
                                          value: e.showMonthsPanel,
                                          expression: 'showMonthsPanel',
                                        },
                                      ],
                                      ref: 'monthsPanel',
                                      staticClass: 'date-select-months-panel',
                                    },
                                    e._l(e.selectableMonths, function (t) {
                                      return n(
                                        'div',
                                        {
                                          key: t,
                                          staticClass: 'date-select-month',
                                          class: {
                                            selected: e.bookingDateMonth == t,
                                            selectable: e.checkMonthStatus(t),
                                            disabled: !e.checkMonthStatus(t),
                                          },
                                          on: {
                                            click: function (n) {
                                              return e.selectMonth(t)
                                            },
                                          },
                                        },
                                        [
                                          n('span', { staticClass: 'month-label' }, [e._v(e._s(e.getMonthWord(t)))]),
                                          n('span', { staticClass: 'month-num' }, [e._v(e._s(t))]),
                                        ],
                                      )
                                    }),
                                    0,
                                  ),
                                  e._v(' '),
                                  n(
                                    'div',
                                    {
                                      staticClass: 'date-select-months-display',
                                      on: {
                                        click: function (t) {
                                          return e.displayClicked('m')
                                        },
                                      },
                                    },
                                    [
                                      n('div', { staticClass: 'date-select-month' }, [
                                        n('span', { staticClass: 'month-label' }, [
                                          e._v(e._s(e.getMonthWord(e.bookingDateMonth))),
                                        ]),
                                        n('span', { staticClass: 'month-num' }, [e._v(e._s(e.bookingDateMonth))]),
                                      ]),
                                    ],
                                  ),
                                ]),
                                e._v(' '),
                                n('div', { staticClass: 'date-select-years' }, [
                                  n(
                                    'div',
                                    {
                                      directives: [
                                        {
                                          name: 'show',
                                          rawName: 'v-show',
                                          value: e.showYearsPanel,
                                          expression: 'showYearsPanel',
                                        },
                                      ],
                                      ref: 'yearsPanel',
                                      staticClass: 'date-select-years-panel',
                                    },
                                    e._l(e.selectableYears, function (t) {
                                      return n(
                                        'div',
                                        {
                                          key: t,
                                          staticClass: 'date-select-year',
                                          class: {
                                            selected: e.bookingDateYear == t,
                                            selectable: e.checkYearStatus(t),
                                            disabled: !e.checkYearStatus(t),
                                          },
                                          on: {
                                            click: function (n) {
                                              return e.selectYear(t)
                                            },
                                          },
                                        },
                                        [n('span', { staticClass: 'year-num' }, [e._v(e._s(t))])],
                                      )
                                    }),
                                    0,
                                  ),
                                  e._v(' '),
                                  n(
                                    'div',
                                    {
                                      staticClass: 'date-select-years-display',
                                      on: {
                                        click: function (t) {
                                          return e.displayClicked('y')
                                        },
                                      },
                                    },
                                    [
                                      n('div', { staticClass: 'date-select-year' }, [
                                        n('span', { staticClass: 'year-num' }, [e._v(e._s(e.bookingDateYear))]),
                                      ]),
                                    ],
                                  ),
                                ]),
                              ]),
                          e._v(' '),
                          (e.isTouch, e._e()),
                          e._v(' '),
                          e.isTouch
                            ? n('span', { staticClass: 'date-picker' }, [
                                n('input', {
                                  directives: [
                                    {
                                      name: 'model',
                                      rawName: 'v-model',
                                      value: e.bookingDate,
                                      expression: 'bookingDate',
                                    },
                                  ],
                                  staticClass: 'date-picker-full',
                                  attrs: {
                                    type: 'date',
                                    required: 'required',
                                    min: e.minDate,
                                    max: e.maxDate,
                                  },
                                  domProps: { value: e.bookingDate },
                                  on: {
                                    change: function (t) {
                                      return e.validateDate()
                                    },
                                    input: [
                                      function (t) {
                                        t.target.composing || (e.bookingDate = t.target.value)
                                      },
                                      function (t) {
                                        return e.validateDate()
                                      },
                                    ],
                                  },
                                }),
                              ])
                            : e._e(),
                        ],
                      ),
                    ]),
                    e._v(' '),
                    n('transition', { attrs: { name: 'fade' } }, [
                      n(
                        'div',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: 2 === e.bookingStep,
                              expression: 'bookingStep === 2',
                            },
                          ],
                          staticClass: 'field-group confirmation',
                        },
                        [
                          n('div', { staticClass: 'summary' }, [
                            e._v('\n          You are booking a table for '),
                            n('div', [
                              e._v(e._s(e.booking.partySize) + ' '),
                              e.booking.partySize > 1 ? n('span', [e._v('people')]) : e._e(),
                              1 === e.booking.partySize ? n('span', [e._v('person')]) : e._e(),
                            ]),
                            e._v(' on\n          '),
                            n('div', [
                              e._v(
                                e._s(e.bookingDateDay) + ' ' + e._s(e.getMonthWord()) + ' ' + e._s(e.bookingDateYear),
                              ),
                            ]),
                          ]),
                          e._v(' '),
                          n(
                            'a',
                            {
                              staticClass: 'mad-sans-fill active',
                              staticStyle: { opacity: '1' },
                              attrs: { id: 'bookatable-widget-step' },
                              on: {
                                click: function (t) {
                                  e.bookingStep = Math.min(3, e.bookingStep + 1)
                                },
                              },
                            },
                            [e._v('Proceed')],
                          ),
                        ],
                      ),
                    ]),
                    e._v(' '),
                    n('transition', { attrs: { name: 'fade' } }, [
                      n(
                        'div',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: 3 === e.bookingStep,
                              expression: 'bookingStep === 3',
                            },
                          ],
                          staticClass: 'field-group confirmation',
                        },
                        [
                          e._e(),
                          e._v(' '),
                          n('div', { attrs: { id: 'reservationPolicy' } }, [
                            n('h4', [e._v('\n              Reservation policy\n            ')]),
                            e._v(' '),
                            n('p', [
                              e._v(
                                '\n              Credit card details will be held to secure your reservation.  No payment will be taken, but an authorisation check will be made to ensure the card’s validity.\n            ',
                              ),
                            ]),
                            e._v(' '),
                            n('p', [
                              e._v(
                                "\n              In the event that a booking is not honoured in whole or in part, which includes reducing numbers, or is cancelled with less than 48 hours' notice, a cancellation fee will be charged to the card provided.\n            ",
                              ),
                            ]),
                            e._v(' '),
                            n('p', [
                              e._v('\n              Further information can be found on our detailed '),
                              n(
                                'a',
                                {
                                  attrs: {
                                    href: 'https://sketch.london/policy/reservation-v1.html',
                                    target: '_blank',
                                  },
                                },
                                [e._v('Reservations Policy page')],
                              ),
                            ]),
                            e._v(' '),
                            n('p', [
                              e._v(
                                '\n              Please kindly note, by providing your card details at the time of booking you will have agreed to the cancellation policy stated above.\n            ',
                              ),
                            ]),
                            e._v(' '),
                            n(
                              'div',
                              {
                                on: {
                                  click: function (t) {
                                    e.bookingStep = Math.min(3, e.bookingStep - 1)
                                  },
                                },
                              },
                              [
                                n('bookatable', {
                                  attrs: {
                                    connectionid: e.bookTarget.connectionid,
                                    rid: e.bookTarget.rid,
                                    sessionid: e.bookTarget.sessionId,
                                    party: e.booking.partySize,
                                    date: e.bookingDate,
                                    time: '1201',
                                  },
                                }),
                              ],
                              1,
                            ),
                          ]),
                        ],
                      ),
                    ]),
                  ],
                  1,
                ),
              ],
            ),
          ])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'east-bar' }, [n('div', { ref: 'webglCanvas', attrs: { id: 'container' } })])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'parlour' }, [n('div', { ref: 'webglCanvas', attrs: { id: 'container' } })])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'container' }, [
            n('div', {
              ref: 'webglCanvas',
              attrs: { id: 'happenings-container' },
            }),
          ])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'outer-container' }, [
            n(
              'div',
              {
                staticClass: 'container',
                class: e.getPostClass,
                style: e.getPostStyle,
              },
              [
                n('div', { staticClass: 'scroll-container' }, [
                  e.post && e.post.format && 'Default' == e.post.format
                    ? n('div', {}, [
                        e.post.title
                          ? n('h1', {
                              staticClass: 'title',
                              domProps: { innerHTML: e._s(e.post.title) },
                            })
                          : e._e(),
                        e._v(' '),
                        e.post.date
                          ? n('h4', {
                              staticClass: 'date',
                              domProps: { innerHTML: e._s(e.post.date) },
                            })
                          : e._e(),
                        e._v(' '),
                        e.post.location
                          ? n('h4', { staticClass: 'location' }, [
                              n('span', {
                                domProps: { innerHTML: e._s(e.post.location) },
                              }),
                            ])
                          : e._e(),
                        e._v(' '),
                        e.post.info
                          ? n('h4', { staticClass: 'info' }, [
                              n('span', {
                                domProps: { innerHTML: e._s(e.post.info) },
                              }),
                            ])
                          : e._e(),
                        e._v(' '),
                        n('div', {}),
                      ])
                    : e.post
                    ? n(
                        'div',
                        {
                          staticClass: 'html-content',
                          class: {
                            'has-mobile-info': 'Enable mobile version' === e.post.responsiveOption,
                          },
                        },
                        [
                          e.post.info
                            ? n('div', {
                                staticClass: 'post-info',
                                domProps: { innerHTML: e._s(e.post.info) },
                              })
                            : e._e(),
                          e._v(' '),
                          e.post.infoMobile
                            ? n('div', {
                                staticClass: 'post-info-mobile',
                                domProps: {
                                  innerHTML: e._s(e.post.infoMobile),
                                },
                              })
                            : e._e(),
                        ],
                      )
                    : e._e(),
                ]),
                e._v(' '),
                e.post && e.post.actionurl
                  ? n('a', {
                      staticClass: 'rsvp button h4',
                      attrs: { href: e.formatActionURL(e.post.actionurl) },
                      domProps: { innerHTML: e._s(e.post.action) },
                    })
                  : e._e(),
                e._v(' '),
                e.post && !e.post.actionurl && e.post.action
                  ? n('h4', {
                      staticClass: 'rsvp',
                      domProps: { innerHTML: e._s(e.post.action) },
                    })
                  : e._e(),
              ],
            ),
            e._v(' '),
            n(
              'div',
              { staticClass: 'nav' },
              [
                n('transition', { attrs: { name: 'fade' } }, [
                  e.prev && !e.loading
                    ? n(
                        'div',
                        { staticClass: 'prev h4' },
                        [
                          n(
                            'router-link',
                            {
                              attrs: {
                                to: {
                                  name: 'happening',
                                  params: {
                                    slug: e.prev.slug,
                                    direction: 0,
                                    timeScale: 2.5,
                                  },
                                },
                              },
                            },
                            [e._v('\n          ← Older\n        ')],
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                ]),
                e._v(' '),
                n('transition', { attrs: { name: 'fade' } }, [
                  e.loading
                    ? e._e()
                    : n(
                        'div',
                        { staticClass: 'back h4' },
                        [n('router-link', { attrs: { to: { name: 'happenings' } } }, [e._v('View all')])],
                        1,
                      ),
                ]),
                e._v(' '),
                n('transition', { attrs: { name: 'fade' } }, [
                  e.next && !e.loading
                    ? n(
                        'div',
                        { staticClass: 'next h4' },
                        [
                          n(
                            'router-link',
                            {
                              attrs: {
                                to: {
                                  name: 'happening',
                                  params: {
                                    slug: e.next.slug,
                                    direction: 1,
                                    timeScale: 2.5,
                                  },
                                },
                              },
                            },
                            [e._v('\n          Newer →\n        ')],
                          ),
                        ],
                        1,
                      )
                    : e._e(),
                ]),
              ],
              1,
            ),
          ])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            { staticClass: 'home' },
            [
              n('div', { ref: 'webglCanvas', attrs: { id: 'container' } }),
              e._v(' '),
              n('transition', { attrs: { name: 'fade' } }, [
                e.activeName.length > 0
                  ? n(
                      'div',
                      {
                        staticClass: 'gallery-name-wrapper',
                        attrs: { id: 'gallery-name-wrapper' },
                      },
                      [],
                    )
                  : e._e(),
              ]),
            ],
            1,
          )
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            [
              n(
                'div',
                {
                  staticClass: 'modals-on-load-wrapper-test',
                  staticStyle: { display: 'none' },
                },
                [
                  e._v('\n    1'),
                  n('br'),
                  e._v(e._s(e.modalsFromState)),
                  n('br'),
                  e._v(' '),
                  e._v('\n    2'),
                  n('br'),
                  e._v(e._s(e.modalsArray.length)),
                  n('br'),
                  e._v(' '),
                  e._v('\n    3'),
                  n('br'),
                  e._v(e._s(e.modalsArray)),
                  n('br'),
                  e._v(' '),
                  e._v('\n    4'),
                  n('br'),
                  e._v(e._s(e.hasRemainingModal)),
                  n('br'),
                  e._v(' '),
                  e._v('\n    5'),
                  n('br'),
                  e._v(e._s(e.modalsArray && e.modalsArray.length > 0 && e.hasRemainingModal)),
                  n('br'),
                ],
              ),
              e._v(' '),
              e.modalsArray && e.modalsArray.length > 0 && e.hasRemainingModal
                ? e._l(e.modalsArray, function (t) {
                    return n('div', { key: t.id, staticClass: 'modals-on-load-wrapper x' }, [
                      e.isModalActive(t)
                        ? n(
                            'div',
                            {
                              staticClass: 'modal active is-visible info-modal',
                              class: e.modalClass(t),
                              staticStyle: {
                                'z-index': '1000',
                                order: '1',
                                'font-size': '4rem',
                                left: '50%',
                                top: '50%',
                                visibility: 'inherit',
                                opacity: '1',
                                transform: 'translate(-50%, -50%) translate3d(0px, 0px, 0px)',
                                'pointer-events': 'initial',
                                cursor: 'move',
                                'touch-action': 'none',
                                'user-select': 'none',
                              },
                              attrs: { id: t.slug },
                            },
                            [
                              n(
                                'a',
                                {
                                  staticClass: 'info-close',
                                  on: {
                                    click: function (n) {
                                      return e.closeModal(t)
                                    },
                                  },
                                },
                                [
                                  n(
                                    'svg',
                                    {
                                      attrs: {
                                        width: '100%',
                                        height: '100%',
                                        viewBox: '0 0 100 100',
                                        version: '1.1',
                                        xmlns: 'http://www.w3.org/2000/svg',
                                        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                      },
                                    },
                                    [
                                      n('path', {
                                        attrs: {
                                          d: 'M20 20 L80 80',
                                          stroke: 'black',
                                          'stroke-width': '4px',
                                        },
                                      }),
                                      e._v(' '),
                                      n('path', {
                                        attrs: {
                                          d: 'M20 80 L80 20',
                                          stroke: 'black',
                                          'stroke-width': '4px',
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                              ),
                              e._v(' '),
                              n(
                                'div',
                                {
                                  staticClass: 'content',
                                  on: {
                                    click: function (n) {
                                      return e.onModalContentClicked(n, t.slug)
                                    },
                                  },
                                },
                                [
                                  n('div', [
                                    n('div', {
                                      domProps: { innerHTML: e._s(t.html) },
                                    }),
                                  ]),
                                ],
                              ),
                            ],
                          )
                        : e._e(),
                    ])
                  })
                : e._e(),
            ],
            2,
          )
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            { staticClass: 'home' },
            [
              n('div', { ref: 'webglCanvas', attrs: { id: 'container' } }),
              e._v(' '),
              n('transition', { attrs: { name: 'fade' } }, [
                e.activeName.length > 0
                  ? n(
                      'div',
                      {
                        staticClass: 'gallery-name-wrapper',
                        attrs: { id: 'gallery-name-wrapper' },
                      },
                      // [
                      //   n(
                      //     "div",
                      //     { attrs: { id: "gallery-name" } },
                      //     [
                      //       n("div", { staticClass: "active-name" }, [
                      //         e.isMobile || e.isTablet || !e.activeRoute
                      //           ? e._e()
                      //           : n(
                      //               "div",
                      //               {
                      //                 staticClass: "active-name-button mad -sans fill",
                      //                 attrs: { to: e.activeRoute }
                      //               },
                      //               [
                      //                 n("span", {
                      //                   domProps: {
                      //                     innerHTML: e._s(e.activeName)
                      //                   }
                      //                 }),
                      //                 e._v(" "),
                      //                 n("div", {
                      //                   staticClass: "description",
                      //                   domProps: {
                      //                     innerHTML: e._s(e.activeDescription)
                      //                   }
                      //                 })
                      //               ]
                      //             ),
                      //         e._v(" "),
                      //         e.isMobile || e.isTablet
                      //           ? n("span", {
                      //               domProps: { innerHTML: e._s(e.activeName) }
                      //             })
                      //           : e._e(),
                      //         e._v(" "),
                      //         e.isMobile || e.isTablet
                      //           ? n("span", {
                      //               staticClass: "mobile-description",
                      //               domProps: {
                      //                 innerHTML: e._s(e.activeDescription)
                      //               }
                      //             })
                      //           : e._e()
                      //       ]),
                      //       e._v(" "),
                      //       (e.isMobile || e.isTablet) && e.activeRoute
                      //         ? n(
                      //             "router-link",
                      //             {
                      //               staticClass: "mad sans fill button inline border-1",
                      //               attrs: {
                      //                 id: "trigger-button",
                      //                 to: e.activeRoute
                      //               },
                      //               nativeOn: {
                      //                 click: function (t) {
                      //                   return e.trackEnterEvent()
                      //                 }
                      //               }
                      //             },
                      //             [n("span", [e._v("\n            Enter\n          ")])]
                      //           )
                      //         : e._e()
                      //     ],
                      //     1
                      //   )
                      // ]
                    )
                  : e._e(),
              ]),
            ],
            1,
          )
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { attrs: { id: 'happenings-app' } }, [
            n('div', { staticClass: 'nav-bar' }, [n('nav-bar')], 1),
            e._v(' '),
            n(
              'div',
              { staticClass: 'router-view' },
              [
                n(
                  'transition',
                  { attrs: { name: e.transitionName } },
                  [n('router-view', { key: e.$route.fullPath })],
                  1,
                ),
              ],
              1,
            ),
            e._v(' '),
            n('div', { staticClass: 'time-machine' }, [n('time-machine', { ref: 'timeMachine' })], 1),
          ])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'container' }, [
            n('div', { staticClass: 'scroll-container' }, [
              n(
                'div',
                { staticClass: 'happenings' },
                e._l(e.happenings, function (t) {
                  return e.happenings
                    ? n(
                        'router-link',
                        {
                          key: t.slug,
                          staticClass: 'happening',
                          attrs: {
                            to: { name: 'happening', params: { slug: t.slug } },
                          },
                        },
                        [
                          n('div', { staticClass: 'title' }, [
                            n('span', {
                              domProps: { innerHTML: e._s(t.title) },
                            }),
                          ]),
                          e._v(' '),
                          n('div', { staticClass: 'date' }, [
                            n('span', {
                              domProps: { innerHTML: e._s(t.date) },
                            }),
                          ]),
                        ],
                      )
                    : e._e()
                }),
                1,
              ),
            ]),
          ])
        },
        staticRenderFns: [],
      }
    },
    // switch between food play
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
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement
          return (e._self._c || t)('div', { attrs: { id: 'empty' } })
        },
        staticRenderFns: [],
      }
    },
    // Gallery route
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            { attrs: { id: 'app' } },
            [
              n('nav-bar', {
                ref: 'nav',
                attrs: { alertmodal: e.alertActive },
                on: {
                  navActivated: function (t) {
                    return e.activateNav(!0)
                  },
                  navDeactivated: function (t) {
                    return e.activateNav(!1)
                  },
                },
              }),
              e._v(' '),
              n(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: 'home' == e.$route.name,
                      expression: "$route.name == 'home'",
                    },
                  ],
                  staticClass: 'home-view',
                },
                [
                  n(e.homeComponent, {
                    tag: 'component',
                    attrs: { isNavActivated: e.navActive },
                    on: {
                      'close-alert': function (t) {
                        e.alertActive = !1
                      },
                    },
                  }),
                ],
                1,
              ),
              e._v(' '),
              n(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: 'home' !== e.$route.name,
                      expression: "$route.name !== 'home'",
                    },
                  ],
                  staticClass: 'router-view',
                },
                [n('router-view', { on: { 'game-actions': e.onGameActions } })],
                1,
              ),
              e._v(' '),
              !e.showModalsOnLoad ||
              ('home' != e.$route.name &&
                'glade' != e.$route.name &&
                'gallery' != e.$route.name &&
                'parlour' != e.$route.name &&
                'lecture-room' != e.$route.name &&
                'east-bar' != e.$route.name)
                ? e._e()
                : n('ModalsOnLoad', {
                    attrs: { roomId: 'home' },
                    on: { openmodal: e.onOpenModalFromLandingModal },
                  }),
            ],
            1,
          )
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'booking' }, [
            n('div', { ref: 'webglCanvas', attrs: { id: 'container' } }),
            e._v(' '),
            e.bookingVerified
              ? n('div', { staticClass: 'summary' }, [
                  n('div', { staticClass: 'name' }, [e._v(e._s(e.booking.name))]),
                  e._v("'s booking at "),
                  n('div', { staticClass: 'venue' }, [e._v(e._s(e.booking.venue))]),
                  e._v(' '),
                  n('br'),
                  n('div', [e._v('for ' + e._s(e.booking.session))]),
                  e._v(' on '),
                  n('div', { staticClass: 'date' }, [e._v(e._s(e.booking.dateDisplay))]),
                ])
              : e._e(),
            e._v(' '),
            e.bookingVerified
              ? e._e()
              : n('div', { staticClass: 'error' }, [n('div', [e._v('Please check your booking or try again later')])]),
          ])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { attrs: { id: 'alert' } }, [
            n(
              'div',
              {
                staticClass: 'modal active type-menu is-visible info-modal service-night',
                staticStyle: {
                  'z-index': '1000',
                  order: '1',
                  'font-size': '4rem',
                  left: '50%',
                  top: '50%',
                  visibility: 'visible !important',
                  opacity: '1 !important',
                  transform: 'translate3d(-50%, -50%, 0) !important',
                  'pointer-events': 'initial',
                  cursor: 'move',
                  'touch-action': 'none',
                  'user-select': 'none',
                },
                attrs: {
                  'data-current-view': 'true',
                  'data-room-id': 'home',
                  'data-route-name': 'home',
                  id: 'covid-19-response',
                },
              },
              [
                n('a', { staticClass: 'info-close', on: { click: e.close } }, [
                  n(
                    'svg',
                    {
                      attrs: {
                        width: '100%',
                        height: '100%',
                        viewBox: '0 0 100 100',
                        version: '1.1',
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                      },
                    },
                    [
                      n('path', {
                        attrs: {
                          d: 'M20 20 L80 80',
                          stroke: 'black',
                          'stroke-width': '4px',
                        },
                      }),
                      e._v(' '),
                      n('path', {
                        attrs: {
                          d: 'M20 80 L80 20',
                          stroke: 'black',
                          'stroke-width': '4px',
                        },
                      }),
                    ],
                  ),
                ]),
                e._v(' '),
                e._m(0),
              ],
            ),
          ])
        },
        staticRenderFns: [
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('div', { staticClass: 'content' }, [
              n('div', [
                n('div', [
                  n('h4', [e._v('Temporary Closure')]),
                  e._v(' '),
                  n('iframe', {
                    staticClass: 'menu-iframe',
                    attrs: {
                      width: '100%',
                      height: '100%',
                      src: 'https://indd.adobe.com/view/92fa1498-a09e-49f6-8cf0-56b01781646b',
                      frameborder: '0',
                      allowfullscreen: '',
                    },
                  }),
                ]),
              ]),
            ])
          },
        ],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'lecture-room' }, [n('div', { ref: 'container', staticClass: 'tiles' })])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n(
            'div',
            { staticClass: 'home' },
            [
              n('div', { ref: 'webglCanvas', attrs: { id: 'container' } }),
              e._v(' '),
              n('transition', { attrs: { name: 'fade' } }, [
                e.activeName.length > 0
                  ? n('div', {
                      staticClass: 'gallery-name-wrapper',
                      attrs: { id: 'gallery-name-wrapper' },
                    })
                  : e._e(),
              ]),
            ],
            1,
          )
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', {
            staticClass: 'mad sans fill',
            class: {
              white:
                ('glade' === e.$route.name || 'parlour' === e.$route.name || 'east-bar' === e.$route.name) &&
                !e.navActive,
              black: e.navActive,
            },
          })
        },
        staticRenderFns: [
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('h5', [
              e._v('Bar snacks & Cocktails, '),
              n('span', { staticStyle: { 'white-space': 'nowrap' } }, [e._v('walk-in basis')]),
            ])
          },
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('h5', [
              e._v('Brunch, Cocktail & Music, '),
              n('span', { staticStyle: { 'white-space': 'nowrap' } }, [e._v('walk-in basis')]),
            ])
          },
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('div', { staticClass: 'nav-east-bar h2' }, [
              n(
                'a',
                {
                  attrs: {
                    href: '#',
                    target: '_blank',
                  },
                },
                [e._v('Home')],
              ),
            ])
          },
        ],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'container' }, [
            n('hr'),
            e._v(' '),
            n('input', { attrs: { type: 'date', name: '', value: '' } }),
            e._v(' '),
            n('hr'),
            e._v(' '),
            n('input', {
              attrs: {
                type: 'date',
                value: '2019-07-22',
                min: '2019-01-01',
                max: '2019-12-31',
              },
            }),
            e._v(' '),
            n('br'),
            e._v('\n\n  Default'),
            n('br'),
            e._v('\n  Type: '),
            n('input', { attrs: { type: 'text', value: 'e' } }),
            n('br'),
            e._v('\n  Num: '),
            n('input', { attrs: { type: 'number', value: '123' } }),
            n('br'),
            e._v(' '),
            n('br'),
            e._v('\n  Vue'),
            n('br'),
            e._v('\n  Type: '),
            n('input', {
              directives: [
                {
                  name: 'model',
                  rawName: 'v-model',
                  value: e.type,
                  expression: 'type',
                },
              ],
              attrs: { type: 'text', name: '' },
              domProps: { value: e.type },
              on: {
                input: function (t) {
                  t.target.composing || (e.type = t.target.value)
                },
              },
            }),
            n('br'),
            e._v('\n  Num: '),
            n('input', {
              directives: [
                {
                  name: 'model',
                  rawName: 'v-model',
                  value: e.num,
                  expression: 'num',
                },
              ],
              attrs: { type: 'number', name: '' },
              domProps: { value: e.num },
              on: {
                input: function (t) {
                  t.target.composing || (e.num = t.target.value)
                },
              },
            }),
            n('br'),
          ])
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement
          return (e._self._c || t)('div', {
            attrs: { id: 'booatable-widget-wrapper' },
          })
        },
        staticRenderFns: [],
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { staticClass: 'container mad sans fill' }, [
            n('div', { staticClass: 'top-left' }),
            e._v(' '),
            n(
              'div',
              { staticClass: 'top-center' },
              [
                n(
                  'router-link',
                  {
                    staticClass: 'logo',
                    attrs: { to: { name: 'happenings' } },
                  },
                  [e._v('\n      sketch happenings\n    ')],
                ),
                e._v(' '),
                n(
                  'router-link',
                  {
                    staticClass: 'mobile-logo',
                    attrs: { to: { name: 'happenings' } },
                  },
                  [e._v('\n      happenings\n    ')],
                ),
              ],
              1,
            ),
            e._v(' '),
            e._m(0),
          ])
        },
        staticRenderFns: [
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('div', { staticClass: 'top-right' }, [
              n(
                'a',
                {
                  staticClass: 'social',
                  attrs: {
                    href: 'https://instagram.com/sketchlondon/',
                    target: '_blank',
                  },
                },
                [e._v('\n      @sketch.london\n    ')],
              ),
            ])
          },
        ],
      }
    },
    //
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { ref: 'background', staticClass: 'background' }, [
            n('div', { ref: 'backgroundSpace', staticClass: 'backgound-img' }),
            e._v(' '),
            n('div', { ref: 'cursor', attrs: { id: 'cursor' } }, [
              n('div', {
                class: ['cursor-colour-' + e.acs, e.md ? 'mowing' : 'static'],
                attrs: { id: 'ring' },
              }),
            ]),
            e._v(' '),
            n('canvas', {
              ref: 'gladeCanvas',
              attrs: { id: 'gladeCanvas', width: '100%', height: '100%' },
            }),
            e._v(' '),
            n('div', { ref: 'sizeWrap', attrs: { id: 'brush-size' } }, [
              e.cs > 100
                ? n('div', {
                    attrs: { id: 'large' },
                    on: { click: e.midBrush },
                  })
                : e._e(),
              e._v(' '),
              e.cs <= 100
                ? n('div', {
                    attrs: { id: 'mid' },
                    on: { click: e.largeBrush },
                  })
                : e._e(),
            ]),
            e._v(' '),
            n(
              'div',
              {
                ref: 'colourWrap',
                class: 'colour-active-' + e.acs,
                attrs: { id: 'colours' },
              },
              e._l(e.colourSets, function (t, o) {
                return n('div', {
                  class: { activeColour: 0 === o, colourSelect: !0 },
                  style: {
                    background: 'rgb(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')',
                  },
                  attrs: { 'data-arr': o },
                  on: { click: e.bindColour },
                })
              }),
              0,
            ),
            e._v(' '),
            n('div', { ref: 'styleWrap', attrs: { id: 'brush-length' } }, [
              2 == e.type
                ? n('div', { attrs: { id: 'long' }, on: { click: e.shortBrush } }, [
                    n(
                      'svg',
                      {
                        attrs: {
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 221.17 338.75',
                        },
                      },
                      [
                        n('title', [e._v('Untitled-1')]),
                        n('path', {
                          attrs: {
                            d: 'M214,157.88s2.75,4.24,6.88,12c1.06,1.93,2.14,4.11,3.35,6.48s2.44,5,3.71,7.75c2.61,5.56,5.34,11.92,8.14,18.95,1.36,3.53,2.8,7.2,4.14,11s2.72,7.84,4.09,12c2.65,8.26,5.2,17.07,7.44,26.29s4.27,18.83,6,28.66l1.13,7.43c0.35,2.49.79,5,1.06,7.49,0.56,5,1.29,10.06,1.65,15.13l0.68,7.59c0.13,1.26.17,2.53,0.25,3.8l0.25,3.8,0.48,7.58,0.25,7.55c0.06,2.51.22,5,.2,7.5s0,5-.07,7.43,0,4.92-.19,7.34-0.32,4.83-.49,7.22-0.32,4.76-.64,7.09-0.6,4.64-.92,6.92-0.66,4.53-1,6.76l-1.28,6.55c-0.42,2.15-.84,4.27-1.28,6.35s-0.92,4.12-1.42,6.12c-1,4-2,7.85-3,11.53s-2.26,7.14-3.33,10.44l-1.61,4.81c-0.53,1.56-1.15,3-1.71,4.48-1.12,2.89-2.21,5.57-3.22,8.05L242,453.52c-0.5,1.12-1,2.18-1.49,3.18-1.93,4-3.47,7.14-4.57,9.25s-1.69,3.23-1.69,3.23l-1.51-.53s0.17-1.26.54-3.61,1-5.76,1.74-10.06l0.64-3.39,0.58-3.75c0.42-2.6.88-5.4,1.41-8.38,0.24-1.49.56-3,.8-4.61l0.71-4.9,1.64-10.5c0.88-7.36,2.11-15.24,2.94-23.64l0.74-6.36c0.19-2.15.36-4.34,0.58-6.53s0.43-4.42.68-6.66,0.37-4.51.57-6.8,0.4-4.59.64-6.91l0.17-1.74,0.12-1.75,0.26-3.52c0.18-2.36.35-4.73,0.56-7.12s0.27-4.79.41-7.2l0.37-7.27c0.07-2.43.08-4.88,0.12-7.32s0.1-4.91,0-7.36l-0.21-7.37c-0.08-4.93-.52-9.83-0.8-14.73-0.12-2.45-.42-4.88-0.63-7.32l-0.71-7.27c-1.2-9.63-2.4-19.14-4.1-28.25-0.76-4.58-1.72-9-2.61-13.41-0.42-2.19-1-4.33-1.45-6.47s-0.93-4.25-1.47-6.3c-1-4.13-2-8.16-3.15-12s-2.19-7.58-3.26-11.15c-2.24-7.1-4.38-13.6-6.52-19.27s-4.08-10.59-5.77-14.61c-3.39-8-5.71-12.43-5.71-12.43Z',
                            transform: 'translate(-127.73 -157.88)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M348.9,185.48s-0.53.51-1.41,1.49c-0.45.47-1,1.1-1.61,1.85s-1.36,1.57-2.11,2.58l-2.52,3.28-2.82,4c-0.51.7-1,1.44-1.5,2.23l-1.54,2.4-1.62,2.52c-0.55.86-1.05,1.78-1.6,2.7l-3.35,5.75-3.29,6.32c-0.56,1.09-1.15,2.17-1.69,3.3l-1.61,3.45-3.31,7.11L315.85,242l-1.58,3.81c-0.53,1.27-1,2.6-1.46,3.91-1.89,5.26-4,10.52-5.54,16-0.81,2.72-1.68,5.41-2.45,8.13-0.41,1.35-.75,2.72-1.06,4.1l-1,4.1c-1.22,5.46-2.63,10.74-3.81,15.92-0.66,2.57-1.34,5.09-2.09,7.53-0.36,1.23-.76,2.43-1.14,3.62s-0.81,2.36-1.12,3.54c-1.35,4.7-2.75,9.12-4.16,13.19-0.68,2-1.43,4-2.07,5.85s-1.19,3.65-1.79,5.31c-1.16,3.34-2.28,6.24-3.26,8.63s-1.8,4.26-2.41,5.54-0.94,2-.94,2l-1.58-.23s-0.12-.75-0.26-2.14-0.33-3.43-.49-6-0.27-5.75-.29-9.35c0-1.81,0-3.72,0-5.75s0.27-4.12.47-6.32c0.38-4.4.92-9.16,1.63-14.17,0.32-2.51.92-5,1.46-7.65s1.22-5.23,1.93-7.9a134.33,134.33,0,0,1,5.61-16.09l1.59-4.07,0.79-2c0.27-.68.59-1.35,0.88-2,1.21-2.69,2.32-5.42,3.48-8.12,2.15-5.47,4.82-10.75,7.28-16,0.64-1.3,1.21-2.62,1.89-3.89l2.05-3.77,4.05-7.36c1.42-2.37,2.86-4.67,4.25-6.93l2.06-3.35c0.69-1.09,1.46-2.13,2.17-3.18l4.2-6,4.19-5.46c0.68-.86,1.3-1.74,2-2.54l2-2.35,1.91-2.22c0.61-.73,1.22-1.41,1.85-2.06l3.44-3.64c1.1-1.09,2.15-2.06,3.07-2.94s1.8-1.63,2.55-2.29,1.39-1.21,1.95-1.64c1.09-.88,1.67-1.29,1.67-1.29Z',
                            transform: 'translate(-127.73 -157.88)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M323.46,335.4s-1.23,1.78-3.22,5c-1,1.63-2.16,3.62-3.45,5.93s-2.68,5-4.17,7.83-3,6-4.52,9.43-3.07,7-4.52,10.71-2.89,7.64-4.28,11.61c-0.67,2-1.31,4-2,6s-1.26,4.06-1.81,6.11-1.13,4.1-1.52,6.18l-0.65,3.1c-0.2,1-.36,2.07-0.54,3.1l-0.54,3.06-0.48,3-1.08,5.9c-0.21,1-.4,1.92-0.63,2.85s-0.4,1.88-.62,2.8l-1.34,5.4c-0.93,3.51-1.75,6.86-2.63,10l-1.2,4.47L283.12,452c-0.69,2.57-1.48,4.82-2,6.7s-1.1,3.36-1.49,4.38-0.62,1.57-.62,1.57l-1.6,0s-0.23-.54-0.6-1.57-0.87-2.55-1.45-4.5a71.86,71.86,0,0,1-1.56-7.09c-0.29-1.38-.42-2.85-0.62-4.4s-0.36-3.2-.43-4.9-0.11-3.49-.15-5.34,0.09-3.75.19-5.71,0.31-4,.57-6c0.14-1,.27-2.05.45-3.08s0.42-2.06.64-3.11,0.48-2.09.76-3.14,0.62-2.09.95-3.13,0.68-2.1,1-3.14l1.18-3.13c1.59-4.19,3.37-8.36,5.07-12.54,0.83-2.1,1.78-4.14,2.66-6.2s1.88-4.06,2.85-6c2-4,4-7.8,6.13-11.43s4.26-7.07,6.4-10.26,4.24-6.14,6.23-8.82,3.92-5.06,5.65-7.13,3.29-3.85,4.61-5.27c2.62-2.85,4.27-4.37,4.27-4.37Z',
                            transform: 'translate(-127.73 -157.88)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M297.62,465.49s0.13-1.31.48-3.57c0.15-1.14.39-2.5,0.67-4.07s0.6-3.34,1-5.25,0.85-4,1.39-6.18,1.11-4.49,1.76-6.86,1.4-4.81,2.19-7.27,1.73-4.93,2.6-7.43,1.76-5,2.6-7.52a44.1,44.1,0,0,1,3-7.14,34.82,34.82,0,0,1,4.27-5.9,41.45,41.45,0,0,1,9.44-8,27.72,27.72,0,0,1,4.07-2.09c1.2-.5,2.15-0.85,2.83-1.06s1.05-.3,1.05-0.3l1.18,1.08s0,0.4-.14,1.1-0.28,1.7-.54,2.9c-0.13.6-.3,1.24-0.47,1.93s-0.4,1.41-.6,2.2a49.62,49.62,0,0,1-1.59,5l-1,2.78c-0.36.94-.75,1.9-1.18,2.86s-0.85,2-1.34,3a30.84,30.84,0,0,1-1.62,2.94c-0.63.95-1.25,1.94-2,2.9s-1.47,1.91-2.23,2.88c-1.52,1.94-3,4-4.35,6.08l-3.87,6.42c-1.24,2.15-2.54,4.23-3.7,6.31l-1.77,3-1.66,2.93c-1.11,1.9-2.08,3.73-3,5.41l-2.51,4.62-1.9,3.59L299.15,466Z',
                            transform: 'translate(-127.73 -157.88)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M128.61,289.53a90.17,90.17,0,0,1,8.28,5.64c2.54,1.92,5.58,4.32,8.89,7.29s7,6.38,10.73,10.39q1.44,1.47,2.85,3.08c0.95,1.07,1.93,2.14,2.9,3.26,1.89,2.27,3.91,4.58,5.82,7.08,4,4.91,7.72,10.4,11.48,16.18,1.8,2.93,3.72,5.88,5.43,9,0.87,1.55,1.78,3.09,2.63,4.68l2.46,4.82,1.24,2.43,1.16,2.48,2.31,5c1.48,3.36,2.87,6.78,4.27,10.2s2.63,6.91,3.86,10.38l1.79,5.22,0.9,2.6c0.3,0.87.54,1.75,0.81,2.62a167.68,167.68,0,0,1,5.25,20.76c0.54,3.43,1.07,6.8,1.43,10.12s0.5,6.59.68,9.76c0.12,1.58.13,3.15,0.13,4.69l0,4.55,0,4.39c0,1.44-.14,2.85-0.22,4.23-0.16,2.76-.37,5.4-0.57,7.9-0.08,1.25-.27,2.47-0.42,3.65s-0.31,2.33-.47,3.44c-0.31,2.22-.64,4.29-1,6.2-0.14,1-.33,1.87-0.52,2.74l-0.55,2.49c-0.73,3.15-1.34,5.6-1.8,7.27s-0.72,2.55-.72,2.55l-1.6-.1s-0.19-.91-0.49-2.61-0.7-4.18-1.14-7.32-1-6.93-1.59-11.25c-0.33-2.16-.52-4.46-0.91-6.86s-0.75-4.93-1.09-7.56l-0.54-4-0.67-4.15c-0.43-2.81-.8-5.73-1.31-8.69s-1-6-1.49-9.13-1.11-6.26-1.6-9.5c-0.2-1.62-.54-3.23-0.8-4.87s-0.53-3.29-.79-5l-0.39-2.5c-0.17-.83-0.3-1.67-0.46-2.5l-0.9-5.06c-0.16-.85-0.29-1.7-0.47-2.54l-0.56-2.53-1.14-5.09c-0.34-1.71-.86-3.38-1.33-5.06L187,385.27c-1.08-3.32-2.15-6.66-3.31-10l-1.83-4.89L180.92,368l-1-2.39-2-4.76-2.11-4.65c-1.35-3.11-2.92-6.07-4.38-9-3.06-5.84-6.23-11.4-9.52-16.5-1.59-2.59-3.3-5-4.89-7.38-0.82-1.17-1.66-2.3-2.47-3.42s-1.61-2.21-2.44-3.25c-3.21-4.24-6.38-8-9.26-11.19s-5.57-5.9-7.79-8.09-4.09-3.78-5.36-4.86l-1.47-1.2-0.51-.4Z',
                            transform: 'translate(-127.73 -157.88)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M155.42,215.26s1.8,2.12,4.75,5.95c1.49,1.91,3.23,4.27,5.2,7s4.15,5.86,6.42,9.34,4.69,7.28,7.19,11.35c1.22,2,2.5,4.14,3.72,6.33s2.51,4.41,3.75,6.7c2.51,4.57,5,9.37,7.35,14.33s4.65,10.06,6.78,15.24l1.63,3.88q0.76,2,1.57,3.9c1.09,2.58,2.08,5.19,3.09,7.78a130.56,130.56,0,0,1,5.07,15.53c0.65,2.57,1.12,5.15,1.58,7.66s0.69,5,1,7.44a116.54,116.54,0,0,1,.64,13.75,110.41,110.41,0,0,1-.68,11.63c-0.43,3.45-1,6.45-1.46,8.89s-1.1,4.35-1.49,5.64-0.62,2-.62,2l-1.6,0s-0.23-.69-0.6-2-0.87-3.15-1.45-5.5-1.38-5.19-2.14-8.41-1.69-6.83-2.72-10.73c-0.51-1.95-.94-4-1.54-6.07s-1-4.25-1.64-6.46L198.32,337q-0.41-1.71-.87-3.44c-0.63-2.31-1.13-4.7-1.72-7.12-1.13-4.85-2.09-9.92-3.21-15.08-0.57-2.57-1.13-5.18-1.82-7.77s-1.39-5.18-2.17-7.76c-1.54-5.16-3.29-10.26-5.06-15.27s-3.63-9.92-5.53-14.64-3.84-9.24-5.68-13.54-3.72-8.31-5.51-12-3.43-7.06-4.94-10-2.88-5.53-4-7.64c-2.27-4.23-3.68-6.56-3.68-6.56Z',
                            transform: 'translate(-127.73 -157.88)',
                          },
                        }),
                      ],
                    ),
                  ])
                : e._e(),
              e._v(' '),
              1 == e.type
                ? n('div', { attrs: { id: 'short' }, on: { click: e.longBrush } }, [
                    n(
                      'svg',
                      {
                        attrs: {
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 160.94 54.19',
                        },
                      },
                      [
                        n('title', [e._v('Untitled-1')]),
                        n('path', {
                          attrs: {
                            d: 'M452.82,469.92s-0.25-.07-0.65-0.23c-0.21-.08-0.45-0.18-0.72-0.3s-0.6-.26-0.91-0.43a18.91,18.91,0,0,1-4.45-3.12,17.34,17.34,0,0,1-2.13-2.39,10.21,10.21,0,0,1-1.59-3,13.64,13.64,0,0,1-.53-3.59,31,31,0,0,0-.34-3.78c-0.43-2.46-.81-4.93-1.09-7.28-0.12-1.18-.27-2.31-0.36-3.4l-0.28-3.06c-0.09-.95-0.13-1.83-0.19-2.61s-0.1-1.46-.12-2c-0.06-1.12-.07-1.77-0.07-1.77l1.32-.48s0.41,0.5,1.09,1.4c0.35,0.45.75,1,1.21,1.62s1,1.34,1.53,2.12l1.75,2.53c0.63,0.9,1.24,1.86,1.91,2.84,1.3,2,2.59,4.12,3.84,6.28a31.06,31.06,0,0,0,2.16,3.12,13.64,13.64,0,0,1,1.9,3.09,10.21,10.21,0,0,1,.68,3.29,17.34,17.34,0,0,1-.1,3.2,18.91,18.91,0,0,1-1.4,5.25c-0.12.33-.29,0.65-0.42,0.92s-0.24.5-.36,0.69c-0.21.38-.35,0.6-0.35,0.6Z',
                            transform: 'translate(-439.38 -415.77)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M481.34,469.75s-0.22-.18-0.59-0.53-0.86-.87-1.44-1.53a26.81,26.81,0,0,1-3.66-5.6,28,28,0,0,1-1.56-3.83,18.17,18.17,0,0,1-.91-4.35,23.42,23.42,0,0,1,.27-4.77c0.22-1.64.43-3.3,0.49-4.95,0.12-3.3.29-6.6,0.53-9.7,0.14-1.55.25-3.05,0.39-4.48l0.4-4c0.12-1.24.27-2.39,0.39-3.4s0.22-1.9.33-2.62c0.19-1.46.32-2.29,0.32-2.29l1.39-.13s0.29,0.79.76,2.19c0.24,0.7.52,1.54,0.83,2.51s0.68,2.06,1,3.26l1.16,3.87c0.42,1.37.81,2.82,1.24,4.32,0.84,3,1.63,6.21,2.38,9.42,0.38,1.61.9,3.2,1.43,4.76a23.42,23.42,0,0,1,1.18,4.63,18.17,18.17,0,0,1-.06,4.45,28,28,0,0,1-.8,4.06,26.81,26.81,0,0,1-2.52,6.2c-0.44.76-.82,1.36-1.12,1.78s-0.47.64-.47,0.64Z',
                            transform: 'translate(-439.38 -415.77)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M509.9,469.56s-0.18-.19-0.45-0.53c-0.15-.17-0.3-0.38-0.47-0.62s-0.39-.52-0.57-0.83a18.86,18.86,0,0,1-2.3-4.91,17.26,17.26,0,0,1-.66-3.13,10.15,10.15,0,0,1,.09-3.35,13.57,13.57,0,0,1,1.32-3.37,30.89,30.89,0,0,0,1.58-3.44c0.85-2.34,1.75-4.67,2.68-6.84,0.48-1.08.92-2.13,1.38-3.12l1.28-2.79c0.39-.86.8-1.65,1.13-2.35s0.64-1.31.9-1.81c0.51-1,.82-1.57.82-1.57l1.38,0.24s0.1,0.64.25,1.75c0.08,0.56.16,1.23,0.24,2s0.19,1.65.27,2.59l0.26,3.06c0.1,1.09.16,2.22,0.24,3.4,0.14,2.36.2,4.85,0.21,7.34a30.91,30.91,0,0,0,.33,3.77,13.57,13.57,0,0,1,.11,3.61,10.15,10.15,0,0,1-1,3.18,17.26,17.26,0,0,1-1.68,2.72,18.86,18.86,0,0,1-3.83,3.84c-0.27.23-.57,0.42-0.82,0.58s-0.46.31-.66,0.42c-0.37.23-.6,0.34-0.6,0.34Z',
                            transform: 'translate(-439.38 -415.77)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M563.7,470s-0.27-.09-0.71-0.29-1.07-.51-1.82-0.92a25,25,0,0,1-5.12-3.88,25.52,25.52,0,0,1-2.61-3,16.4,16.4,0,0,1-2.15-3.63,21.17,21.17,0,0,1-1.16-4.39c-0.28-1.55-.57-3.12-1-4.62-0.86-3-1.68-6-2.36-8.92-0.33-1.44-.67-2.83-1-4.16L545,432.44c-0.26-1.16-.45-2.24-0.64-3.19s-0.35-1.78-.46-2.47c-0.25-1.37-.37-2.17-0.37-2.17l1.28-.57s0.51,0.62,1.36,1.73c0.43,0.55.95,1.22,1.52,2s1.25,1.65,1.94,2.61l2.24,3.12c0.8,1.1,1.6,2.28,2.45,3.5,1.68,2.44,3.38,5.08,5,7.73,0.83,1.33,1.8,2.59,2.76,3.84a21.17,21.17,0,0,1,2.48,3.8,16.4,16.4,0,0,1,1.26,4,25.52,25.52,0,0,1,.44,3.91,25,25,0,0,1-.55,6.4c-0.19.83-.38,1.49-0.54,2s-0.26.73-.26,0.73Z',
                            transform: 'translate(-439.38 -415.77)',
                          },
                        }),
                        n('path', {
                          attrs: {
                            d: 'M587.18,466.16s-0.15-.24-0.39-0.69-0.54-1.09-.88-1.89a26.42,26.42,0,0,1-1.69-6.41,27.43,27.43,0,0,1-.26-4.08,17.79,17.79,0,0,1,.52-4.37,22.93,22.93,0,0,1,1.77-4.39c0.73-1.46,1.45-3,2-4.48,1.16-3,2.37-6.09,3.58-8.92,0.62-1.41,1.2-2.78,1.79-4.07l1.65-3.64c0.51-1.13,1-2.15,1.44-3.06s0.81-1.7,1.14-2.35c0.64-1.3,1-2,1-2l1.36,0.32s0,0.84,0,2.29c0,0.73,0,1.61,0,2.62s0,2.15-.06,3.38l-0.13,4c0,1.42-.13,2.9-0.19,4.44-0.16,3.08-.43,6.34-0.73,9.58C599,444,599,445.68,599,447.32a22.93,22.93,0,0,1-.36,4.72,17.79,17.79,0,0,1-1.47,4.15,27.43,27.43,0,0,1-2,3.54,26.42,26.42,0,0,1-4.35,5c-0.66.57-1.21,1-1.63,1.31s-0.65.44-.65,0.44Z',
                            transform: 'translate(-439.38 -415.77)',
                          },
                        }),
                      ],
                    ),
                  ])
                : e._e(),
            ]),
            e._v(' '),
            n(
              'button',
              {
                ref: 'reset',
                staticClass: 'reset icon',
                attrs: { id: 'reset' },
              },
              [
                n(
                  'svg',
                  {
                    attrs: {
                      width: '100%',
                      height: '100%',
                      viewBox: '0 0 30 30',
                      version: '1.1',
                      xmlns: 'http://www.w3.org/2000/svg',
                      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                    },
                  },
                  [
                    n('g', { attrs: { id: 'Artboard' } }, [
                      n('path', {
                        attrs: {
                          d: 'M14.393031,26.4151111 C20.4681632,26.4151111 25.393031,21.4902434 25.393031,15.4151111 C25.393031,9.33997886 20.4681632,4.41511111 14.393031,4.41511111 C8.31789873,4.41511111 3.39303098,9.33997886 3.39303098,15.4151111',
                          id: 'Oval',
                          stroke: '#000000',
                          fill: 'none',
                          'stroke-width': '2',
                          transform:
                            'translate(14.393031, 15.415111) rotate(-140.000000) translate(-14.393031, -15.415111) ',
                        },
                      }),
                      e._v(' '),
                      n('polygon', {
                        attrs: {
                          id: 'Triangle',
                          fill: '#000000',
                          transform:
                            'translate(24.000000, 9.000000) rotate(-230.000000) translate(-24.000000, -9.000000) ',
                          points: '24.3802041 5 30 13 18 13',
                        },
                      }),
                    ]),
                  ],
                ),
              ],
            ),
          ])
        },
        staticRenderFns: [],
      }
    },,,,,
    function (e, t) {},
  ]),
  [267],
)
