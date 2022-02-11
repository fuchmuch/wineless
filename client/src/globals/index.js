import Client from '../services/index'

process.env.NODE_ENV === 'production'
  ? `${window.location.origin}/api`
  : `${Client}`




