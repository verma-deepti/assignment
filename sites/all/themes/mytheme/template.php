<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * mytheme theme.
 */
function mytheme_preprocess_html(&$variables) {
    //dpm($variables);
    $variables['classes_array'][] = 'demo-class';
}
/**
 * Breadcrumb  override
 */
function mytheme_breadcrumb($variables) {
    $breadcrumb = $variables['breadcrumb'];

    if (!empty($breadcrumb)) {
        // Provide a navigational heading to give context for breadcrumb links to
        $output = '<h2 class="breadcrumb-title">' . t('You are here:') . '</h2>';

        $output .= '<div class="breadcrumb">' . implode(theme_get_setting('breadcrumb_sep'), $breadcrumb) . '</div>';
        return $output;
    }
}

/**
 * Unset system.menus.theme.css
 */
function hook_css_alter(&$css) {

    unset($css[drupal_get_path('module', 'system') . '/system.menus.theme.css']);
}