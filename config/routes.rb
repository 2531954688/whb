Rails.application.routes.draw do
  root to: 'visitors#index'

  resource :wechat, only: [:show, :create]

  resources :users, shallow: true do
    resources :albums
    resources :images
    resources :songs
  end
end
