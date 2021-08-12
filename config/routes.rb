# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static#index'
  resources :schedules, only: %i[index show]
  resources :plans, only: %i[show update create]
end
