;(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    860: function (n, e, a) {
      'use strict'
      a.r(e),
        a.d(e, 'default', function () {
          return c
        })
      var r = a(0),
        o = a.n(r),
        u = a(3)
      function c(n) {
        return o.a.createElement(
          'a',
          {
            className: 'link-group',
            onClick: function () {
              n.inGroupTrue(!0), n.inIDGroup(n.groups.id)
            }
          },
          o.a.createElement(i, null),
          o.a.createElement('h5', null, n.groups.nameGroup)
        )
      }
      var i = a.n(u).a.div.withConfig({
        displayName: 'TaskManager__ImgPage',
        componentId: 'sc-1muoq4w-0'
      })(['width:60px;height:60px;background-color:#ccc;border-radius:5px;'])
    }
  }
])