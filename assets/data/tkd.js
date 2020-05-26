/**
 * Created by dandan on 2020/5/26.
 * vision:1.0
 * title:
 * e-mail:supericesun@gmail.com
 */

let tkd = {
  index: {
    title: '首页',
    meta: [
      {key: 'keywords', content: 'nuxtjs，测试项目，首页'},
      {key: 'description', content: '这是nuxtjs测试项目首页'},
    ]
  }
};

for (let key in tkd) {
  tkd[key].title += '-蛋蛋的nuxtjs测试项目'
}

export default tkd;