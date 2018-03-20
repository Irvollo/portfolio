import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/aboutme',
            name: 'aboutme',
            component: AboutMe
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
})
