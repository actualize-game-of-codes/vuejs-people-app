class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
    render "index.json.jbuilder"
  end

  def create
    @person = Person.new(name: params[:form_name], bio: params[:form_bio])
    @person.save
    render "show.json.jbuilder"
  end
end
