def load_style(path)
  "static/css/#{path}"
end

def load_script(path)
  "static/js/#{path}"
end

def load_state(path)
  "static/js/states/#{path}"
end

def load_tilemap(path)
  "static/assets/tilemaps/#{path}"
end

def load_stuff(path)
  "static/js/stuff/#{path}"
end

def load_asset(path)
  "static/assets/#{path}"
end

def load_index
  render "views/index.ecr"
end
