export interface Course {
    springISDCourse: string;
    loneStarCollegeCourse: string;
    collegeCreditHours: number;
    springISDCredit: number;
  }
  
  export interface Category {
    id: string;
    title: string;
    color: string;
    courses: Course[];
  }

  