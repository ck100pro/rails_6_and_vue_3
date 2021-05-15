Rails.application.routes.draw do
  root to: 'home#index'
  resources :main, only: [:index]
end
