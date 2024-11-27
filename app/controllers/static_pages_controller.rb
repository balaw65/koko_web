class StaticPagesController < ApplicationController
  def home
    logger.debug ">>>> HOME PAGE, IS USER LOGGED IN?"; 
    if logged_in?
      logger.debug "         YES"; 
      # redirectToLesson(current_student.email, current_student.currentlevel, current_student.currentlesson);
      redirect_to students_new_path;

    else
      logger.debug "         NO"; 
    end
  end

  def about
  end
end
