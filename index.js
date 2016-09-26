var fs      = require('fs'),
    parse   = require('csv-parse/lib/sync'),
    util    = require('util'),
    triangle;

fs.readFile('./historical_snapshot_of_triangle_in_case_url_disappears.txt', 'utf8', function(err, stuff){
    if (err) throw err;
    triangle = parse(stuff, {delimiter:' ', relax_column_count: true});
    // remove blank spaces at end of some rows
    triangle = triangle.map(function(row){
        return row.filter(function(node){
            return node !== '';
        })
    });
    //invert triangle
    triangle.reverse();
    console.log(triangle);
});