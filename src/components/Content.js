import React from 'react'

class Content extends React.Component {
  constructor(props){
    super(props)

  }

  render(){
    return (
      <div>
        <div className="columns is-multiline is-mobile">
          { this.props.heroes.length > 0 ? (
            this.props.heroes.map((hero)=>{
              return (
                      <div className="column is-one-quarter" >
                        <div className="card">
                          <header className="card-header">
                            <p className="card-header-title">
                              {hero.Name}
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
                            <a className="card-footer-item">Hp regen : {hero.HPRegen}</a>
                            <a className="card-footer-item">Mana regen : {hero.ManaRegen}</a>
                            <a className="card-footer-item">Armor : {hero.Armor}</a>
                          </footer>
                        </div>
                      </div>
                    )
            })
          ) : (<h1>loading...</h1>)}
        </div>
      </div>
    )
  }
}

export default Content
