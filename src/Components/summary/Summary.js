import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summarylist: []
     
    }
  }
  componentDidMount() {
    this.getData().then(response => {
      this.setState({ summarylist: response.data });
      console.log(this.state.summarylist)
    });
  }
  getData = () => {
    return new Promise((resolve, reject) => {
      axios.post('http://10.117.189.209:7777/students/ingit/summary/1').then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
   render() {
    return(
      <div>
          <table className="table table-dark table-striped ">
            <thead>
    <h1 align="center">Summary Page</h1>
            </thead>
      <tbody>
          {
          this.state.summarylist.map((item, i) => {
                                return (
                                    <tr key={i}>
                                       <td>{item.studentId}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lasttName}</td>
                                        <td>{item.courseId}</td>
                                    </tr>
                                    
                                )
                            })
                        }
         </tbody>
         </table>                                  
                  </div>
    )
  }
}
export default Summary;

