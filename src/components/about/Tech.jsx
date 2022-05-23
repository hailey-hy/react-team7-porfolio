import React from 'react'

const Tech = (props) => {
    if(props.title == 'java'){
        var link = <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white"/>
    } else if(props.title == 'spring'){
        link = <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/>
    } else if(props.title == 'spring boot'){
        link = <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/>
    } else if(props.title == 'mysql'){
        link = <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
    } else if(props.title == 'react'){
        link = <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
    } else if(props.title == 'javascript'){
        link = <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    } else if(props.title == 'html'){
        link = <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    } else if(props.title == 'css'){
        link = <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
    } else if(props.title == 'jquery'){
        link = <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/>
    } else if(props.title == 'aws'){
        link = <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"/>
    } else if(props.title == 'spring security'){
        link = <img src="https://img.shields.io/badge/spring security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"/>
    } else if(props.title == 'JUnit5'){
        link = <img src="https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=junit5&logoColor=white"/>
    } else if(props.title == 'OAuth2.0'){
        link = <img src="https://img.shields.io/badge/OAuth2.0-0085CA?style=for-the-badge&logoColor=white"/>
    } else if(props.title == 'REST'){
        link = <img src="https://img.shields.io/badge/REST-0085CA?style=for-the-badge&logoColor=white"/>
    } else if(props.title == 'HTTP'){
        link = <img src="https://img.shields.io/badge/HTTP-0085CA?style=for-the-badge&logo=http&logoColor=white"/>
    } else if(props.title == 'thymeleaf'){
        link = <img src="https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white"/>
    } 
    return (
        link
    )
}


export default Tech