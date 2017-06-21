import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadData } from '../actions'

class Content extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    axios.get('http://api.herostats.io/heroes/all')
    .then((hero)=>{
      const heroesArr = Object.keys(hero.data).map((key) => { return hero.data[key] }); // Ngubah jadi array
      // console.log(heroesArr);
      this.props.getAllHeroes(heroesArr)
    })
  }

  render(){
    return (
      <div>
        <div className="columns is-multiline is-mobile">
          { this.props.heroes.length > 0 ?
            (
              this.props.heroes.filter(hero => hero.Armor > 2).map((hero)=>{
                    return (
                        <div className="column is-one-quarter" key={hero.ID}>
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
                              <a className="card-footer-item">Detail</a>
                            </footer>
                          </div>
                        </div>
                      )
              })
            ) : (<h1>loading...</h1>)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    heroes: state.hero,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    getAllHeroes:(heroesArr)=>dispatch(loadData(heroesArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Content)
