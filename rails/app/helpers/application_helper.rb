module ApplicationHelper
  def asset_exists?(filename, extension)
    return false if filename.nil? or filename.empty? or extension.nil? or extension.empty?
    !Rails.application.assets.find_asset("#{filename}.#{extension}").nil?
  end

  def handle_toast
    message = alert || notice || devise_error_messages! rescue nil
    return if message.nil? or message.empty?
    error = !(alert || devise_error_messages!).nil? rescue false
    render partial: 'application/toast', locals: {message: message, error: error}
  end

  def include_styles
    action = params[:action]
    controller = params[:controller]
    page = File.join(controller, action)

    stylesheet = nil 
    if asset_exists? page, 'css'
      stylesheet = page 
    elsif asset_exists? controller, 'css'
      stylesheet = controller
    elsif asset_exists? 'application', 'css'
      stylesheet = 'application'
    end

    return stylesheet_link_tag stylesheet, media: 'all', 'data-turbolinks-track' => true if !stylesheet.nil?
    nil
  end
end

