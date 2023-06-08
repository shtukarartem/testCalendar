import { FC } from 'react'
import { ViewListType } from 'src/types/types'
import { ViewType } from './ViewType/ViewType'
import styles from './styles.module.css'

type Props = {
  viewList:ViewListType[],
  handleClick:(title:string) => void
  handlePinned: (index:number) => void
}

export const ViewList:FC<Props> = ({viewList, handlePinned, handleClick}) => (
    <div className={styles.wrapper}>
      {
        viewList.map((item, index) => (
          <ViewType
          key={index} 
          view={item}
          onClick={handleClick}
          handleClickChange={() => handlePinned(index)}
          />
        ))
      }
    </div>
  )
