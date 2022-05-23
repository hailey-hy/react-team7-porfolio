import React from 'react'
import Tech from './Tech'
import HaeyeonPic from '../../assets/haeyeon-mimoticon.png'
import GangsanPic from '../../assets/gangsan-mimoticon.png'
import SeongilPic from '../../assets/seongil-mimoticon.png'
import JeongminPic from '../../assets/jeongmin-mimoticon.png'
import Button from 'react-bootstrap/Button';

// 리팩토링 예정

const Member = (props) => {
    if(props.title == "해연"){
        var member = 
            <div className="member-container">
                <div className="member">
                    <img src={HaeyeonPic} alt="haeyeon-mimoticon" className='member-pic'/>
                    <h3>전해연</h3>
                    <div className="detail">
                        <h4>관심 기술</h4>
                        <div className="tech">
                            <Tech title="javascript"></Tech>
                            <Tech title="react"></Tech>
                            <Tech title="html"></Tech>
                            <Tech title="css"></Tech>
                        </div>
                        <h4>더 알아보기</h4>
                        <div className="member-link">
                            <a href = "https://github.com/hailey-hy" className='btn-link'><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a>
                            <a href= "mailto:lillyine.hy@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/Gmail-d14836?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:quf8093@gmail.com" /></a>
                        </div>
                    </div>
              </div>
            </div>
    } else if(props.title == "강산"){
        member = 
            <div className="member-container">
                <div className="member">
                    <img src={GangsanPic} alt="gangsan-mimoticon" className='member-pic'/>
                    <h3>이강산</h3>
                    <div className="detail">
                        <h4>관심 기술</h4>
                        <div className="tech">
                            <Tech title="spring boot"></Tech>
                            <Tech title="java"></Tech>
                            <Tech title="javascript"></Tech>
                            <Tech title="mysql"></Tech>
                            <Tech title="thymeleaf"></Tech>
                        </div>
                        <h4>더 알아보기</h4>
                        <div className="member-link">
                            <a href = "https://github.com/GhostFairy" className='btn-link'><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a>
                            <a href= "mailto:ghhjkk@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/Gmail-d14836?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:quf8093@gmail.com" /></a>
                        </div>
                    </div>
              </div>
            </div>
    } else if(props.title == "정민"){
        member = 
            <div className="member-container">
                <div className="member">
                    <img src={JeongminPic} alt="jeongmin-mimoticon" className='member-pic'/>
                    <h3>양정민</h3>
                    <div className="detail">
                        <h4>관심 기술</h4>
                        <div className="tech">
                            <Tech title="spring boot"></Tech>
                            <Tech title="spring security"></Tech>
                            <Tech title="OAuth2.0"></Tech>
                            <Tech title="JUnit5"></Tech>
                        </div>
                        <h4>더 알아보기</h4>
                        <div className="member-link">
                            <a href = "https://github.com/overult01" className='btn-link'><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a>
                            <a href= "mailto:overult01@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/Gmail-d14836?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:quf8093@gmail.com" /></a>
                        </div>
                    </div>
              </div>
            </div>
    } else if(props.title == "성일"){
        member = 
            <div className="member-container">
                <div className="member">
                    <img src={SeongilPic} alt="seongil-mimoticon" className='member-pic'/>
                    <h3>윤성일</h3>
                    <div className="detail">
                        <h4>관심 기술</h4>
                        <div className="tech">
                            <Tech title="REST"></Tech>
                            <Tech title="HTTP"></Tech>
                            <Tech title="spring boot"></Tech>
                            <Tech title="JUnit5"></Tech>
                        </div>
                        <h4>더 알아보기</h4>
                        <div className="member-link">
                            <a href = "https://github.com/Seongil-Yoon" className='btn-link'><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a>
                            <a href= "mailto:overult01@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/Gmail-d14836?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:quf8093@gmail.com" /></a>
                        </div>
                    </div>
              </div>
            </div>
    }
  return (
        member
  )
}

export default Member