class Booktype {
  constructor(props){

  }
  setCSRFToken = () => {

  }
  setSessionId = () => {

  }
  setApiKey = () => {

  }
  setDomain = () => {

  }
  setClientId = () => {

  }
  getBooks = () => {

  }

  sendCommand = (command, data) => {
    axios.post('/_sputnik/',
    {
      clientID: this.clientID,
      messages:[{
        command,
        ...data
      }]
    }
    )
  }


}
