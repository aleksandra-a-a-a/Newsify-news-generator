
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'

const SidebarData = [
    
    {
        title: 'Category',
        icon: <BiIcons.BiWorld />,
        iconClosed: <RiIcons.RiArrowUpSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Entertainment',
                path: '/category/entertainment',
                icon: 'https://img.icons8.com/color/48/null/retro-tv.png'
            },
            {
                title: 'Technology',
                path: '/category/technology',
                icon: 'https://img.icons8.com/color/48/null/electronics.png'
            },
            {
                title: 'Sport',
                path: '/category/sport',
                icon: 'https://img.icons8.com/color/48/null/sports.png'
            },
            {
                title: 'Business',
                path: '/category/business',
                icon: 'https://img.icons8.com/color/48/null/banknotes.png'
            },
            {
                title: 'Health',
                path: '/category/health',
                icon: 'https://img.icons8.com/color/48/null/welfare.png'
            },
        ]
    },
    {
        title: 'Meet the creator',
        path: '/Homepage',
        icon: <BiIcons.BiEnvelope />,
        iconClosed: <RiIcons.RiArrowUpSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: ' Github',
                path: 'https://github.com/aleksandra-a-a-a',
                
            },
            {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/aleksandra-losowska/',
                
            },
            {
                title: 'Portfolio',
                path: 'https://aleksandralosowska.pl',
                
            },
        ]
    },
    
    
]

export default SidebarData