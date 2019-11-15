import React from 'react'

function logged(Comp, props) {
  class HoCComp extends React.Component {
    componentDidMount() {
      console.log('HOC - mounted')
    }

    render() {
      return (
        <Comp {...props} />
      )
    }
  }

  return <HoCComp />
}

export default logged