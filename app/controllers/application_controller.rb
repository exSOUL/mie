# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :set_user
  before_action :set_default_plan
  before_action :set_locale

  def set_user
    if session[:user_id]
      @user = User.find(session[:user_id])
    else
      create_and_set_user
    end
  rescue ActiveRecord::RecordNotFound
    create_and_set_user
  end

  def set_default_plan
    create_default_plan(@user) if @user.plans.blank?
  end

  private

  def create_and_set_user
    @user = User.create!
    session[:user_id] = @user.id
    @user
  end

  def create_default_plan(user)
    user.plans.create!(title: 'My plans')
  end

  def set_locale
    return unless params['locale']
    return unless ActiveSupport::TimeZone.all.map { |z| z.tzinfo.identifier }.include?(params['locale'])

    session[:locale] = params['locale']
    redirect_to request.path
  end
end
