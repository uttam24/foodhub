import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

class Header extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user">
        <Element key="aaa"
          prefixCls="banner-user-elem"
          followParallax={{
            delay: 1000,
            data: [
              { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
              { id: 'title', value: 50, type: 'x' },
              { id: 'content', value: -30, type: 'x' },
            ],
          }}
        >
          <BgElement
            key="bg"
            className="bg"
            style={{background: `url('${process.env.PUBLIC_URL}/images/slideshow-v1.jpg')` , backgroundSize:'100% 100%'}}
            id="bg"
          />
          <div className="sliderText">
          <TweenOne className="banner-user-text" 
            animation={{y: 10, opacity: 0, type: 'from', delay: 100 }}
            id="content"
          >
            DON'T MISS TODAY'S FEATURED DEALS
          </TweenOne>

          <TweenOne className="banner-user-title" 
            animation={{ y: 30, opacity: 0, type: 'from' }}
            id="title"
          >
            Best Burger  & Delicious
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{y: 30, opacity: 0, type: 'from', delay: 100 }}
            id="content"
          >
            Here to bring your life style to the next level.
          </TweenOne>
          </div>
        </Element>
        <Element key="bbb"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{background: `url('${process.env.PUBLIC_URL}/images/slideshow-v1-2.jpg')`, backgroundSize:'100% 100%'}}
          />
          <div className="sliderText1">
          <TweenOne className="banner-user-text" 
            animation={{ y: 10, opacity: 0, type: 'from', delay: 100 }}
          >
            NEED-IT-NOW
          </TweenOne>
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Best Burger  & Delicious
          </TweenOne>
          <TweenOne className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            Contemporary, minimal and beautifully iconic.
          </TweenOne>
          </div>
        </Element>
      </BannerAnim>
    );
  }
}

export default Header