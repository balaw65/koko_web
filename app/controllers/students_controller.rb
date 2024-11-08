class StudentsController < ApplicationController
  def new
     logger.debug "GOT HERE AT STUDENTS NEW URL"
     logger.debug "Current user:  #{current_user}"
     logger.debug "Current student:  #{current_student}"
     # logger.debug "Current student email:  #{current_student.email}"

     begin
       if current_student.email
          logger.debug ">>>>>>>Student has email!!!"
          render 'show'
       else
          logger.debug ">>>>>>>Student has NO email!!!"
          @student       = Student.new
          @student.email = current_user.email
          @day           = current_user.lessonday
       end
     rescue NoMethodError => e
          logger.debug ">>>>  NO EMAIL YET, CREATING STUDENT <<<<<"
          @student       = Student.new
          @student.email = current_user.email
          @day           = current_user.lessonday
     rescue => e
         logger.debug ">>>>  ERROR UNKNOWN: #{e.class}"
         redirect_to(root_url)
     end
  end

  def show
     logger.debug "GOT HERE AT STUDENTS SHOW URL"
  end

  def status
     logger.debug "GOT HERE AT STUDENTS STATUS URL"
  end

  def update

     logger.debug "GOT HERE AT STUDENTS UPDATE URL"
     logger.debug "*******************************************Student update profile called"
 
     if current_user.admin?
        student = Student.find(params[:id])
        logger.debug "User is an admin"
        logger.debug "Student to update:  #{student.email}"
        if student
           if student.update(student_params)
              flash[:success] = "Student Updated"
              redirect_to students_status_path
           else
              flash[:danger] = "Problem updateding student"
              render 'edit'
           end
        end
     else
        logger.debug "student is at level:  #{current_student.currentlevel}, lesson:  #{current_student.currentlesson}"
        redirectToLesson(current_student.email, current_student.currentlevel, current_student.currentlesson)
     end

  end


  def create
     logger.debug "GOT HERE AT STUDENTS CREATE"
     @student       = Student.new(student_params)
     @student.email = current_user.email

     if @student.save
        flash.now[:success] = "Thank you, you will receive an email to a link for your first lesson!!"
        render 'show'
     else
        flash.now[:danger] = "Student profile error!! OOPS"
        logger.debug "STUDENT EMAIL:  #{@student.email}"
 

        render 'new'
     end
 
  end

  def edit
     logger.debug "GOT HERE AT STUDENTS EDIT URL"
     
     if current_user.admin?
        logger.debug "User is an admin"
        logger.debug "****Current user:  #{current_user.email}"
        logger.debug "****Editing student:  #{editing_student.email}"
     else
        logger.debug "student is at level:  #{current_student.currentlevel}"
        redirectToLesson(current_student.email, current_student.currentlevel, current_student.currentlesson)
     end


  end

  def update_profile
     logger.debug " Student update profile called"
  end


  def destroy
     logger.debug " Student destroy in controller called"
  end


private
  def student_params
    params.require(:student).permit(:active, :favoritegenre, :interests, :currentlevel, :currentlesson, :startingdate)
  end
  def changeDateFormat(oldDate)
    @strArray = oldDate.split("-")
    if @strArray.length() == 3
       return @strArray[2] + "-" + array[0] + "-" + array[1]
    else 
       return oldDate
    end
  end
  def redirectToLesson(semail, slevel, slesson)
    case slevel
       when 1
          case slesson
             when 1
                redirect_to l1l1_url  # see config/routes.rb
             when 2
                redirect_to l1l2_url  # see config/routes.rb
             when 3
                redirect_to l1l3_url  # see config/routes.rb
             when 4
                redirect_to l1l4_url  # see config/routes.rb
             when 5
                redirect_to l1l5_url  # see config/routes.rb
 
          end
     end
  end
end
