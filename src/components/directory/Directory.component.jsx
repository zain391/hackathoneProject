import React from 'react'
import '../directory/directory.styles.scss'
import Menuitem from '../menu-items/Menu-item.component';
class Directory extends React.Component{
    constructor(){
        super();
        this.state= {
            sections:[
                {
                  title: 'hats',
                  imageUrl: 'https://media.istockphoto.com/photos/every-day-is-a-new-start-picture-id1175266114?b=1&k=20&m=1175266114&s=170667a&w=0&h=zxk4Gu33Uu9r6qz-pEuUUbNQf0whxYgRzn0BL1IAw1s=',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://media.istockphoto.com/photos/man-on-a-gray-background-is-warmly-dressed-in-a-black-down-jacket-picture-id1357323248?b=1&k=20&m=1357323248&s=170667a&w=0&h=e2WWK5zT57tntk6clpL1PRdR5QtruMtpj6kHCTeuXlU=',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbiUyMHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://images.unsplash.com/photo-1525845859779-54d477ff291f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwc3VpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]

        }
        
        }
        render(){
            return(<div className="directory-menu">
                {this.state.sections.map(({title,imageUrl,id,size})=>{
                    return <Menuitem title={title} key={id} imageUrl={imageUrl} size={size}/>
                })}
            </div>
            );
        }
    }

  export default Directory;