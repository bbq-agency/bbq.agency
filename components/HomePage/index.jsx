import React from 'react'
import { MorphReplaceResize } from 'react-svg-morph'
import * as ImageModule from '../SVG'

import './style.scss'
import BbqLogo from '../../static/img/svg-icons/bbq-logo.svg'

class HomePage extends React.Component {
    constructor (props) {
        super(props)
        this.increment = 0
        this.swap()
    }

    swap () {
        this.counter = setInterval(() => {
            this.increment++
            this.forceUpdate()
        }, 1400)
    }

    componentWillUnmount () {
        clearInterval(this.counter)
    }

    render () {
        const imageName = Object.keys(ImageModule)[(this.increment % 14) ]
        const ImageComponent = ImageModule[imageName]

        return (
            <div className="homepage">
                <img src={(BbqLogo)} className="homepage__img" alt="BBQ Logo" />
                <MorphReplaceResize className="homepage__morph" rotation={'none'}>
                    <ImageComponent key={imageName} />
                </MorphReplaceResize>
                <div className="homepage__slogan">We make websites!</div>
            </div>
        )
    }
}

export default HomePage
