import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Episodes = (props) => {

    const [names , setName] = useState()
    const [episode , setEpisode] = useState()
    const [air_date , setAir_date] = useState()

    useEffect(() => {

        axios.get(props.episode)
        .then(res => {
            setName(res.data.name)
            setEpisode(res.data.episode)
            setAir_date(res.data.air_date)
        })
    }, [])
   
  return (
    <li><p><b>{names}</b> - {episode} - date de diffusion {air_date}</p></li>
  )
}

// (res.data.name).bold()+' - '+res.data.episode+' - date de diffusion : '+res.data.air_date
export default Episodes
