import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button } from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import SecretModal from 'utils/SecretModal'
import styles from './styles.module.css'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "asd, asd, asd, asd!",
      showModal: false
    };
  }
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  showModalClick() { 
    this.setState({'showModal': !this.state.showModal})
  }

  onChangeText(event) {
    let text;
    const t = event.target.value

    if (t === '') {
      text = 'asd, asd, asd!' 
      this.setState({showModal: false})

    } else if (t === 'open') {
      this.setState({showModal: true})
      text = 'Welcome'
    } else {
      text = t
      this.setState({showModal: false})
    }
    this.setState({'text': text})
  }

  showState() {
    console.log(this.state)
  }

  render() {
    const { showModal, text } = this.state
    const { auth, sModal } = this.props
    
    let modal;
    if (showModal) {
      modal = (<SecretModal showModal={  this.showModalClick.bind(this) }> </SecretModal>)
    }

    return (
      <div className={styles.root}>
        <h2>Login</h2>
        <p>{text}</p>
        {modal}
        <input value={this.state.value} onChange={this.onChangeText.bind(this)} />
        <br/>
        <br/>
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
          <Button bsStyle="primary" onClick={this.showState.bind(this)}>Show State</Button>
          <Button bsStyle="primary" onClick={this.showModalClick.bind(this)}>Show Modal</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Login;
