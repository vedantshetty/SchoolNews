Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    resources :comments
  end
  
# Service Worker Routes
get '/service-worker.js', to: "service_worker#service_worker"
get '/manifest.json', to: "service_worker#manifest"

  root 'posts#index'
  
#TEMP

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
