import type { NextPage } from 'next'
import { Fetched } from '../src/components/Fetched'
import styles from '../styles/Home.module.css'
import { useQuery } from 'relay-hooks'
import query from '../src/queries/test'
import { testQuery } from '../src/queries/__generated__/testQuery.graphql'

const Test: NextPage = () => {
  const { data } = useQuery<testQuery>(
    query
  )
  if (!data?.relay?.user) return null
  
  return (
    <div className={styles.container}>
      <Fetched fragmentRef={data.relay.user}/>
    </div>
  )
}

export default Test
