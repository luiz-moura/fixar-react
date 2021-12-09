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
import SupportList from '../pages/SupportList';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/support" component={Support} />

    <Route path="/" exact component={Courses} />
    <Route path="/course/:course_id" component={Course} />
    <Route path="/category/:category_id" component={Category} />
    <Route path="/platform/:platform_id" component={Platform} />
    <Route path="/course-suggestion" component={CourseSuggestion} />

    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/support-list" component={SupportList} isPrivate />
    <Route path="/pending-courses" component={PendingCourses} isPrivate />
    <Route
      path="/approve-course/:course_id"
      component={ApproveCourse}
      isPrivate
    />
  </Switch>
);

export default Routes;
