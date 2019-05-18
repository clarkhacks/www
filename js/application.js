---
layout: null
---

{% include_relative _style-picker.js %}

function searchData(){
    $('.item-card').hide();
    var txt = $('#search-criteria').val().toUpperCase();
    $('.item-card:contains("'+txt+'")').show();
}
