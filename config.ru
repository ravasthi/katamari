require 'rubygems'
require 'bundler/setup'
require 'sinatra'
load 'app.rb'
require './app'

run Sinatra::Application