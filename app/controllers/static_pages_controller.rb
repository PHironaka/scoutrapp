class StaticPagesController < ApplicationController

  def home
if logged_in?
      redirect_to locations_path
    end
  end

  def help
  end

  def about    
  end

  def contact
  end

  def terms
  end

end
