<?php
// strings for all pages

$TvrLang = array(

	/*// animation events - not currently translatable as other props aren't translated and it would be tricky
	'css_events' => esc_html__('CSS Events', 'microthemer'),
	'js_events' => esc_html__('JavaScript Events', 'microthemer'),
	'hover' => esc_html__('hover', 'microthemer'),
	'focus' => esc_html__('focus', 'microthemer'),
	'inView' => esc_html__('inView', 'microthemer'),
	'inView (once)' => esc_html__('inView (once)', 'microthemer'),
	'click' => esc_html__('click', 'microthemer'),
	*/

	'multi_tab_short' => esc_html__('Multiple tabs/users issue', 'microthemer'),
	'multi_tab_long' => esc_html__('MT settings were updated more recently by another user or browser tab. Saving from this outdated tab could cause data loss. Please reload the page instead of saving from this tab (to get the latest changes).',  'microthemer'),

	'inline_animation_short' => esc_html__('Animation fails with display:inline', 'microthemer'),
	'inline_animation_long' => esc_html__('Microthemer\'s animate.css animations do not work well when elements have a Display value of inline. To fix, go to the Behaviour property group and set the Display property to e.g. inline-block', 'microthemer'),

	'learn_more' => esc_html__('Learn more', 'microthemer'),
	'slow_styles_tab' => esc_html__('Styles tab slows the browser: %1$s sec (avg)', 'microthemer'),
	'drag_picker' => esc_html__('Drag to move color picker', 'microthemer'),
	'parents' => esc_html__('Parents', 'microthemer'),
	'parent' => esc_html__('Go to parent', 'microthemer'),
	'prev_sibling' => esc_html__('Go to previous sibling', 'microthemer'),
	'next_sibling' => esc_html__('Go to next sibling', 'microthemer'),

	'all_devices' => esc_html__('all devices', 'microthemer'),
	'inherited_from' => esc_html__('Inherited from', 'microthemer'),
	'mt_stylesheet' => esc_html__('(Microthemer Stylesheet)', 'microthemer'),
	// strings for main script: ../js/tvr-microthemer.js
	'invalid_sel' => esc_html__('Invalid selector', 'microthemer'),
	'invalid_sel_long' => esc_html__('Microthemer found the selector to be invalid. It will not target any elements on the page.', 'microthemer'),
	'n_els' => esc_html__('Targets %1$s element on the page', 'microthemer'),
	'n_els_plural' => esc_html__('Targets %1$s elements on the page', 'microthemer'),
	'interface' => esc_html__('Microthemer interface', 'microthemer'),
	'frontend' => esc_html__('Frontend preview', 'microthemer'),
	'css_parse_error' => esc_html__('CSS processing error', 'microthemer'),
	'css_parse_error_long' => esc_html__('The selected CSS has an incomplete structure. Please check curly braces etc', 'microthemer'),
	'enter_css_source' => esc_html__('You have selected the option to "Make relative URLs absolute" and/or "Copy remote images to WP media library". Please enter an URL for the original CSS stylesheet above the editor so Microthemer can auto-adjust file paths (even if you do not wish to use the "LOAD STYLESHEET" button).', 'microthemer'),
	'more' => esc_html__('more', 'microthemer'),
	'imp_css_folder' => esc_html__('Imported CSS', 'microthemer'),
	'imp_css_empty' => esc_html__('Nothing found. Please highlight the code you would like to import.'),
	'already_exists_folder' => esc_html__('A folder with that name already exists. Please enter a unique name.', 'microthemer'),
	'already_exists_selector' => esc_html__('A selector with that name already exists. Please enter a unique name.', 'microthemer'),
	'already_exists_misc' => esc_html__('A %s with that name already exists. Please enter a unique name.', 'microthemer'),
	'untitled_folder' => esc_html__('Untitled folder', 'microthemer'),
	'custom_code' => esc_html__('Custom code', 'microthemer'),
	'item' => esc_html__('item', 'microthemer'),

	//'same_domain' => esc_html__('Domain name mismatch', 'microthemer'),
	//'same_domain_long' => esc_html__('Microthemer can only load pages that start with your domian name', 'microthemer'),

	'edit_elsewhere_short' => esc_html__('Edit selector elsewhere', 'microthemer'),
	'edit_elsewhere_long' => esc_html__('Only the area between the opening and closing braces is editable { ... }. Please edit the CSS selector code by clicking the name of the selector in the top toolbar. Updating this will auto-update the custom code editors across all tabs.', 'microthemer'),
	'imp_sels_too' => esc_html__('To import styles, import selectors must be set to Yes', 'microthemer'),
	'css_import_short' => esc_html__('Only use .css files', 'microthemer'),
	'css_import_long' => esc_html__('Please enter the full URL to a CSS stylesheet. These always end with the extension \'.css\'.', 'microthemer'),
	'scss_import_long' => esc_html__('Mirothemer doesn\'t currently support importing .scss stylesheets. Only plain CSS stylesheets. Please import directly from the CSS file generated by the SCSS file you entered.', 'microthemer'),

	'toggle_highlighting' => esc_html__('Selector highlighting', 'microthemer'),
	'update_selector' => esc_html__('Update selector', 'microthemer'),
	'current_selector' => esc_html__('Current selector', 'microthemer'),
	'update_selector_tt' => esc_html__('NOTE: current selector will be renamed/reorganised if you change the Name or Folder fields above.', 'microthemer'),
	'folder_disabled' => esc_html__('Current folder is disabled', 'microthemer'),
	'editor_updated' => esc_html__('code editor updated', 'microthemer'),
	'selector_disabled' => esc_html__('Current selector is disabled', 'microthemer'),
	'enable_with_icon' => esc_html__('Click the un/disable icon in the folders and selectors menu to re-enable it.', 'microthemer'),
	'enter_name_folder' => esc_html__('Please enter a value for the folder name', 'microthemer'),
	'enter_name_selector' => esc_html__('Please enter a value for the selector name', 'microthemer'),
	'enter_name_misc' => esc_html__('Please enter a value for the %s name', 'microthemer'),
	'load_after_moving' => esc_html__('load selector after moving', 'microthemer'),
	'trial_notice' => esc_html__('Please validate your purchase to unlock the full program! With the free trial you are limited to editing or creating 15 Selectors. And not all style options are available e.g. flexbox, animation, transition', 'microthemer'),
	'complete_media_fields' => esc_html__('Please complete all media query fields or delete empty ones.', 'microthemer'),
	'load_style_opt' => esc_html__('Loading style options', 'microthemer'),
	'load_style_opt_failed' => esc_html__('Options failed to load', 'microthemer'),
	'load_failed_explain' => esc_html__('The styling options failed to load into the interface. This sometimes happens if WordPress silently logs you out or because your "nonce" expires as a result of inactivity. Please refresh the page and try to log back in if necessary.', 'microthemer'),
	'load_before_retargeting' => esc_html__('Loading selector before re-targeting', 'microthemer'),
	'load_before_modifying' => esc_html__('Loading selector before modifying', 'microthemer'),
	'load_before_clearing' => esc_html__('Loading selector before clearing', 'microthemer'),
	'load_before_iterating' => esc_html__('Loading selector before navigating', 'microthemer'),
	'load_before_copying' => esc_html__('Loading selector before copying', 'microthemer'),
	'copy' => esc_html__('Copy', 'microthemer'),
	'moved' => esc_html__('Moved', 'microthemer'),
	'sec_disable' => esc_html__('Loading folder before disabling', 'microthemer'),
	'sec_rename' => esc_html__('Loading folder before modifying', 'microthemer'),
	'sec_copy' => esc_html__('Loading folder before copying', 'microthemer'),
	'sec_clear' => esc_html__('Loading folder before clearing', 'microthemer'),
	'fields_sync' => esc_html__('fields synchronized', 'microthemer'),
	//'save_settings' => esc_html__('Save settings', 'microthemer'),
	'settings_saved' => esc_html__('Settings saved', 'microthemer'),
	'save_settings' => esc_html__('Saving settings', 'microthemer'),
	'save_settings_error' => esc_html__('Save error', 'microthemer'),
	//'draft_mode' => esc_html__('draft mode', 'microthemer'),
	'draft_enabled' => esc_html__('draft mode enabled', 'microthemer'),
	'draft_disabled' => esc_html__('draft mode disabled (changes published)', 'microthemer'),
	'keyboard_shortcut' => esc_html__('keyboard shortcut', 'microthemer'),
	'qedit_current_folder' => esc_html__('Quick edit - current folder', 'microthemer'),
	'qedit_current_selector' => esc_html__('Quick edit - current selector', 'microthemer'),
	'load_revisions_table' => esc_html__('Loading revisions table', 'microthemer'),
	'load_revisions_table_failed' => esc_html__('Revisions failed to load', 'microthemer'),
	'retrieve_css' => esc_html__('Retrieving CSS', 'microthemer'),
	'retrieve_css_failed' => esc_html__('CSS failed to load', 'microthemer'),
	'load_script' => esc_html__('Loading Javascript', 'microthemer'),
	'load_script_failed' => esc_html__('Script failed to load', 'microthemer'),
	'load_script_failed_p' => esc_html__('The %s failed to load.', 'microthemer'),
	'reset_settings_confirm' => esc_html__('Are you sure you want to reset all settings?', 'microthemer'),
	'reset_empty_folders' => esc_html__('Resetting empty folders', 'microthemer'),
	'clear_styles_confirm' => esc_html__('Are you sure you want to clear all styles?', 'microthemer'),
	'beaver_builder_confirm' => esc_html__('Beaver Builder is active. You will lose any unsaved Beaver Builder changes. Continue anyway?', 'microthemer'),
	'page_reload_aborted' => esc_html__('Settings were saved. But you may need to reload the Microthemer interface to see the effects', 'microthemer'),
	'halted' => esc_html__('halted', 'microthemer'),
	'clear_styles' => esc_html__('Clearing styles', 'microthemer'),
	'value_cleared' => esc_html__('value cleared', 'microthemer'),
	'previous_name' => esc_html__('Previous name', 'microthemer'),
	'previous_code' => esc_html__('Previous code', 'microthemer'),
	'new_name' => esc_html__('New name', 'microthemer'),
	'new_code' => esc_html__('New code', 'microthemer'),
	'restore_settings_confirm' => esc_html__('Are you sure you want to restore previous settings?', 'microthemer'),
	'restore_settings' => esc_html__('Restoring settings', 'microthemer'),

	'refresh_styles' => esc_html__('Refreshing frontend styles', 'microthemer'),
	'refresh_js' => esc_html__('Refreshing page for JavaScript', 'microthemer'),
	'error_connection' => esc_html__('Connection error. Request failed. Please try again.', 'microthemer'),
	'error_404' => esc_html__('Requested URL not found.', 'microthemer'),
	'error_500' => esc_html__('Internet Server Error.', 'microthemer'),
	'error_parser' => esc_html__('Error.\nParsing JSON Request failed.', 'microthemer'),
	'error_timeout' => esc_html__('Request timed out.', 'microthemer'),
	'error_unknown' => esc_html__('Unknown error. WordPress may have logged you out. Try refreshing the page.', 'microthemer'),
	'send_error' => esc_html__('Sending error report', 'microthemer'),
	'send_error_failed' => esc_html__('Error sending failed', 'microthemer'),
	'select_design_pack' => esc_html__('Please select a design pack from the list', 'microthemer'),
	'choose_import_method' => esc_html__('Please choose an import method (overwrite or merge with your current settings)', 'microthemer'),
	'import_settings' => esc_html__('Importing settings (%s)', 'microthemer'),
	'select_settings_pack' => esc_html__('Please select an existing settings pack or name a new one to export to', 'microthemer'),
	'enter_selector_name' => __('Please enter a value for the Selector name', 'tvr-microthemer'),
	'saving_preferences' => esc_html__('Saving preferences', 'microthemer'),
	'saving_mqs' => esc_html__('Saving media queries', 'microthemer'),
	'saving_enqjs' => esc_html__('Saving enqueued scripts', 'microthemer'),
	'enter_css' => esc_html__('Please enter some CSS selector code e.g. #header', 'microthemer'),
	'null_selector' => esc_html__('(selector targets nothing)', 'microthemer'),
	'value_varies' => esc_html__('(value varies)', 'microthemer'),
	'style_not_applicable' => esc_html__('(style not applicable)', 'microthemer'),
	'not_knowable' => esc_html__('(style not knowable)', 'microthemer'),
	'highest_specificity' => esc_html__(' (highest specificity)', 'microthemer'),
	'wizard_folder' => esc_html__('Enter new or select a folder...', 'microthemer'),
	'wizard_folder_alert' => esc_html__('Please select an existing folder or enter a new folder name', 'microthemer'),
	//'wizard_selector_alert' => esc_html__('Please enter a selector name', 'microthemer'),
	'load_wp' => esc_html__('Loading WordPress site', 'microthemer'),
	'auto_conversion_performed' => esc_html__('Microthemer performed an auto-conversion of your input', 'microthemer'),
	'auto_values_rounded' => esc_html__('Note: values in the fields are rounded to 3 decimal places if necessary.', 'microthemer'),
	'something_wrong' => esc_html__('Something\'s wrong', 'microthemer'),
	'something_wrong_intro' => esc_html__('%1$s took more than %2$s seconds. A JavaScript error may be preventing the action from completing.', 'microthemer'),
	'js_error_site' => esc_html__('Microthemer discovered a JavaScript error on your site', 'microthemer'),
	'something_wrong_discovered' => esc_html__('The following errors were detected:', 'microthemer'),
	'something_wrong_no_errors' => esc_html__('Microthemer hasn\'t discovered any yet though.', 'microthemer'),
	'something_wrong_tips_heading' => esc_html__('Quick self-help tips', 'microthemer'),
	//'something_wrong_online' => esc_html__('more details online', 'microthemer'),
	'something_wrong_console_article' => esc_html__('Search for JavaScript errors using your browser\'s console.',
		'microthemer'),
	'something_wrong_reliable' => esc_html__('for the most reliable/detailed debug info.',
		'microthemer'),
	'something_wrong_disable' => esc_html__('If the JavaScript error URL hints at a particular plugin, disable it. If the Microthemer problem goes away, you know the source.', 'microthemer'),
	'something_wrong_clueless' => esc_html__('If you have no clue, disable all plugins. If the error goes away, it’s a case of re-enabling half of the plugins, then half again until you zero in on the culprit. ','microthemer'),
		'something_wrong_configure' => esc_html__('Plugins that concatenate, minify, or re-order CSS and JavaScript cause problems sometimes. Try playing around with the settings of such plugins.','microthemer'),
	'something_wrong_other' => wp_kses (
		sprintf(
			__('If plugins aren’t the cause, it\'s likely your theme or Microthemer itself. At this stage you might prefer to send us login details for your site via our <a %s>secure contact form</a>. If we can\'t isolate the issue from there we may ask for a backup of your site to test on without interfering with the live version.', 'microthemer'),
			'target="_blank" href="https://themeover.com/support/contact/"'
		),
		array( 'a' => array( 'href' => array(), 'target' => array() ) )
	),
	'something_wrong_priority' => wp_kses (
		sprintf(
			__('<b>Note:</b> any bugs or plugin conflicts you <a %s>report</a> get top priority and will be fixed within one or two days.', 'microthemer'),
			'target="_blank" href="https://themeover.com/support/contact/"'
		),
		array( 'a' => array( 'href' => array(), 'target' => array() ), 'b' => array() )
	),


	// frontend
	// text strings used by both parent and iframe
	//'load_wp' => $js_i18n_main['load_wp'],
	//'refresh_styles' => $js_i18n_main['refresh_styles'],
	//'refresh_js' => $js_i18n_main['refresh_js'],

	// iframe only strings
	'element_type_target' => esc_html__('Element type targeting (very broad)', 'microthemer'),
	'elements_of_type' => esc_html__('elements of type:', 'microthemer'),
	'all_elements' => esc_html__('all <%s> elements', 'microthemer'),
	'element_class_target' => esc_html__('Element with class targeting', 'microthemer'),
	'elements_of_class' => esc_html__('elements with a class of ', 'microthemer'),
	'parent_class_target' => esc_html__('Parent with class targeting', 'microthemer'),
	'parent_class_target_desc' => esc_html__('child <%1$s> elements inside parent <%2$s> container elements that have a class of <%3$s>', 'microthemer'),
	'parent_element_class_target' => esc_html__('Parent & element with class targeting', 'microthemer'),
	'parent_element_class_target_desc' => esc_html__('child <%1$s> elements that have a class of \'%2$s\' inside parent <%3$s> container elements that have a class of \'%4$s\'', 'microthemer'),
	'element_id_target' => esc_html__('Element ID targeting', 'microthemer'),
	'element_id_target_desc' => esc_html__('<%1$s> element with a unique id of \'%2$s\'', 'microthemer'),
	'parent_id_target' => esc_html__('Parent with ID targeting', 'microthemer'),
	'parent_id_target_desc' => esc_html__('child <%1$s> elements inside a parent <%2$s> container element that has a unique id of \'%3$s\'', 'microthemer'),
	'parent_id_element_class_target' => esc_html__('Parent with ID & element with class targeting', 'microthemer'),
	'parent_id_element_class_target_desc' => esc_html__('child <%1$s> elements that have a class of \'%2$s\' inside a parent <%3$s> container element that has a unique id of \'%4$s\'', 'microthemer'),
	'parent_element_id_target' => esc_html__('Parent & element with ID targeting', 'microthemer'),
	'parent_element_id_target_desc' => esc_html__('child <%1$s> element that has a unique id of \'%2$s\' inside a parent <%3$s> container element that has a unique id of \'%4$s\'', 'microthemer'),
	'update_jquery' => esc_html__('Update your jQuery! (1.9+)', 'microthemer'),
	'update_jquery_long' => esc_html__('Your WordPress install is running a version of jQuery older than 1.9. This means Microthemer can\'t retrieve the existing computed CSS values elements on your web page. Please update to the latest version of WordPress (which should also update jQuery). If this doesn\'t help please check your code for any functions that deregister the default version of jQuery. You can ask Themeover to help you with this. Thanks.', 'microthemer'),
	'highlighting_capped' => esc_html__('Highlighting capped', 'microthemer'),
	'highlighting_capped_long' => esc_html__('If your selector targets more than 20 elements on the page, Microthemer will only highlight and analyse the first 20 elements on the page. This is to avoid overworking your browser.', 'microthemer'),
	'navigate_wp_admin' => esc_html__('Admin area uneditable.', 'microthemer'),
	'navigate_wp_admin_long' => esc_html__('Navigating to the WP admin area from within a Microthemer preview is best avoided. Conceivably, you could end up editing a Microthemer interface from within a Microthemer interface. Think of the universe.', 'microthemer'),
	'wizard_mode' => esc_html__("the 'Close wizard' link in the top toolbar.", 'microthemer'),
	'regular_mode' => esc_html__('the icon with horizontal green lines in the top toolbar.', 'microthemer'),
	'quick_create' => esc_html__('Create new', 'microthemer'),
	'quick_create_long' => esc_html__('Create a new selector', 'microthemer'),
	'quick_go' => esc_html__('Go to', 'microthemer'),
	'quick_go_long' => esc_html__('Go to a selector you have already created', 'microthemer'),
	'num_els_n' => esc_html__('The number of elements a selector targets', 'microthemer'),
	'equiv_sels' => esc_html__('Equivalent selectors', 'microthemer'),
	'choose_suggestion' => esc_html__('Choose suggestion', 'microthemer'),

	// note, if changing key text - must update $this->css_filters = array
	'cur_pid_filter' => esc_html__('page-id', 'microthemer'),
	'cur_pname_filter' => esc_html__('page-name', 'microthemer'),

	// manage packs
	'theme_skin' => esc_html__('Theme Skin', 'microthemer'),
	'plugin_skin' => esc_html__('Plugin Skin', 'microthemer'),
	'theme_scaffold' => esc_html__('Theme Scaffold', 'microthemer'),
	'plugin_scaffold' => esc_html__('Plugin Scaffold', 'microthemer'),
	'select_zip' => esc_html__('Please select a design pack zip file to upload', 'microthemer'),
	'download_failed' => esc_html__('Microthemer was not able to download the design pack', 'microthemer'),
	'delete_pack_confirm' => esc_html__('Are you sure you want to delete this design pack?', 'microthemer'),
	'delete_pack_failed' => esc_html__('Microthemer was not able to delete the design pack', 'microthemer'),
	//'error_connection' => $js_i18n_main['error_connection'],
	//'error_404' => $js_i18n_main['error_404'],
	//'error_500' => $js_i18n_main['error_500'],
	//'error_parser' => $js_i18n_main['error_parser'],
	//'error_timeout' => $js_i18n_main['error_timeout'],
	//'error_unknown' => $js_i18n_main['error_unknown'],
	'external_notice' => esc_html__("Warning: this theme links to external images. If someone else installs your zipped theme the background images won't show.", 'microthemer'),
	'delete_file_confirm' => esc_html__('Are you sure you want to delete this file?', 'microthemer'),
	'view_pack_failed' => esc_html__('This file could not be opened in a browser.', 'microthemer'),
	'delete_failed' => esc_html__('Delete failed', 'microthemer'),
	'unable_load' => esc_html__('Microthemer was not able to load: ', 'microthemer'),


);

/*

// strings for micro themes script: ../js/manage-micro.js
$js_i18n_manage = array(
	'theme_skin' => esc_html__('Theme Skin', 'microthemer'),
	'plugin_skin' => esc_html__('Plugin Skin', 'microthemer'),
	'theme_scaffold' => esc_html__('Theme Scaffold', 'microthemer'),
	'plugin_scaffold' => esc_html__('Plugin Scaffold', 'microthemer'),
	'select_zip' => esc_html__('Please select a design pack zip file to upload', 'microthemer'),
	'download_failed' => esc_html__('Microthemer was not able to download the design pack', 'microthemer'),
	'delete_pack_confirm' => esc_html__('Are you sure you want to delete this design pack?', 'microthemer'),
	'delete_pack_failed' => esc_html__('Microthemer was not able to delete the design pack', 'microthemer'),
	'error_connection' => $js_i18n_main['error_connection'],
	'error_404' => $js_i18n_main['error_404'],
	'error_500' => $js_i18n_main['error_500'],
	'error_parser' => $js_i18n_main['error_parser'],
	'error_timeout' => $js_i18n_main['error_timeout'],
	'error_unknown' => $js_i18n_main['error_unknown'],
	'external_notice' => esc_html__("Warning: this theme links to external images. If someone else installs your zipped theme the background images won't show.", 'microthemer'),
	'delete_file_confirm' => esc_html__('Are you sure you want to delete this file?', 'microthemer'),
	'view_pack_failed' => esc_html__('This file could not be opened in a browser.', 'microthemer'),
	'delete_failed' => esc_html__('Delete failed', 'microthemer'),
	'unable_load' => esc_html__('Microthemer was not able to load: ', 'microthemer'),
);


// strings for firebug style overlay script: ../js/jquery.overlay.js
$js_i18n_overlay = array(
	// text strings used by both parent and iframe
	'load_wp' => $js_i18n_main['load_wp'],
	'refresh_styles' => $js_i18n_main['refresh_styles'],
	'refresh_js' => $js_i18n_main['refresh_js'],

	// iframe only strings
	'element_type_target' => esc_html__('Element type targeting (very broad)', 'microthemer'),
	'elements_of_type' => esc_html__('elements of type:', 'microthemer'),
	'all_elements' => esc_html__('all <%s> elements', 'microthemer'),
	'element_class_target' => esc_html__('Element with class targeting', 'microthemer'),
	'elements_of_class' => esc_html__('elements with a class of ', 'microthemer'),
	'parent_class_target' => esc_html__('Parent with class targeting', 'microthemer'),
	'parent_class_target_desc' => esc_html__('child <%1$s> elements inside parent <%2$s> container elements that have a class of <%3$s>', 'microthemer'),
	'parent_element_class_target' => esc_html__('Parent & element with class targeting', 'microthemer'),
	'parent_element_class_target_desc' => esc_html__('child <%1$s> elements that have a class of \'%2$s\' inside parent <%3$s> container elements that have a class of \'%4$s\'', 'microthemer'),
	'element_id_target' => esc_html__('Element ID targeting', 'microthemer'),
	'element_id_target_desc' => esc_html__('<%1$s> element with a unique id of \'%2$s\'', 'microthemer'),
	'parent_id_target' => esc_html__('Parent with ID targeting', 'microthemer'),
	'parent_id_target_desc' => esc_html__('child <%1$s> elements inside a parent <%2$s> container element that has a unique id of \'%3$s\'', 'microthemer'),
	'parent_id_element_class_target' => esc_html__('Parent with ID & element with class targeting', 'microthemer'),
	'parent_id_element_class_target_desc' => esc_html__('child <%1$s> elements that have a class of \'%2$s\' inside a parent <%3$s> container element that has a unique id of \'%4$s\'', 'microthemer'),
	'parent_element_id_target' => esc_html__('Parent & element with ID targeting', 'microthemer'),
	'parent_element_id_target_desc' => esc_html__('child <%1$s> element that has a unique id of \'%2$s\' inside a parent <%3$s> container element that has a unique id of \'%4$s\'', 'microthemer'),
	'update_jquery' => esc_html__('Update your jQuery! (1.9+)', 'microthemer'),
	'update_jquery_long' => esc_html__('Your WordPress install is running a version of jQuery older than 1.9. This means Microthemer can\'t retrieve the existing computed CSS values elements on your web page. Please update to the latest version of WordPress (which should also update jQuery). If this doesn\'t help please check your code for any functions that deregister the default version of jQuery. You can ask Themeover to help you with this. Thanks.', 'microthemer'),
	'highlighting_capped' => esc_html__('Highlighting capped', 'microthemer'),
	'highlighting_capped_long' => esc_html__('If your selector targets more than 20 elements on the page, Microthemer will only highlight and analyse the first 20 elements on the page. This is to avoid overworking your browser.', 'microthemer'),
	'navigate_wp_admin' => esc_html__('Admin area uneditable.', 'microthemer'),
	'navigate_wp_admin_long' => esc_html__('Navigating to the WP admin area from within a Microthemer preview is best avoided. Conceivably, you could end up editing a Microthemer interface from within a Microthemer interface. Think of the universe.', 'microthemer'),
	'wizard_mode' => esc_html__("the 'Close wizard' link in the top toolbar.", 'microthemer'),
	'regular_mode' => esc_html__('the icon with horizontal green lines in the top toolbar.', 'microthemer'),
	'quick_create' => esc_html__('Create new', 'microthemer'),
	'quick_go' => esc_html__('Go to', 'microthemer'),
	'equiv_sels' => esc_html__('Equivalent selectors', 'microthemer'),

	// note, if changing key text - must update $this->css_filters = array
	'cur_pid_filter' => esc_html__('page-id', 'microthemer'),
	'cur_pname_filter' => esc_html__('page-name', 'microthemer')
);

*/

// main script
if ($_GET['page'] == $this->microthemeruipage){
	wp_localize_script( 'tvr_main_ui', 'TvrLang', $TvrLang);
}
// stand alone prefs page needs too
else if ($_GET['page'] == $this->preferencespage){
	wp_localize_script( 'tvr_man', 'TvrLang', $TvrLang);

	//$js_i18n_manage = array_merge($js_i18n_manage, $js_i18n_main);
	//wp_localize_script( 'tvr_man', 'js_i18n_manage', $js_i18n_manage);
	//wp_enqueue_script( 'tvr_man' );
}

?>
