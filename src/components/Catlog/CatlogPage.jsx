import React, { Component } from "react";
//component
import Grid from "./Grid";
//Data
import data from "./CatlogData";
class CatlogPage extends Component {
  getSeperateHubsInfo = data => {
    let general = [],
      others = [];
    Object.entries(data).map(
      value => (value[1].hub === "general" ? general.push(value[1]) : others.push(value[1]))
    );
    return { general, others };
  };
  render() {
    const { general, others } = this.getSeperateHubsInfo(data);
    return (
      <section className='dashboard'>
        <div className='container'>
          <div className='columns is-desktop is-multiline'>
            {general.map(products=>
              <Grid product={products}/>
              )}
           
          </div>
        </div>
      </section>
    );
  }
}
export default CatlogPage;
