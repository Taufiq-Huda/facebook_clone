import React, { ReactNode } from 'react'
import styles from './ProfileInfo.module.css'
import Image from 'next/image'
import { X } from 'lucide-react'

export type ProfileInfoProps = {
    name : string
    src : string
    clasName ?: string
} & (
  {varient : "Contacts"}|{varient : "Search"}
)
export function ProfileInfo(props : ProfileInfoProps) {
  return (
    <div className={`${styles.main} ${props.clasName}`}>
      <div className={styles.left}>
        <div className={styles.dp}>
          <Image src={props.src}  alt="dp" height={36} width={36}/>
          { (props.varient == "Contacts") && <span/> }
        </div>
        <div className={styles.name}>
          {props.name}
        </div>
      </div>
      {(props.varient == "Search")  
          && <div className={styles.x}> <X /> </div>
      }
    </div>
  )
}

export default ProfileInfo
