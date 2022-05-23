import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div className="container container-header">
                <div className="title">
                    <h1 className='team-name'>칠성사이다</h1>
                    <h4 className='team-intro'>칠성사이다는 멀티캠퍼스 지능형 웹개발 풀스택 과정의 수강생 4명이 모인 팀입니다. <br></br> 우리는 사용자 관점에서 생각하고, 아이디어 실현을 위한 새로운 학습과 도전을 즐깁니다. </h4>
                </div>
                <a href="https://imint.yukenet.wo.tc/"><button class="button" data-text="Open Project"><span>프로젝트 보러가기</span></button></a>
            </div>

        </header>
    )
}

export default Header