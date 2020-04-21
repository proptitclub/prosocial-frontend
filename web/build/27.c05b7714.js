;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    844: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n(0),
        r = n.n(o),
        a = n(845),
        i = (n(56), n(3)),
        c = n.n(i),
        u = n(63)
      Object(o.createContext)(),
        c.a.div.withConfig({
          displayName: 'Modal__CloseButton',
          componentId: 'sc-1pcjumq-0'
        })(
          [
            "position:absolute;z-index:3;right:12px;top:12px;width:32px;height:32px;cursor:pointer;&:before,&:after{position:absolute;content:'';width:1px;top:8px;right:16px;background:#666;",
            ' height:16px;}&:after{transform:rotate(45deg);}&:before{transform:rotate(-45deg);}'
          ],
          function (e) {
            return e.type && 'background: #fff;'
          }
        ),
        c.a.div.withConfig({
          displayName: 'Modal__ModalWrapper',
          componentId: 'sc-1pcjumq-1'
        })([
          'position:fixed;z-index:1000;height:100%;width:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;'
        ]),
        c.a.div.withConfig({
          displayName: 'Modal__ModalContainer',
          componentId: 'sc-1pcjumq-2'
        })(
          [
            'z-index:1002;position:relative;max-width:',
            ';max-height:',
            ';height:',
            ';width:',
            ';background-color:#fff;box-shadow:8px 8px 16px rgba(0,0,0,0.1412);display:flex;flex-direction:',
            ';'
          ],
          function (e) {
            return e.maxWidth
          },
          function (e) {
            return e.maxHeight
          },
          function (e) {
            return e.height
          },
          function (e) {
            return e.width
          },
          function (e) {
            return e.flexDirection
          }
        ),
        c.a.div.withConfig({
          displayName: 'Modal__ModalOverlay',
          componentId: 'sc-1pcjumq-3'
        })([
          'background-color:rgba(0,0,0,0.4);position:fixed;height:100%;width:100%;z-index:1001;top:0;left:0;display:flex;align-items:center;justify-content:center;'
        ]),
        c.a.h2.withConfig({
          displayName: 'Modal__ModalTitle',
          componentId: 'sc-1pcjumq-4'
        })(
          [
            'font-size:18px;font-weight:300;text-align:center;margin:0;padding-bottom:16px;',
            ';'
          ],
          function (e) {
            return e.type && 'padding-left: 10px;'
          }
        ),
        c.a.div.withConfig({
          displayName: 'Modal__ModalHeader',
          componentId: 'sc-1pcjumq-5'
        })([
          'padding:24px;padding-bottom:0px;border-bottom:1px solid #ddd;flex:0 0 auto;'
        ]),
        c.a.div.withConfig({
          displayName: 'Modal__ModalFooter',
          componentId: 'sc-1pcjumq-6'
        })(['display:flex;flex-direction:row;flex:0 0 auto;']),
        c.a.div.withConfig({
          displayName: 'Modal__ModalContent',
          componentId: 'sc-1pcjumq-7'
        })([
          'padding:24px;flex:0 1 auto;overflow:auto;display:flex;flex-direction:column;height:100%;'
        ])
      var s = c.a.div.withConfig({
          displayName: 'Modal__ButtonWrapper',
          componentId: 'sc-1pcjumq-8'
        })(['display:flex;flex:0 0 auto;']),
        l = c.a.button.withConfig({
          displayName: 'Modal__Button',
          componentId: 'sc-1pcjumq-9'
        })(
          [
            'position:relative;flex:0 1 100%;border:0;height:60px;font-size:16px;text-transform:uppercase;padding:14px;cursor:pointer;outline:none;background:#f8f8f8;color:#999;',
            ' ',
            ' &:hover:not(:disabled){',
            ';',
            ';}letter-spacing:0.05em;border-radius:0px;&:first-child:last-child{text-align:center;}&:disabled{opacity:0.5;cursor:not-allowed;}transition:all 0.1412s ease-in-out;'
          ],
          function (e) {
            return (
              'warning' === e.template &&
              '\n    background: #ffa502;\n    color: #fff;\n  '
            )
          },
          function (e) {
            return (
              'primary' === e.template &&
              '\n    background: #12B1CF;\n    color: #fff;\n  '
            )
          },
          function (e) {
            return (
              'warning' === e.template &&
              '\n      color: #ffa502;\n      background: #F8F8F8;\n    '
            )
          },
          function (e) {
            return (
              'primary' === e.template &&
              '\n      color: #12B1CF;\n      background: #F8F8F8;\n    '
            )
          }
        ),
        p =
          (c()(l).withConfig({
            displayName: 'Modal__SecondaryButton',
            componentId: 'sc-1pcjumq-10'
          })(['background:#ddd;color:#666;&:hover{background:#999;}']),
          c()(l).withConfig({
            displayName: 'Modal__SuccessButton',
            componentId: 'sc-1pcjumq-11'
          })(['background:#2ecc71;color:#fff;&:hover{background:#3edc81;}']),
          c()(l).withConfig({
            displayName: 'Modal__DangerButton',
            componentId: 'sc-1pcjumq-12'
          })(['background:#ec644b;color:#fff;']),
          c()(l).withConfig({
            displayName: 'Modal__PrimaryButton',
            componentId: 'sc-1pcjumq-13'
          })([
            'background:#12b1cf;color:#fff;&:hover:not(:disabled){color:#12b1cf;background:#f8f8f8;}'
          ]),
          c()(s).withConfig({
            displayName: 'Modal__ButtonPane',
            componentId: 'sc-1pcjumq-14'
          })(['margin-top:15px;width:inherit;']),
          c()(u.j).withConfig({
            displayName: 'Modal__RingLoader',
            componentId: 'sc-1pcjumq-15'
          })(['position:absolute;right:30px;top:10px;']),
          n(2)),
        m = n(119),
        d = n(118),
        f = n(862)
      function g(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                b(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      function y(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return
            var n = [],
              o = !0,
              r = !1,
              a = void 0
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(o = (i = c.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              ;(r = !0), (a = e)
            } finally {
              try {
                o || null == c.return || c.return()
              } finally {
                if (r) throw a
              }
            }
            return n
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      var x = function (e) {
        return r.a.createElement(
          'svg',
          e,
          r.a.createElement('path', {
            d: 'M58 47V17L33 2h-2L6 17v30l25 15h2z',
            fill: '#4370ff'
          }),
          r.a.createElement('path', {
            d:
              'M18.26 39.07L11.19 32l7.07-7.07 2.83 2.83L16.85 32l4.24 4.24zM45.74 39.07l-2.83-2.83L47.15 32l-4.24-4.24 2.83-2.83L52.81 32zM23.917 37.253l13.334-13.334 2.828 2.828-13.334 13.334z'
          }),
          r.a.createElement('path', {
            d:
              'M51.44 15.39L56 18.13v27.74L32.45 60h-.9L8 45.87V18.13L31.55 4h.9l15.45 9.27 2.91-2.91L33.55 0h-3.1L4 15.87v32.26L30.45 64h3.1L60 48.13V15.87l-5.65-3.39z'
          })
        )
      }
      x.defaultProps = {
        height: '512',
        viewBox: '0 0 64 64',
        width: '512',
        xmlns: 'http://www.w3.org/2000/svg',
        "'data-name'": 'Layer 1'
      }
      var j = [
          {
            value: 'Home',
            to: '/',
            icon: 'home',
            LinkComponent: Object(a.withRouter)(a.NavLink),
            useExact: !0
          },
          {
            value: 'Groups',
            to: '/groups',
            icon: 'cpu',
            LinkComponent: Object(a.withRouter)(a.NavLink)
          },
          {
            value: 'Gallery',
            to: '/gallery',
            icon: 'image',
            LinkComponent: Object(a.withRouter)(a.NavLink)
          },
          {
            value: 'ProPTIT Chat Room',
            to: '/chat',
            icon: 'message-circle',
            LinkComponent: Object(a.withRouter)(a.NavLink)
          }
        ],
        v = Object(a.withRouter)(function (e) {
          var t = e.history,
            n = e.children,
            i = Object(o.useContext)(d.b),
            c = i.isLoggedIn,
            s = i.user,
            l = {
              avatarLogo: x,
              avatarURL: '',
              avatarOptions: { width: '32px', height: '32px' },
              name: s.name,
              description: '@' + s.username,
              options: [
                {
                  icon: 'user',
                  value: 'Profile',
                  to: '/#/profile/'.concat(s.id)
                },
                { icon: 'settings', value: 'Settings', to: '/#/settings' },
                { icon: 'mail', value: 'Inbox', badge: '6', to: '/#/messages' },
                { isDivider: !0 },
                { icon: 'help-circle', value: 'Need help?', to: '/#/helps' },
                { icon: 'log-out', value: 'Sign out', to: '/#/logout' }
              ]
            },
            g = r.a.createElement(
              p.Nav.Item,
              { type: 'div', className: 'd-none d-md-flex' },
              r.a.createElement(
                p.Button,
                {
                  onClick: function () {
                    return t.push({ pathname: '/login' })
                  },
                  target: '_blank',
                  outline: !0,
                  size: 'sm',
                  RootComponent: 'a',
                  color: 'primary'
                },
                'Login'
              )
            ),
            b = {
              notificationsObjects: [
                {
                  unread: !0,
                  avatarURL: 'demo/faces/male/41.jpg',
                  message: r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement('strong', null, 'Thế Anh'),
                    ' đăng 1 bài viết mới'
                  ),
                  time: '10 phút trước'
                },
                {
                  unread: !0,
                  avatarURL: 'demo/faces/female/1.jpg',
                  message: r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement('strong', null, 'Tiến Hải'),
                    ' đã trả lời bình luận của bạn'
                  ),
                  time: '1 giờ trước'
                },
                {
                  unread: !1,
                  avatarURL: 'demo/faces/female/18.jpg',
                  message: r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement('strong', null, 'Công Khanh'),
                    ' đã bày tỏ cảm xúc về bài viết của bạn'
                  ),
                  time: '2 giờ trước'
                }
              ]
            },
            v = y(Object(m.a)(b), 2),
            w = v[0],
            P = v[1],
            G = w.notificationsObjects || [],
            O = w.notificationsObjects.reduce(function (e, t) {
              return e || t.unread
            }, !1)
          return r.a.createElement(
            u.k,
            {
              headerProps: {
                href: '/',
                alt: 'ProPTIT',
                imageURL: f.a,
                navItems: c ? null : g,
                notificationsTray: c
                  ? {
                      notificationsObjects: G,
                      markAllAsRead: function () {
                        return P(
                          function () {
                            return {
                              notificationsObjects: w.notificationsObjects.map(
                                function (e) {
                                  return h({}, e, { unread: !1 })
                                }
                              )
                            }
                          },
                          function () {
                            return setTimeout(function () {
                              return P({
                                notificationsObjects: w.notificationsObjects.map(
                                  function (e) {
                                    return h({}, e, { unread: !0 })
                                  }
                                )
                              })
                            }, 5e3)
                          }
                        )
                      },
                      unread: O
                    }
                  : null,
                accountDropdown: c ? l : ''
              },
              footerProps: {
                copyright: r.a.createElement(
                  r.a.Fragment,
                  null,
                  'Copyright © 2020',
                  r.a.createElement('a', { href: '.' }, ' ProPTIT'),
                  '.'
                ),
                nav: r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    p.Grid.Col,
                    { auto: !0 },
                    r.a.createElement(
                      p.List,
                      { className: 'list-inline list-inline-dots mb-0' },
                      r.a.createElement(
                        p.List.Item,
                        { className: 'list-inline-item' },
                        r.a.createElement(a.Link, { to: './faq.html' }, 'FAQ')
                      )
                    )
                  )
                )
              },
              navProps: { itemsObjects: j },
              routerContextComponentType: Object(a.withRouter)(
                p.RouterContextProvider
              )
            },
            n
          )
        })
      function w() {
        return (w =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }).apply(this, arguments)
      }
      var P = function (e) {
          var t = e.title,
            n = void 0 !== t && t,
            o = e.children
          return r.a.createElement(
            O,
            null,
            r.a.createElement(
              v,
              null,
              r.a.createElement(
                u.g,
                null,
                r.a.createElement(p.Page.Content, { title: n }, o)
              )
            )
          )
        },
        G = function (e, t) {
          return function (n) {
            return r.a.createElement(
              P,
              w({}, t, { match: n.match }),
              r.a.createElement(e, n)
            )
          }
        },
        O = c.a.div.withConfig({
          displayName: 'NormalLayout__ContentContainer',
          componentId: 'sc-1ybfj2e-0'
        })(['']),
        C = function (e) {
          var t = e.component,
            n = e.exact,
            o = e.path
          return r.a.createElement(a.Route, {
            exact: n,
            path: o,
            component: L(t)
          })
        },
        L = function (e) {
          return function () {
            return Object(o.useContext)(d.b).isLoggedIn
              ? r.a.createElement(e, null)
              : r.a.createElement(a.Redirect, { to: '/login' })
          }
        },
        E = n(168),
        k = n.n(E)()(
          function (e) {
            return n(913)('./'.concat(e.component))
          },
          { fallback: u.i }
        ),
        M = [
          {
            path: '/',
            exact: !0,
            component: function () {
              return r.a.createElement(k, { component: 'Home' })
            }
          },
          {
            path: '/profile/:id',
            exact: !0,
            component: function () {
              return r.a.createElement(k, { component: 'ProfilePage' })
            }
          },
          {
            path: '/profile',
            exact: !0,
            component: function () {
              return r.a.createElement(k, { component: 'AllAccounts' })
            },
            title: 'Profile'
          },
          {
            path: '/login',
            exact: !0,
            component: function () {
              return r.a.createElement(k, { component: 'Login' })
            },
            withoutNormalLayout: !0
          },
          {
            path: '/logout',
            exact: !0,
            component: function () {
              return r.a.createElement(k, { component: 'Logout' })
            },
            withoutNormalLayout: !0
          },
          {
            path: '/groups',
            exact: !0,
            component: function () {
              return r.a.createElement(k, { component: 'Groups' })
            },
            title: 'Groups'
          },
          {
            path: '/groups/:id',
            exact: !0,
            component: function () {
              return r.a.createElement(k, { component: 'GroupPage' })
            },
            title: 'Group'
          },
          {
            path: '/404',
            exact: !0,
            component: function () {
              return r.a.createElement(k, { component: '404' })
            }
          }
        ]
      function _() {
        return (_ =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          }).apply(this, arguments)
      }
      function N(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              a = Object.keys(e)
            for (o = 0; o < a.length; o++)
              (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]))
        }
        return r
      }
      t.default = function () {
        return r.a.createElement(
          a.HashRouter,
          null,
          r.a.createElement(
            a.Switch,
            null,
            M.map(function (e, t) {
              switch (!0) {
                case e.redirect:
                  e.redirect
                  var n = N(e, ['redirect'])
                  return r.a.createElement(a.Redirect, _({ key: t }, n))
                case e.withoutNormalLayout:
                  var o = e.path,
                    i = e.exact,
                    c = void 0 !== i && i,
                    u = e.component
                  return r.a.createElement(a.Route, {
                    key: t,
                    path: o,
                    exact: c,
                    component: u
                  })
                case e.isPrivate:
                  var s = e.path,
                    l = e.exact,
                    p = void 0 !== l && l,
                    m = e.title,
                    d = void 0 !== m && m,
                    f = e.component
                  return r.a.createElement(C, {
                    key: t,
                    path: s,
                    exact: p,
                    component: G(f, { title: d })
                  })
                default:
                  var g = e.path,
                    h = e.exact,
                    b = void 0 !== h && h,
                    y = e.title,
                    x = void 0 !== y && y,
                    j = e.component
                  return r.a.createElement(a.Route, {
                    key: t,
                    path: g,
                    exact: b,
                    component: G(j, { title: x })
                  })
              }
            }),
            r.a.createElement(a.Redirect, { to: '/404' })
          )
        )
      }
    },
    862: function (e, t, n) {
      'use strict'
      t.a = n.p + 'static/media/ProPTIT.a5ae8609.png'
    },
    913: function (e, t, n) {
      var o = {
        './404': [895, 9, 7],
        './404/': [895, 9, 7],
        './404/index': [895, 9, 7],
        './404/index.js': [895, 9, 7],
        './Demo': [887, 9, 5],
        './Demo/': [887, 9, 5],
        './Demo/Demo': [877, 9, 19],
        './Demo/Demo.js': [877, 9, 19],
        './Demo/index': [887, 9, 5],
        './Demo/index.js': [887, 9, 5],
        './Groups': [889, 9, 0, 2],
        './Groups/': [889, 9, 0, 2],
        './Groups/GroupContainer': [878, 9, 0, 10],
        './Groups/GroupContainer.js': [878, 9, 0, 10],
        './Groups/components/CreateGroup': [859, 9, 16],
        './Groups/components/CreateGroup.js': [859, 9, 16],
        './Groups/components/CreatingGroup': [861, 9, 17],
        './Groups/components/CreatingGroup.js': [861, 9, 17],
        './Groups/components/ManageGroup': [874, 9, 12],
        './Groups/components/ManageGroup.js': [874, 9, 12],
        './Groups/components/PostGroup': [875, 9, 11],
        './Groups/components/PostGroup.js': [875, 9, 11],
        './Groups/components/TaskManager': [860, 9, 20],
        './Groups/components/TaskManager.js': [860, 9, 20],
        './Groups/index': [889, 9, 0, 2],
        './Groups/index.js': [889, 9, 0, 2],
        './Groups/mygroup/Description': [888, 9, 18],
        './Groups/mygroup/Description.js': [888, 9, 18],
        './Groups/mygroup/MenuGroup': [879, 9, 0],
        './Groups/mygroup/MenuGroup.js': [879, 9, 0],
        './Groups/mygroup/MyGroup': [873, 9, 0, 13],
        './Groups/mygroup/MyGroup.js': [873, 9, 0, 13],
        './Groups/mygroup/SettingGroup': [872, 9, 14],
        './Groups/mygroup/SettingGroup.js': [872, 9, 14],
        './Groups/styles/CreateGroup.css': [857, 7, 28],
        './Groups/styles/CreatingGroup.css': [848, 7, 29],
        './Groups/styles/Description.css': [880, 7, 30],
        './Groups/styles/ManagerGroup.css': [851, 7, 31],
        './Groups/styles/MenuGroup.css': [897, 7, 32],
        './Groups/styles/MyGroup.css': [865, 7, 33],
        './Groups/styles/SettingGroup.css': [863, 7, 34],
        './Home': [890, 9, 3],
        './Home/': [890, 9, 3],
        './Home/Home': [855, 9, 1],
        './Home/Home.js': [855, 9, 1],
        './Home/HomeContainer': [847, 9, 1],
        './Home/HomeContainer.js': [847, 9, 1],
        './Home/components/CreatePost': [850, 9, 1],
        './Home/components/CreatePost.js': [850, 9, 1],
        './Home/components/Groups': [846, 9, 21],
        './Home/components/Groups.js': [846, 9, 21],
        './Home/components/NewFeeds': [856, 9, 1],
        './Home/components/NewFeeds.js': [856, 9, 1],
        './Home/components/Post': [849, 9, 1],
        './Home/components/Post.js': [849, 9, 1],
        './Home/index': [890, 9, 3],
        './Home/index.js': [890, 9, 3],
        './Login': [891, 9, 6],
        './Login/': [891, 9, 6],
        './Login/Login': [885, 9, 22],
        './Login/Login.js': [885, 9, 22],
        './Login/index': [891, 9, 6],
        './Login/index.js': [891, 9, 6],
        './Logout': [892, 9, 8],
        './Logout/': [892, 9, 8],
        './Logout/index': [892, 9, 8],
        './Logout/index.js': [892, 9, 8],
        './ProfilePage': [893, 9, 4],
        './ProfilePage/': [893, 9, 4],
        './ProfilePage/ProfilePage': [876, 9, 23],
        './ProfilePage/ProfilePage.js': [876, 9, 23],
        './ProfilePage/ProfilePageContainer': [882, 9, 15],
        './ProfilePage/ProfilePageContainer.js': [882, 9, 15],
        './ProfilePage/assets/avt.jpg': [884, 9, 35],
        './ProfilePage/assets/cover.jpg': [883, 9, 36],
        './ProfilePage/assets/cover2.jpg': [914, 9, 37],
        './ProfilePage/index': [893, 9, 4],
        './ProfilePage/index.js': [893, 9, 4],
        './Settings': [894, 7, 9],
        './Settings/': [894, 7, 9],
        './Settings/Settings': [900, 7, 24],
        './Settings/Settings.js': [900, 7, 24],
        './Settings/index': [894, 7, 9],
        './Settings/index.js': [894, 7, 9]
      }
      function r(e) {
        if (!n.o(o, e))
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'")
            throw ((t.code = 'MODULE_NOT_FOUND'), t)
          })
        var t = o[e],
          r = t[0]
        return Promise.all(t.slice(2).map(n.e)).then(function () {
          return n.t(r, t[1])
        })
      }
      ;(r.keys = function () {
        return Object.keys(o)
      }),
        (r.id = 913),
        (e.exports = r)
    }
  }
])
