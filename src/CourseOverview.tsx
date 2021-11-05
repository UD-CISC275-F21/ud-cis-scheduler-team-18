import React from "react";
import Course from "./Interfaces/course";
interface courseProps {
  courses: Course[];
}
export const CourseOverview: React.FC<courseProps> = ({ courses }: courseProps) => {
  return <div className="Course-Overview">
    <table>
      <tbody>
        <tr className="Table-Header">
          <td>
            <h4>Department</h4>
          </td>
          <td>
            <h4>Course</h4></td>
          {/* <td>
            <h4>
              CoreReq
            </h4>
          </td>
          <td>
            <h4>
              PreReq
            </h4>
          </td> */}
        </tr>
        {/* {courses.map(item=> {
          return <CourseItem Department = {item.Department}
          ID = {item.ID}>
          </CourseItem>
        })} */}
      </tbody>
    </table>
  </div>;
};