import { useState } from 'react'

export const App = () => {
  const [isPaid, setPaid] = useState(false)
  console.log('App js inside paywall reader')

  return (
    <>
      <button onClick={ () => setPaid(hasPaid => !hasPaid) }>Pay Me</button>
      <CliffTakeover
        cliffTakeoverCTA='Who did the thing.'
        cliffTakeoverDescription='You did the thing.'
        cliffTakeoverImage='https://placekeanu.com/640/480'
        cliffTakeoverPromo='Ten thousand years dungeon.'
        cliffTakeoverStatus='Dungeon.'
        dismissible={ true }
        onSubscribe={ () => setPaid(true) } />
    </>
  )
}
