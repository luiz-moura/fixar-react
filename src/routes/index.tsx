import React from 'react';

import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CourseSuggestion from '../pages/CourseSuggestion';

import Courses from '../pages/Courses';
import Course from '../pages/Course';
import Category from '../pages/Category';
import Platform from '../pages/Platform';
import PendingCourses from '../pages/PendingCourses';
import ApproveCourse from '../pages/ApproveCourse';
import Profile from '../pages/Profile';
import Support from '../pages/Support';
import Privacy from '../pages/Privacy';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/support" component={Support} />

    <Route path="/courses" component={Courses} isPrivate />
    <Route path="/course/:course_id" component={Course} isPrivate />
    <Route path="/category/:category_id" component={Category} isPrivate />
    <Route path="/platform/:platform_id" component={Platform} isPrivate />
    <Route path="/course-suggestion" component={CourseSuggestion} isPrivate />

    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/pending-courses" component={PendingCourses} isPrivate />
    <Route
      path="/approve-course/:course_id"
      component={ApproveCourse}
      isPrivate
    />
  </Switch>
);

export default Routes;
