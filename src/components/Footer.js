import styled from "styled-components"
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

export default function Footer(props) {
    const { articleCount } = props
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {

        hour:"2-digit",
        minute: "2-digit",
        hour12: false
    })

    const Footer = styled.footer`
    background-color: #202123;
    color: white;
    position: sticky;
    bottom: 0;
    display: flex;
    height: 2.5rem;
    padding: 0.5rem;
    justify-content: space-around;
    align-items: center;

    p {
        color: #d5eb2a;
        display: flex;
        align-items: center;

    .icon {
        margin-right: 0.4rem;
    }
    }
    `

    return (
        <>
        <Footer>
            <p><span className='icon'><AiIcons.AiOutlineClockCircle /> </span>{time}</p>
            <p><span className='icon'><BsIcons.BsNewspaper/></span>{articleCount} articles </p>
        </Footer>
        </>
    )
}