import React, {useRef} from 'react'
import styles from '../../CSS/notifications.module.css'
import Image from 'next/image'

const suggesion=[
  {
    dp:"https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/364119971_867205674966830_4577583069464852877_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsxFIm9kccoAX_fZZSN&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCSE4pRMQ20eFsRAXwxmlmN8hm1XsMCamPgAOSuL-lP7Q&oe=6549B643",
    name:"Nafiz Al Tahim Leon "
  },
  {
    dp:"https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/364119971_867205674966830_4577583069464852877_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsxFIm9kccoAX_fZZSN&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCSE4pRMQ20eFsRAXwxmlmN8hm1XsMCamPgAOSuL-lP7Q&oe=6549B643",
    name:"Nafiz Al Tahim Leon "
  },
  {
    dp:"https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/364119971_867205674966830_4577583069464852877_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsxFIm9kccoAX_fZZSN&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCSE4pRMQ20eFsRAXwxmlmN8hm1XsMCamPgAOSuL-lP7Q&oe=6549B643",
    name:"Nafiz Al Tahim Leon "
  },
  {
    dp:"https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/364119971_867205674966830_4577583069464852877_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsxFIm9kccoAX_fZZSN&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCSE4pRMQ20eFsRAXwxmlmN8hm1XsMCamPgAOSuL-lP7Q&oe=6549B643",
    name:"Nafiz Al Tahim Leon "
  },
  {
    dp:"https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/364119971_867205674966830_4577583069464852877_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsxFIm9kccoAX_fZZSN&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCSE4pRMQ20eFsRAXwxmlmN8hm1XsMCamPgAOSuL-lP7Q&oe=6549B643",
    name:"Nafiz Al Tahim Leon "
  },
  {
    dp:"https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/364119971_867205674966830_4577583069464852877_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsxFIm9kccoAX_fZZSN&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCSE4pRMQ20eFsRAXwxmlmN8hm1XsMCamPgAOSuL-lP7Q&oe=6549B643",
    name:"Nafiz Al Tahim Leon "
  },
  {
    dp:"https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/364119971_867205674966830_4577583069464852877_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsxFIm9kccoAX_fZZSN&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCSE4pRMQ20eFsRAXwxmlmN8hm1XsMCamPgAOSuL-lP7Q&oe=6549B643",
    name:"Nafiz Al Tahim Leon "
  },
  {
    dp:"https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/364119971_867205674966830_4577583069464852877_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CsxFIm9kccoAX_fZZSN&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCSE4pRMQ20eFsRAXwxmlmN8hm1XsMCamPgAOSuL-lP7Q&oe=6549B643",
    name:"Nafiz Al Tahim Leon "
  }
]
const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}


function Recent_search({show}) {
  const hover=(index)=>{
    console.log(index)
  }

  const notifications = useRef(null);
  // notifications.addEventListener("click", console.log(Hi));
  return (
    show?<div className={styles.card} ref={notifications}>
      <div className={styles.head}>
          <span>Notifications</span>
          <span>...</span>
      </div>
      {/* {suggesion.map((ele,index)=>{
        return(
           <div className={styles.suggesion} key={index} onMouseLeave={hover(index)}>
              <Image src="/1.jpg" width={35}  height={35} alt='not' style={imageStyle}/>
              {ele.name}
            </div>
        )
      })} */}
    </div>:<></>
  )
}

export default Recent_search