import { range } from 'lodash'

export default range(1, 665).map(num =>
  ({ component: () => import(`./views/Euler${num}`), path: `/${num}`, name: `Euler ${num}` })
)
