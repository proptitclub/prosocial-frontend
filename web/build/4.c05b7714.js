;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4, 15, 23, 35, 36],
  {
    876: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ProfilePage', function () {
          return m
        })
      var a = n(0),
        l = n.n(a),
        r = n(3),
        i = n.n(r),
        o = n(2),
        c = n(63),
        m = function (e) {
          var t = e.state,
            n = e.setState,
            a = t.name,
            r = t.username,
            i = t.avt,
            m = t.cover,
            s = t.dob,
            d = t.gender,
            g = t.grade,
            f = t.address,
            h = t.quotes,
            b = t.position,
            E = t.tab,
            p = (t.title, t.missions)
          return l.a.createElement(
            o.Page,
            null,
            l.a.createElement(
              o.Page.MapHeader,
              null,
              l.a.createElement(u, { src: m })
            ),
            l.a.createElement(
              o.Page.Main,
              null,
              l.a.createElement(
                o.Grid.Row,
                null,
                l.a.createElement(
                  o.Grid.Col,
                  { md: 4 },
                  l.a.createElement(
                    o.Profile,
                    {
                      name: a,
                      backgroundURL: m,
                      avatarURL: i,
                      twitterURL: 'ntheanh201'
                    },
                    l.a.createElement('strong', null, b),
                    l.a.createElement('br', null),
                    h
                  )
                ),
                l.a.createElement(
                  o.Grid.Col,
                  { md: 8 },
                  l.a.createElement(
                    c.a,
                    { statusColor: 'blue' },
                    l.a.createElement(
                      c.d,
                      null,
                      l.a.createElement(
                        c.f,
                        null,
                        E ? 'Nhiệm vụ hàng tháng' : 'Thông tin cá nhân'
                      ),
                      l.a.createElement(
                        c.e,
                        null,
                        l.a.createElement(o.Form.Switch, {
                          value: E ? 1 : 0,
                          className: 'm-0',
                          onClick: function () {
                            return n({ tab: !E })
                          }
                        })
                      )
                    ),
                    l.a.createElement(
                      c.b,
                      null,
                      E
                        ? l.a.createElement(function () {
                            return l.a.createElement(
                              o.Table,
                              {
                                responsive: !0,
                                highlightRowOnHover: !0,
                                hasOutline: !0,
                                verticalAlign: 'center',
                                cards: !0,
                                className: 'text-nowrap'
                              },
                              l.a.createElement(
                                o.Table.Header,
                                null,
                                l.a.createElement(
                                  o.Table.Row,
                                  null,
                                  l.a.createElement(
                                    o.Table.ColHeader,
                                    null,
                                    'Tên nhiệm vụ'
                                  ),
                                  l.a.createElement(
                                    o.Table.ColHeader,
                                    null,
                                    'Trạng thái'
                                  ),
                                  l.a.createElement(
                                    o.Table.ColHeader,
                                    { alignContent: 'center' },
                                    l.a.createElement('i', {
                                      className: 'icon-settings'
                                    })
                                  )
                                )
                              ),
                              l.a.createElement(
                                o.Table.Body,
                                null,
                                p.map(function (e) {
                                  var t = e.id,
                                    n = e.content,
                                    a = e.completed
                                  return l.a.createElement(
                                    o.Table.Row,
                                    { key: t },
                                    l.a.createElement(
                                      o.Table.Col,
                                      null,
                                      l.a.createElement('div', null, n)
                                    ),
                                    l.a.createElement(
                                      o.Table.Col,
                                      null,
                                      l.a.createElement(
                                        'strong',
                                        null,
                                        a ? 'Hoàn thành' : 'Chưa hoàn thành'
                                      )
                                    ),
                                    l.a.createElement(
                                      o.Table.Col,
                                      { alignContent: 'center' },
                                      l.a.createElement(o.Icon, {
                                        link: !0,
                                        name: 'check'
                                      })
                                    )
                                  )
                                })
                              )
                            )
                          }, null)
                        : l.a.createElement(function () {
                            return l.a.createElement(
                              o.Timeline,
                              null,
                              l.a.createElement(o.Timeline.Item, {
                                title: 'Họ và tên: ' + a,
                                badgeColor: 'red'
                              }),
                              l.a.createElement(o.Timeline.Item, {
                                title: 'Username: ' + r,
                                badge: !0
                              }),
                              l.a.createElement(o.Timeline.Item, {
                                title: 'Ngày tháng năm sinh: ' + s,
                                badgeColor: 'blue'
                              }),
                              l.a.createElement(o.Timeline.Item, {
                                title: 'Giới tính: ' + d,
                                badgeColor: 'yellow'
                              }),
                              l.a.createElement(o.Timeline.Item, {
                                title: 'Khoá: ' + g,
                                badgeColor: 'wheat'
                              }),
                              l.a.createElement(o.Timeline.Item, {
                                title: 'Quê quán: ' + f,
                                badge: !0
                              }),
                              l.a.createElement(o.Timeline.Item, {
                                title: 'Châm ngôn yêu thích: ' + h,
                                badgeColor: 'green'
                              })
                            )
                          }, null)
                    )
                  )
                )
              )
            )
          )
        },
        u = i.a.img.withConfig({
          displayName: 'ProfilePage__Cover',
          componentId: 'sc-1ji7bfp-0'
        })(['width:100%;height:100%;object-fit:cover;'])
    },
    882: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ProfilePageContainer', function () {
          return u
        })
      var a = n(0),
        l = n.n(a),
        r = n(119),
        i = n(876),
        o = n(883),
        c = n(884)
      function m(e, t) {
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
              a = !0,
              l = !1,
              r = void 0
            try {
              for (
                var i, o = e[Symbol.iterator]();
                !(a = (i = o.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                a = !0
              );
            } catch (e) {
              ;(l = !0), (r = e)
            } finally {
              try {
                a || null == o.return || o.return()
              } finally {
                if (l) throw r
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
      var u = function () {
        var e = {
            id: 1,
            name: 'Bùi Phương Ngọc Mai',
            username: 'ngocmai.buiphuong',
            avt: c.default,
            cover: o.default,
            dob: '19/12/2000',
            gender: 'Nữ',
            grade: 'D18',
            address: 'Ba Vì, Hà Nội',
            quotes: 'The best or nothing',
            position: 'Ban Sự kiện',
            tab: !1,
            title: 'Profile Information',
            facebook: 'ngocmai.buiphuong',
            missions: [
              { id: 1, content: 'Làm app Java', completed: !1 },
              { id: 2, content: 'Học tiếng Anh', completed: !0 }
            ]
          },
          t = m(Object(r.a)(e), 2),
          n = { state: t[0], setState: t[1] }
        return l.a.createElement(i.ProfilePage, n)
      }
    },
    883: function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/cover.0687d995.jpg')
    },
    884: function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/avt.effffb31.jpg')
    },
    893: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n(882)
      n.d(t, 'default', function () {
        return a.ProfilePageContainer
      })
    }
  }
])