require 'jquery-facebook/version'

if defined? Rails && Rails::VERSION::MAJOR == 3 && Rails::VERSION::MINOR >= 1
  require 'jquery-facebook/engine'
end
