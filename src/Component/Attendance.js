import React from 'react'
import './Attendance.css'

const Attendance = ( ) => {
 
  return (
    <>
 
 

      <section class="attendance">
        <div class="attendance-list">
          <h1>Attendance List</h1>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mess</th>
                <th>Date</th>
                <th>Join Time</th>
                <th>Logout Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Sam David</td>
                <td>Yes</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr class="active">
                <td>02</td>
                <td>Virat</td>
                <td>No</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>03</td>
                <td>Jhon</td>
                <td>yes</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>04</td>
                <td>Sara David</td>
                <td>yes</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr >
                <td>05</td>
                <td>Salina</td>
                <td>No</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr >
                <td>06</td>
                <td>Tina</td>
                <td>Yes</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr >
                <td>07</td>
                <td>shivu</td>
                <td>No</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr >
                <td>08</td>
                <td>Abhinand</td>
                <td>yes</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr >
                <td>09</td>
                <td>Stevan</td>
                <td>yes</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Attendance