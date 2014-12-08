# -*- encoding: utf-8 -*-
require File.expand_path('../lib/jquery-facebook/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ["Anton Rogov"]
  gem.email         = ["antonrogov@me.com"]
  gem.summary       = "Facebook JavaScript SDK loader"
  gem.description   = "Facebook JavaScript SDK unobtrusive loader for jQuery and Rails"
  gem.homepage      = "http://github.com/antonrogov/jquery-facebook"

  gem.files         = `git ls-files`.split($\)
  gem.executables   = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r{^(test|spec|features)/})
  gem.name          = "jquery-facebook"
  gem.require_paths = ["lib"]
  gem.version       = Jquery::Facebook::VERSION
end
