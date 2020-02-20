module PostsHelper
  def dateFormater(date)
    date.strftime("#{date.day.ordinalize} %B %Y")
  end
end