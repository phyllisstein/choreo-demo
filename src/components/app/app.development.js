import { Egyptienne, LibreFranklin, MillerText } from 'assets/fonts'
import { useCallback, useState } from 'react'
import { BabyGrowl } from '../baby-growl'
import { CliffTakeover } from '../cliff-takeover'
import { Reset } from 'components/reset'

/**
 * Development container. Unused in production.
 */
export const App = () => {
  const [isCliffPaid, setCliffPaid] = useState(true)
  const [isBabyPaid, setBabyPaid] = useState(false)
  const [activeComponent, setActiveComponent] = useState('babyGrowl')

  const onDismiss = useCallback(() => {
    switch (activeComponent) {
      case 'babyGrowl':
        setActiveComponent('contentCliff')
        break
      case 'contentCliff':
        setActiveComponent('contentCliffWithLogin')
        break
      case 'contentCliffWithLogin':
        setActiveComponent('babyGrowl')
        break
    }
  })

  const onDismissCliffTakeover = useCallback(() => {
    setCliffPaid(true)
    setBabyPaid(false)
  }, [])

  console.log('paywall reader interface dev +==================')

  const CONTENT_CLIFF = (
    <CliffTakeover
      visible
      cta='Buy Now'
      description='Enjoy 1 month for free, and get a free tote. Only $2 a month '
      image=''
      promo='Get unlimited access to Vulture and everything <em>New&nbsp;York</em>.'
      status='You have reached your article limit'
      onDismiss={ onDismiss }
      onSubscribe={ onDismiss } />
  )

  const CONTENT_CLIFF_WITH_LOGIN = (
    <CliffTakeover
      visible
      cta='Buy Now'
      description='Enjoy 1 month for free, and get a free tote. Only $2 a month '
      image=''
      promo='Get unlimited access to Vulture and everything <em>New&nbsp;York</em>.'
      readerState={{
        email: 'clay.felker@voxmedia.com',
        isAuthenticated: true,
        isSubscriber: false,
      }}
      status='You have reached your article limit'
      onDismiss={ onDismiss }
      onSubscribe={ onDismiss } />
  )

  const IMAGE_CONTENT_CLIFF_WITH_LOGIN = (
    <CliffTakeover
      visible
      cta='Buy Now'
      description='Enjoy 1 month for free, and get a free tote. Only $2 a month '
      image='https://placekeanu.com/1024/768'
      promo='Get unlimited access to Vulture and everything <em>New&nbsp;York</em>.'
      readerState={{
        email: 'clay.felker@voxmedia.com',
        isAuthenticated: true,
        isSubscriber: false,
      }}
      status='You have reached your article limit'
      onDismiss={ onDismiss }
      onSubscribe={ onDismiss } />
  )

  const BABY_GROWL = (
    <BabyGrowl
      ctaText='Get Vulture'
      headline='All this, and a stylish Milton Glaser tote bag, too.'
      visible={ !isBabyPaid }
      onDismiss={ onDismiss }
      onSubscribe={ onDismiss } />
  )

  return (
    <>
      <Reset />
      <Egyptienne />
      <LibreFranklin />
      <MillerText />
      { activeComponent === 'babyGrowl' && BABY_GROWL }
      { activeComponent === 'contentCliff' && CONTENT_CLIFF }
      { activeComponent === 'contentCliffWithLogin' && CONTENT_CLIFF_WITH_LOGIN }
    </>
  )
}
