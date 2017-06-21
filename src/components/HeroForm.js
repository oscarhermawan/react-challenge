import React from 'react'
import { connect } from 'react-redux'
import { addHero } from '../actions'

class HeroForm extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>

        <div className="field">
          <p className="control">
            <input className="input is-primary" type="text" placeholder="Hero Name" ref="Name"/>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input className="input is-primary" type="text" placeholder="Hp Regen" ref="HP"/>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input className="input is-primary" type="text" placeholder="Mana Regen" ref="Mana"/>
          </p>
        </div>

        <button className="button is-success" onClick={()=>this.props.tambahHero(this.tampungData())}>Input Data</button>
        <p>Name : {this.props.heroes.length ? this.props.heroes[2].Name : ''}
        </p><br />
      </div>
    )
  }

  tampungData(){
    let newHero={
      Name:this.refs.Name.value,
      HPRegen:this.refs.HP.value,
      ManaRegen:this.refs.Mana.value,
    }
    return newHero;
  }
}



const mapStateToProps = (state) =>{
  return{
    heroes: state.heroes,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    tambahHero:(hero)=>dispatch(addHero(hero))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HeroForm);
