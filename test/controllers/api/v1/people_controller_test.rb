require 'test_helper'

class Api::V1::PeopleControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_people_index_url
    assert_response :success
  end

end
