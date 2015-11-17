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
    controller_parts = controller.split('/')

    # Start at the most specific
    stylesheet = asset_exists?(page, 'css') ? page : nil

    # And start working toward less specific
    stylesheet = controller if stylesheet.nil? and asset_exists? controller, 'css'

    if stylesheet.nil?
      # Then iterate through all portions of the controller
      (1..controller_parts.length).each do |index|
        controller_path = controller_parts.slice(0, index).join('/')

        # If the asset exists stop searching
        if asset_exists? controller_path, 'css'
          stylesheet = controller_path
          break
        end
      end
    end

    # Fallback to the application if nothing was found
    stylesheet = 'application' if stylesheet.nil? and asset_exists? 'application', 'css'

    stylesheet_link_tag stylesheet, media: 'all', 'data-turbolinks-track' => true if !stylesheet.nil?
  end
end

