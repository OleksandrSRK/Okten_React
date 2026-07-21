import type {ICurseModel} from "../../models/CurseModel.ts";

export interface CourseComponentProps{
    course: ICurseModel
}

export const CourseComponent = ({course}: CourseComponentProps) => {
    return (
        <div>
            <h2>{course.title}</h2>
            <p>Month duration: {course.monthDuration}</p>
            <p>Hour duration: {course.hourDuration}</p>
            <p>Modules: {course.modules.join(", ")}</p>
        </div>
    );
};

export default CourseComponent;
