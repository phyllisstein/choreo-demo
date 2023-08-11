import {
  BiggerSignInText,
  Border,
  GreyAreaWrapper,
  Image,
  ImageWrapper,
  MainWrapper,
  PromoDescription,
  PromoMessage,
  Root,
  AccountActionButton,
  SignInText,
  StatusMessage,
  SubscribeLink,
  VerticalLine,
  LoggedInText,
} from './cliff-takeover-styles'
import { AnimateSharedLayout } from 'framer-motion'
import { DismissiblePaywall } from '../dismissible-paywall'
import R from 'ramda'

// TODO: These props are a little verbose, but changing them also requires a
// change to the message Clay is broadcasting.
export const CliffTakeover = ({
  cta = '',
  description = '',
  image = '',
  promo = '',
  readerState = {},
  status = '',
  dismissible = false,
  onSignIn = R.identity,
  onLogOut = R.identity,
  onSubscribe = R.identity,
  onDismiss = R.identity,
  onViewAccount = R.identity,
  visible,
}) => {
  const sanitizer = (text = '') => {
    return text.replace('<br />', ' ').replace('&amp;nbsp;', '&nbsp;')
  }
  const isImageVariation = !!image
  // Sometimes the promo is coming with a `br` tag, which prevents the text from expanding as expected
  const sanitizedPromo = sanitizer(promo)
  const sanitizedDescription = sanitizer(description)
  const dismissibleClass = dismissible ? 'dismissible' : ''

  const signInMessage =
    readerState.isAuthenticated && !readerState.isSubscriber ? (
      <>
        <LoggedInText>Logged in as { readerState.email }.{ ' ' }</LoggedInText>
        <AccountActionButton
          dismissible={ dismissible }
          onClick={ onViewAccount }
          onKeyPress={ onViewAccount }>
          <b>
            <u>View Account</u>
          </b>
        </AccountActionButton>
        <AccountActionButton
          isLogout
          dismissible={ dismissible }
          onClick={ onLogOut }
          onKeyPress={ onLogOut }>
          <b>
            <u>Log Out</u>
          </b>
        </AccountActionButton>
      </>
    ) : (
      <>
        Already a subscriber?{ ' ' }
        <AccountActionButton
          dismissible={ dismissible }
          onClick={ onSignIn }
          onKeyPress={ onSignIn }>
          <b>
            <u>Sign In</u>
          </b>
        </AccountActionButton>
      </>
    )

  return (
    <>
      <Root className='tout' dismissible={ dismissible }>
        <AnimateSharedLayout>
          <GreyAreaWrapper
            animate={{
              opacity: visible ? 1 : 0,
            }}
            hidden={ dismissible }
            initial={{
              opacity: 0,
            }} />
          <Border
            animate={{
              y: visible ? '0%' : '100%',
            }}
            initial={{
              y: '100%',
            }}
            transition={{ duration: 0.5 }}>
            <MainWrapper className={ dismissibleClass }>
              <DismissiblePaywall
                dismissible={ dismissible }
                onDismiss={ onDismiss }>
                <StatusMessage dismissible={ dismissible }>
                  { status }
                </StatusMessage>
                <PromoMessage
                  // The dangerously reference is because HTML is not escaped at all in this case, and it might cause XSS issues.
                  // We should either safely parse it ourselves or trust that it will come safely parsed (not ideal)
                  dangerouslySetInnerHTML={{
                    __html: sanitizedPromo,
                  }}
                  dismissible={ dismissible }
                  isImageVariation={ isImageVariation } />
                <PromoDescription
                  dangerouslySetInnerHTML={{
                    __html: sanitizedDescription,
                  }}
                  dismissible={ dismissible } />
                <SubscribeLink
                  dismissible={ dismissible }
                  isImageVariation={ isImageVariation }
                  onClick={ onSubscribe }>
                  { cta }
                </SubscribeLink>
                <SignInText
                  dismissible={ dismissible }
                  isImageVariation={ isImageVariation }>
                  { signInMessage }
                </SignInText>
                <ImageWrapper isImageVariation={ isImageVariation }>
                  <Image alt='' src={ image } />
                </ImageWrapper>
              </DismissiblePaywall>
            </MainWrapper>
          </Border>
        </AnimateSharedLayout>
      </Root>
    </>
  )
}
