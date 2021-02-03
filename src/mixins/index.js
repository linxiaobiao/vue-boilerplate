/**
 * mixins文件混入
 */
export default {
  methods: {
    goToPage (path, query = {}, type = 'push') {
      this.$router[type]({
        path,
        query: {
          ...this.$store.state.app.urlParams,
          ...query
        }
      })
    }
  }
}
