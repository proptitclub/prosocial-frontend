;(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    846: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'Groups', function () {
          return u
        })
      var a = t(0),
        o = t.n(a),
        r = t(3),
        l = t.n(r),
        c = t(845),
        i = t(2),
        u = Object(c.withRouter)(function (e) {
          var n = e.groups,
            t = e.history
          return o.a.createElement(
            i.Table,
            {
              responsive: !0,
              highlightRowOnHover: !0,
              hasOutline: !0,
              verticalAlign: 'center',
              cards: !0,
              className: 'text-nowrap'
            },
            o.a.createElement(
              i.Table.Body,
              null,
              n.map(function (e) {
                var n = e.id,
                  a = e.name,
                  r = e.description
                return o.a.createElement(
                  p,
                  {
                    key: n,
                    onClick: function () {
                      return (function (e) {
                        t.push({ pathname: '/groups/'.concat(e) })
                      })(n)
                    }
                  },
                  o.a.createElement(
                    i.Table.Col,
                    null,
                    o.a.createElement(
                      'div',
                      null,
                      o.a.createElement('strong', null, a)
                    ),
                    o.a.createElement(s, null, r)
                  ),
                  o.a.createElement(
                    i.Table.Col,
                    { alignContent: 'center' },
                    o.a.createElement(i.Icon, {
                      link: !0,
                      name: 'chevron-down'
                    })
                  )
                )
              })
            )
          )
        }),
        s = l.a.div.withConfig({
          displayName: 'Groups__Description',
          componentId: 'vz24jl-0'
        })(['']),
        p = l()(i.Table.Row).withConfig({
          displayName: 'Groups__TableRow',
          componentId: 'vz24jl-1'
        })(['cursor:pointer;'])
    }
  }
])
