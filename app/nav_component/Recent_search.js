import React from 'react'
import styles from "../CSS/recentsearch.module.css"

function Recent_search({show}) {
  return (
    show?<div className={styles.card}>
        Recent_search

    </div>:<></>
  )
}

export default Recent_search