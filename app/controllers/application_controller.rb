require 'action_text'
class ApplicationController < ActionController::Base
  helper ActionText::Engine.helpers
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
  
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:firstName,:lastName])
  end
end
