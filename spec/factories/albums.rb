FactoryGirl.define do
  factory :album do
    user
    sequence(:name) { |n| "name#{n}" }
    sequence(:desc) { |n| "desc#{n}" }
    music "music"
    template "template"
  end
end
