module JsonApi
  def json_only
    raise ArgumentError.new('Block must be provided') if !block_given?
    respond_to do |format|
      format.json { yield }
      format.all { head 415 }
    end
  end
end

