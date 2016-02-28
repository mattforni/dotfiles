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

  def include_assets(type)
    return if type != 'css' and type != 'js'

    action = params[:action]
    controller = params[:controller]
    page = File.join(controller, action)
    controller_parts = controller.split('/')

    # Start at the most specific
    asset = asset_exists?(page, type) ? page : nil

    # And start working toward less specific
    asset = controller if asset.nil? and asset_exists? controller, type

    if asset.nil?
      # Then iterate through all portions of the controller
      (1..controller_parts.length).each do |index|
        controller_path = controller_parts.slice(0, index).join('/')

        # If the asset exists stop searching
        if asset_exists? controller_path, type
          asset = controller_path
          break
        end
      end
    end

    # Fallback to the application if nothing was found
    asset = 'application' if asset.nil? and asset_exists? 'application', type

    return if asset.nil?

    if type == 'css'
      stylesheet_link_tag asset, media: 'all', 'data-turbolinks-track' => true
    elsif type == 'js'
      javascript_include_tag asset, 'data-turbolinks-track' => true
    end
  end
end

