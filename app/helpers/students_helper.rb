module StudentsHelper

   def set_editing_email(email)
     @@editing_email = email
   end
   def current_student
      @current_student = Student.find_by(email: current_user.email)
   end
   def editing_student
      @editing_student = Student.find_by(email:@@editing_email)
   end
   def current_student?(email)
     begin
       @student = Student.find_by(email: email)
       if @student
          logger.debug "Found student:  #{@student}"
          return true
       else
          return false
       end
     rescue => e
         return false
     end
     false
   end
end
