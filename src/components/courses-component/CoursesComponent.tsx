import './CoursesComponentStyle.css'
import {CourseComponent} from '../item-course-component/CourseComponent.tsx'
import {coursesArray} from '../../data/CoursesData.ts'

export const CoursesComponent = () => {
    return (
        <div>
            {
                coursesArray.map((item, index) => <CourseComponent key={index} course={item} />)
            }
        </div>
    );
};

export default CoursesComponent;