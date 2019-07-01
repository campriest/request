import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';

const columnOne = {
  position:'absolute',
  margin:'0px',
  width: '33%',
  height: '100%'

}
const columnTwo = {
  position: 'absolute',
  marginLeft: '34%',
  width:'33%',
  height: '100%'
}
const home = {
  margin: '0px',
  width: '100%',
  height: '100%'
}

const head = {
  position: 'absolute',
  margin: '0',
  top: '0',
  width: '100%',
  height: '100%'
}
const bar = {
  position: 'absolute',
  marginTop: '60px',
  width: '100%',
  height: '1px',
  background: 'rgb(123,12,232)'
}
const request = {
  position: 'absolute',
  marginLeft: '5%',
  marginTop: '20px'
}
const logo = {
  position: 'absolute',
  marginLeft: '90%',
  marginTop: '20px'
}
const form = {
  position: 'absolute',
  margin: '0px',
  width: '100%',
  height: '100%'
}
const name = {
  position: 'absolute',
  marginLeft: '5%',
  marginTop: '20%',
  width: '40%',
  height: '100px'

}
const nameInput = {
  margin: '0px',
  width: '50%',
  height: '20px',
  border:'solid',
  borderRadius: '4px',
  borderWidth: '1px',
  borderColor: 'rgb(123,12,232)'

}
const email = {
  position: 'absolute',
  marginLeft: '5%',
  marginTop:'50%',
  width: '40%',
  height:'100px'
}

const input = {
  margin: '0px',
  width: '100%',
  height: '20px',
  border:'solid',
  borderRadius: '4px',
  borderWidth: '1px',
  borderColor: 'rgb(123,12,232)'
}
const department = {
  position: 'absolute',
  marginLeft: '5%',
  marginTop:'80%',
  width: '40%',
  height:'100px'
}
const company = {
  position: 'absolute',
  marginLeft: '5%',
  marginTop:'110%',
  width: '40%',
  height:'100px'
}
const selects = {
  position: 'absolute',
  marginLeft: '5%',
  marginTop:'35%',
}
const date = {
  position: 'absolute',
  marginLeft: '75%',
  marginTop: '5%',
  width: '337px',
  height: '50%',
  backgroundColor: 'rgb(176, 92, 255)',
  border:'solid',
  borderWidth: '1px',
  borderColor:'rgb(123,12,232)'

}
const title = {
  position: 'absolute',
  marginLeft: '0%',
  marginTop:'15%',
  width: '40%',
  height:'100px'
}
const category = {
  position: 'absolute',
  marginLeft: '50%',
  marginTop:'15%',
  width: '40%',
  height:'100px'
}
const summary = {
  postion: 'absolute',
  marginLeft: '0%',
  marginTop:'70%',
  width: '100%',
  height:'100px'
}

class Home extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div style = {home}>
        <div style ={head}>
            <h1 style = {logo}>LxLabs</h1>
              <h1 style ={request}>Request</h1>
                <div style = {bar}>
                </div>
        </div>
          <div style = {form}>
            <form>
              <div style = {columnOne}>
                <div style = {email}>
                  <h1>Email:</h1>
                  <input style = {input} type = "text" name = "email" />
                </div>
                  <div style = {name}>
                    <h1>Name:</h1>
                      <input style = {input} type = "text" name = "name" />
                  </div>
                    <div style = {department}>
                      <h1>Department:</h1>
                        <input style = {input} type = "text" name = "department"/>
                    </div>
                      <div style = {company}>
                        <h1>Company:</h1>
                          <select style = {input}>
                            <option>3X3 Insights</option>
                            <option>Alltherooms</option>
                            <option>Barcademy</option>
                            <option>Butler</option>
                            <option>Deckard Technologies</option>
                            <option>EverTransit</option>
                            <option>Fetch</option>
                            <option>Finexio</option>
                            <option>Gro</option>
                            <option>JobsOnline</option>
                            <option>Loeb.atl</option>
                            <option>Loeb.nyc</option>
                            <option>Mentored</option>
                            <option>Mercato</option>
                            <option>OpenMessage</option>
                            <option>Penrose Hill</option>
                            <option>PopWallet</option>
                            <option>Rx (SC)</option>
                            <option>SingleComm</option>
                            <option>SiO</option>
                            <option>Steady</option>
                            <option>Summit Sync</option>
                            <option>Sweet Defeat</option>
                            <option>Other</option>
                          </select>
                      </div>
                    </div>
                        <div style = {date}>
                          <h1>Due Date:</h1>
                            <Calendar />
                        </div>
                        <div style = {columnTwo}>
                          <div style = {title}>
                            <h1>Project Title:</h1>
                              <input style = {input} type = "text" name = "name" />
                          </div>
                            <div style = {category}>
                              <h1>Project Category:</h1>
                                <select style = {input}>
                                  <option>Branding</option>
                                  <option>Digital</option>
                                  <option>Digital</option>
                                  <option>Growth</option>
                                  <option>Packaging</option>
                                  <option>Presentation</option>
                                  <option>Print</option>
                                  <option>Video</option>
                                  <option>Copy</option>
                                  <option>Other</option>
                                </select>
                            </div>
                              <div style = {summary}>
                                <h1>Project Summary:</h1>
                                  <textarea style = {input}></textarea>
                              </div>
                        </div>
            </form>
          </div>
      </div>
    );
  }
}

export default Home;
