export default ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth) {
      if (localStorage.getItem('TOKEN')) {
        next()
      } else {
        next('/erro')
      }
    } else {
      next()
    }
  })
}
