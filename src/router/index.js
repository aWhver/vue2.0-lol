import Vue from 'vue'
import Router from 'vue-router'
import News from '@/components/News'
import NewsList from '@/components/NewsList'
import Video from '@/components/Video'
import Player from '@/components/Player'
import Hero from '@/components/ChampionList'
import Disc from '@/components/disc'
import Lol from '@/components/Lol'
import SpecialBar from '@/components/SpecialBar'
import FightHelper from '@/components/FightHelper'
import Moment from '@/components/Moment'
import WallPaper from '@/components/wallpaper/WallPaper'
import New from '@/components/wallpaper/children/New'
import Hot from '@/components/wallpaper/children/Hot'
import Collections from '@/components/wallpaper/children/Collection'
import GameInfo from '@/components/GameInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/news'
    },
    {
      path: '/',
      component: News,
      children:[
        {
          path: 'news',
          name: 'news',
          component: NewsList
        },
        {
          path: 'video',
          name: 'video',
          component: Video
        },
        {
          path: 'player',
          name: 'player',
          component: Player
        },
        {
          path: 'championList',
          name: 'championList',
          component: Hero,
          children:[
            {
              path:'disc',
              component: Disc,
              children:[
                {
                  path:'lol',
                  component:Lol
                },
                {
                  path:'zhushou',
                  component:FightHelper
                },
                {
                  path:'moment',
                  component:Moment
                },
                {
                  path:'special',
                  component:SpecialBar
                },
                {
                  path:'wallpaper',
                  component:WallPaper,
                  children:[
                    {path:'',redirect:'/championList/disc/wallpaper/New'},
                    {path:'new',component:New},
                    {path:'hot',component:Hot},
                    {path:'collection',component:Collections},
                  ]
                },
                {
                  path:'gameziliao',
                  component:GameInfo
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
