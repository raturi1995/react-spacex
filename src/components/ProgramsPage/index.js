import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrograms } from "../../action/programs";
import { Loading } from '../../common';
import ProgramItem from '../ProgramItem';
import FilterContainer from '../FilterContainer';

const m = ({ programs }) => ({ programs });
class ProgramsPage extends Component {

  static fetching ({ dispatch }) {
    return [dispatch(fetchPrograms())];
  }
    componentDidMount() {
      this.props.fetchPrograms();
    }

    render() {
      const { programs: { isFetching, data } } = this.props;

      return(
        <div className="container">
            <header>
                <h1>
                    SpaceX Launch Programs
                </h1>
            </header>
            <main>
              <aside className="filter__container">
                <FilterContainer/>
              </aside>
              {isFetching?
              (
                <div className="programs__container">
                  <Loading/>
                </div>
              )
              :
              (
                <div className="programs__container">
                    {data.map((item, i) => <ProgramItem key={i} {...item} />)}
                </div>
              )}
            </main>
        <footer>
          <span><strong>Developed by:</strong> Shubham Raturi</span>
        </footer>
        </div>

      );
    }
  };
  export default connect(m, { fetchPrograms })(ProgramsPage);