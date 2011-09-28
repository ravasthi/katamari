require 'rubygems'
require 'sinatra'
require 'haml'

# Helpers
load 'lib/render_partial.rb'
require './lib/render_partial'

# Set Sinatra variables
set :app_file, __FILE__
set :root, File.dirname(__FILE__)
set :views, 'views'
set :public, 'public'

# Haml options:
#   default Haml format is :xhtml
#   make Haml use double quotes around attributes
set :haml, {:format => :html5, :attr_wrapper => '"'} 

# Application routes
get '/' do
  haml :index, :layout => :'layouts/application'
end

get '/about' do
  haml :about, :layout => :'layouts/page'
end