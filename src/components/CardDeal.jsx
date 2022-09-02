import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' />  in few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Excepteur sint occaecat qui ullamco dolore cillum labore laboris tempor irure ad mollit culpa. Enim consequat commodo amet velit esse labore dolor duis cupidatat qui. Nisi laboris amet quis minim eu. Adipisicing culpa aliquip labore exercitation aute nisi Lorem tempor. Tempor adipisicing id in do. Enim sit est dolor non voluptate occaecat sit. Ad adipisicing Lorem nostrud pariatur et laboris minim qui.</p>
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={ card } alt='card' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )

export default CardDeal