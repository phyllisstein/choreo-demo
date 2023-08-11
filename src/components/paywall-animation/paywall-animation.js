import { motion } from 'framer-motion'

export const PaywallAnimation = ({ children, visible = false }) => {
  return (
    <motion.div animate={{ translateY: visible ? 0 : '25%' }}>
      { children }
    </motion.div>
  )
}
