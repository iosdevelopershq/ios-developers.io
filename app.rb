get '/' do
  send_file 'views/index.html'
end

get '/team' do
    send_file 'views/team.html'
end