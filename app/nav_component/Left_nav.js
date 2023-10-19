"use client"
import React, { useState } from 'react'
import styles from "../CSS/left_nav.module.css";
import Recent_search from './Recent_search';

export default function Left_nav() {
  const [searchfocused, setsearchfocused] = useState(false)
  const [showrecent, setshowrecent] = useState(false)
  const focusinput=(e)=>{
    e.target.parentElement.lastChild.style.marginLeft="5px"
    e.target.parentElement.firstChild.style.width="0px"
    e.target.parentElement.parentElement.firstChild.firstChild.style.width="0px"
    e.target.parentElement.parentElement.firstChild.lastChild.style.width="40px"
    setshowrecent(true)
  }

  const blurinput=(e)=>{
    e.target.parentElement.lastChild.style.marginLeft="0px"
    e.target.parentElement.firstChild.style.width="24px"
    e.target.parentElement.parentElement.firstChild.firstChild.style.width="40px"
    e.target.parentElement.parentElement.firstChild.lastChild.style.width="0px"
    setshowrecent(true)
  }


  return (
    <div className={styles.left}>
      <div>
        <svg  viewBox="0 0 36 36" fill="url(#:R1kjaj9emhpapd5aq:)"  height="40"  width="40">
          <defs>
          <linearGradient  x1="50%"  x2="50%"  y1="97.0782153%"  y2="0%"  id=":R1kjaj9emhpapd5aq:">
          <stop offset="0%" stopColor="#0062E0"></stop>
          <stop offset="100%" stopColor="#19AFFF"></stop>
          </linearGradient>
          </defs>
          <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
          <path
          className={styles.logo}
          d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
          ></path>
        </svg>
        <svg height="40"  width="0"><path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" /></svg>
      </div>
      <div className={styles.search}>
          <svg className={styles.search_icon}>
            <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
          </svg>
          <input name="myInput" className={styles.search_input}  placeholder="Search Facebook" onFocus={focusinput} onBlur={blurinput} />
          
      </div>
      <Recent_search show={showrecent} />
    </div>
  )
}
