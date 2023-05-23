import { Search } from '@icon-park/vue-next'
import { Like } from '@icon-park/vue-next'
import { Login } from '@icon-park/vue-next'
import { Rss } from '@icon-park/vue-next'
import { User } from '@icon-park/vue-next'
import {CloseOne} from '@icon-park/vue-next'

export function IconPark(app) {
    app.component('Search', Search)
    app.component('Like', Like)
    app.component('Login', Login)
    app.component('Rss', Rss)
    app.component('User', User)
    app.component('CloseOne', CloseOne)
}