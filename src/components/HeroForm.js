import React from 'react'
import { connect } from 'react-redux'

const HeroForm = (props) =>{

  return (
    <div>

      <div className="field">
        <p className="control">
          <input className="input is-primary" type="text" placeholder="Hero Name" />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input className="input is-primary" type="text" placeholder="Hp Regen" />
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input className="input is-primary" type="text" placeholder="Mana Regen" />
        </p>
      </div>

      <p>Name : {props.hero.name}
      </p><br />
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    hero: state.hero,
  }
}

export default connect(mapStateToProps, null)(HeroForm);
