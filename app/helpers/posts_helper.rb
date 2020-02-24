module PostsHelper
  def dateFormater(date)
    date.strftime("#{date.day.ordinalize} %b %Y")
  end

  def iconize(icon_string)
    icon_string.split(' ')
  end
end