
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'

const SidebarData = [
    
    {
        title: 'Country',
        icon: <BiIcons.BiWorld />,
        iconClosed: <RiIcons.RiArrowUpSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Poland',
                path: '/country/poland',
                icon: 'fi fi-pl'
            },
            {
                title: 'Ukraine',
                path: '/country/ukraine',
                icon: 'fi fi-ua'
            },
            {
                title: 'Germany',
                path: '/country/germany',
                icon: 'fi fi-de'
            },
            {
                title: 'France',
                path: '/country/france',
                icon: 'fi fi-fr'
            },
            {
                title: 'Italy',
                path: '/country/italy',
                icon: 'fi fi-it'
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