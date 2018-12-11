import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// third-parties
let jQueryBridget = require('jquery-bridget');
let Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );

// Components
import '../../partials/breadcrumbs/breadcrumbs';
import '../../partials/header/header';
import '../../partials/filters/filters';
import '../../partials/plans/plans';

// init Isotope
let $grid = $('.plans__container').isotope({
    itemSelector: '.js-plans__item',
    masonry: {
        columnWidth: 40,
        isFitWidth: true,
    }
});


// store filter for each group
var filters = {};

$('.filters__tabs').on( 'click', 'button', function( event ) {
    var $button = $( event.currentTarget );
    // get group key
    var $buttonGroup = $button.parents('.filters__list');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $button.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
});

// change active class on buttons
$('.filters__list').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function( event ) {
        $buttonGroup.find('.active').removeClass('active');
        var $button = $( event.currentTarget );
        $button.addClass('active');
    });
});

// flatten object by concatting values
function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
        value += obj[ prop ];
    }
    console.log(value, 'value')
    return value;
}



$(document).foundation();
