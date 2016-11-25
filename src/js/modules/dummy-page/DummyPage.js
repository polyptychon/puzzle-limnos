import React, {Component} from 'react'

class DummyPage extends Component {
  componentWillMount() {
    const body = document.querySelector('body')
    body.classList.remove(`laikes-bg`)
    body.classList.remove(`astikes-bg`)
  }
  render() {
    return (<div></div>)
  }
}
export default DummyPage
