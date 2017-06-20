import React from 'react'
import axios from 'axios'

class ContentDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hero:null
    }
  }

  componentDidMount(){
    const { id } =  this.props.match.params
    axios.get('http://api.herostats.io/heroes/'+id)
    .then((hero)=>{
      this.setState({hero:hero.data})
    })
  }

  render(){
    return (
      <div>
        <div className="columns is-multiline is-mobile">
          { this.state.hero !== null ? (
              <div className="column is-one-quarter">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      {this.state.hero.Name}
                    </p>
                    <a className="card-header-icon">
                      <span className="icon">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item">Hp regen : {this.state.hero.HPRegen}</a>
                    <a className="card-footer-item">Mana regen : {this.state.hero.ManaRegen}</a>
                    <a className="card-footer-item">Armor : {this.state.hero.Armor}</a>
                  </footer>
                </div>
              </div>
            ) : (<h1>loading...</h1>)
        }
        </div>
      </div>
    )
  }
}

export default ContentDetail
