import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

export default function CreateReactPortal({ containerId, children }) {
  let container = document.getElementById(containerId)
  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', containerId)
    document.body.appendChild(container)
  }
  return ReactDOM.createPortal(children, container)
}

CreateReactPortal.propTypes = {
  containerId: PropTypes.string,
  childre: PropTypes.node.isRequired,
}

CreateReactPortal.defaultProps = {
  containerId: 'portal-root',
}
