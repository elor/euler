import { range } from 'lodash'

export default range(1, 665).map(num =>
  ({
    component: () => import(`./views/Euler${num}`).catch(err => { console.error(err); return import(`./views/EulerTemplate`) }),
    path: `/${num}`,
    name: `Euler ${num}`
  })
)
