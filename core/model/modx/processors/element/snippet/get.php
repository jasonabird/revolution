<?php
/**
 * Get a snippet.
 *
 * @param integer $id The ID of the snippet.
 *
 * @package modx
 * @subpackage processors.element.snippet
 */
if (!$modx->hasPermission('view')) return $modx->error->failure($modx->lexicon('permission_denied'));
$modx->lexicon->load('snippet');

/* get snippet */
if (empty($_REQUEST['id'])) return $modx->error->failure($modx->lexicon('snippet_err_ns'));
$snippet = $modx->getObject('modSnippet',$_REQUEST['id']);
if ($snippet == null) return $modx->error->failure($modx->lexicon('snippet_err_not_found'));

$properties = $snippet->get('properties');
if (!is_array($properties)) $properties = array();

$data = array();
foreach ($properties as $property) {
    $data[] = array(
        $property['name'],
        $property['desc'],
        $property['type'],
        $property['options'],
        $property['value'],
        false, /* overridden set to false */
    );
}

$snippet->set('data','(' . $modx->toJSON($data) . ')');

return $modx->error->success('',$snippet);