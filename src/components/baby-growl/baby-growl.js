import {
  CTA,
  CTAText,
  FeatheredArrow,
  Root,
  SubscribeLink,
} from './baby-growl-styles'
import { DismissiblePaywall } from '../dismissible-paywall'
import R from 'ramda'

// TODO: `headline` and `ctaText` are a little vague, but changing them also
// requires a change to the message Clay is broadcasting.
export const BabyGrowl = ({
  headline = '',
  ctaText = '',
  visible,
  onDismiss = R.identity,
  onSubscribe = R.identity,
}) => {
  return (
    <Root className='tout' visible={ visible }>
      <DismissiblePaywall dismissible onDismiss={ onDismiss }>
        <CTA>
          <CTAText
            // The dangerously reference is because HTML is not escaped at all in this case, and it might cause XSS issues.
            // We should either safely parse it ourselves or trust that it will come safely parsed (not ideal)
            dangerouslySetInnerHTML={{
              __html: headline,
            }} />
          <SubscribeLink onClick={ onSubscribe }>
            { ctaText }
            <FeatheredArrow />
          </SubscribeLink>
        </CTA>
      </DismissiblePaywall>
    </Root>
  )
}
