<?php
/**
 * Plugin Name:     Gutenberg Flexbox Grid
 * Description:     A Plugin for using Flexbox Grid in the Wordpress Gutenberg Editor.
 * Version:         1.0.0
 * Author:          Jakob Vesely
 * License:         GNU General Public License v3.0
 * Text Domain:     gutenberg-flexboxgrid
 */

add_action('init', function ()
{
	/********************************************************************************
	*** Check Build
	********************************************************************************/

	$script_asset_path = dirname( __FILE__ ) . "/build/index.asset.php";

	if (!file_exists($script_asset_path )) 
	{
		throw new Error( 'You need to run `npm start` or `npm run build` for the "create-block/starter-block" block first.');
	}

	$index_js     = 'build/index.js';
	$script_asset = require($script_asset_path);
	$version = $script_asset['version'];

	/********************************************************************************
	*** Flexbox Grid Stylesheet 
	********************************************************************************/

	add_action('wp_enqueue_scripts', function() 
	{
		wp_enqueue_style(
			"gutenberg-flexboxgrid-flexboxgrid-css", 
			plugin_dir_url(__FILE__) . '/css/flexboxgrid.css', 
			null, 
			'6.3.2'
		);
	});

	/********************************************************************************
	*** Blocks 
	********************************************************************************/

	wp_set_script_translations('gutenberg-flexboxgrid-blocks', 'gutenberg-flexboxgrid');

	wp_register_script('gutenberg-flexboxgrid-blocks',	plugins_url( $index_js, __FILE__ ), $script_asset['dependencies'], $version);
	wp_register_style('gutenberg-flexboxgrid-editor-style', plugins_url('build/index.css', __FILE__ ), array(), $version);
	wp_register_style('gutenberg-flexboxgrid-frontend-style',	plugins_url('build/style-index.css', __FILE__ ), array(), $version);

	/* Registers all Blocks */
	$settings = array(
		'editor_script' => 'gutenberg-flexboxgrid-blocks',
		'editor_style'  => 'gutenberg-flexboxgrid-editor-style',
		'style'         => 'gutenberg-flexboxgrid-frontend-style',
	);

	register_block_type('gutenberg-flexboxgrid/container', $settings);
	register_block_type('gutenberg-flexboxgrid/container-fluid', $settings);
	register_block_type('gutenberg-flexboxgrid/row', $settings);
	register_block_type('gutenberg-flexboxgrid/column', $settings);
});