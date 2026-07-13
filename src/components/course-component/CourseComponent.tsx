import "./CourseComponentStyle.css"
import type {FC} from "react";
import type {ICourse} from "../../models/CourseModel.ts";

type CourseType = {
    course: ICourse;
}

export const CourseComponent: FC<CourseType> = ({course}) => {
    return (
        <li>{course.title} {course.monthDuration}</li>
    );
};
