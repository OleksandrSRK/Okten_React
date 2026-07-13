import "./CoursesComponentStyle.css"
import type {ICourse} from "../../models/CourseModel.ts";
import {coursesAndDurationArray} from "../../data/CoursesAndDurationArray.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";



export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course: ICourse) => {
                    return <CourseComponent course={course}/>
                })
            }
        </ul>
    );
};