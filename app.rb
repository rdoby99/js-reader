require 'sinatra'
require 'json'
require_relative 'public/ve.js'

# Assuming `Ve` is available and the interface is correctly understood from the documentation
get '/ichi1' do
  content_type :json

  request.body.rewind  # in case someone already read it
  data = JSON.parse(request.body.read)
  text = data['text']

  # Initialize ve and analyze the text
  ve_instance = Ve.in(:ja)
  words = ve_instance.words(text)

  # Transform the data into a simpler format for the frontend
  results = words.map do |word|
    { word: word.word, lemma: word.lemma, part_of_speech: word.part_of_speech }
  end

  results.to_json
end
