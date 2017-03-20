function initialBoxs(){
    d3.selectAll('.circleMap').classed('cir-rev-selected', false).classed("cir-cat-selected",false)
        .classed('cir-star-selected', false).classed('cir-mul-selected', false);
    d3.selectAll('.circleMap').classed('cir-notslected', false);

    d3.selectAll(".selected-bar").classed("selected-bar",false);
    // d3.selectAll("check").setAttribute("checked", "");
    // var checked = document.getElementsByClassName('check')..setAttribute("checked", "");;

}


function selectBoxs(target) {
    var targetid = target.id;

    var ident = targetid.charAt(0);

    // var multifilter = 0;
    //
    // d3.selectAll('.circleMap').each(
    //     if(d3.select(this).classed('cir-cat-selected')){
    //         multifilter = 1;
    // });

    if(ident == 'c'){
        // console.log(" target is the stars");

        var targetstar1 = targetid.charAt(1);
        var targetstar2 = targetid.charAt(1) +".5";

        d3.selectAll('.circleMap').each(function (d) {
            var match = d3.select(this).attr("star-class");
            if (targetstar1 == match || targetstar2 == match) {
                d3.select(this).classed('cir-star-selected', true);
            }
        })
    }
    else{

        console.log(" target is review boxs");

        var targetstar1 = targetid.charAt(1);


        d3.selectAll('.circleMap').each(function (d) {
            var match = d3.select(this).attr("review-class");

            if ( targetstar1 =="8" && parseInt(match)>= 100 && parseInt(match)< 500 ){
                d3.select(this).classed('cir-rev-selected', true);
            }

            if ( targetstar1 =="7" && parseInt(match)>= 500 && parseInt(match)< 1000 ){
                d3.select(this).classed('cir-rev-selected', true);
            }
            if ( targetstar1 =="6" && parseInt(match)>= 1000 && parseInt(match)< 1500 ){
                d3.select(this).classed('cir-rev-selected', true);
            }
            if ( targetstar1 =="5" && parseInt(match)>= 1500 && parseInt(match)< 2000 ){
                d3.select(this).classed('cir-rev-selected', true);
            }
            if ( targetstar1 =="4" && parseInt(match)>= 2000 && parseInt(match)< 2500 ){
                d3.select(this).classed('cir-rev-selected', true);
            }
            if ( targetstar1 =="3" && parseInt(match)>= 2500 && parseInt(match)< 3000 ){
                d3.select(this).classed('cir-rev-selected', true);
            }
            if ( targetstar1 =="2" && parseInt(match)>= 3000 && parseInt(match)< 3500 ){
                d3.select(this).classed('cir-rev-selected', true);
            }
            if ( targetstar1 =="1" && parseInt(match)>= 3500 && parseInt(match)< 4500 ){
                d3.select(this).classed('cir-rev-selected', true);
            }
        })

    }

    multifilterUpdate();

}


function unselectBoxs(target) {

    var targetid = target.id;

    var ident = targetid.charAt(0);

    if(ident == 'c'){
        console.log(" target is the stars");

        var targetstar1 = targetid.charAt(1);

        d3.selectAll('.circleMap').each(function (d) {
            var match = d3.select(this).attr("star-class");
            if (targetstar1 == match.charAt(0)){
                d3.select(this).classed('cir-star-selected', false);
            }
        })
    }
    else{

        console.log(" target is review boxs");

        var targetstar1 = targetid.charAt(1);


        d3.selectAll('.circleMap').each(function (d) {
            var match = d3.select(this).attr("review-class");

            if ( targetstar1 =="8" && parseInt(match)>= 100 && parseInt(match)< 500 ){
                d3.select(this).classed('cir-rev-selected', false);
            }

            if ( targetstar1 =="7" && parseInt(match)>= 500 && parseInt(match)< 1000 ){
                d3.select(this).classed('cir-rev-selected', false);
            }
            if ( targetstar1 =="6" && parseInt(match)>= 1000 && parseInt(match)< 1500 ){
                d3.select(this).classed('cir-rev-selected', false);
            }
            if ( targetstar1 =="5" && parseInt(match)>= 1500 && parseInt(match)< 2000 ){
                d3.select(this).classed('cir-rev-selected', false);
            }
            if ( targetstar1 =="4" && parseInt(match)>= 2000 && parseInt(match)< 2500 ){
                d3.select(this).classed('cir-rev-selected', false);
            }
            if ( targetstar1 =="3" && parseInt(match)>= 2500 && parseInt(match)< 3000 ){
                d3.select(this).classed('cir-rev-selected', false);
            }
            if ( targetstar1 =="2" && parseInt(match)>= 3000 && parseInt(match)< 3500 ){
                d3.select(this).classed('cir-rev-selected', false);
            }
            if ( targetstar1 =="1" && parseInt(match)>= 3500 && parseInt(match)< 4500 ){
                d3.select(this).classed('cir-rev-selected', false);
            }
        })

    }


    multifilterUpdate();

}


function multifilterUpdate() {
    d3.selectAll('.circleMap').classed('cir-notslected', true);
    d3.selectAll('.circleMap').classed('cir-mul-selected',false);

    var starArev = 0;
    var starAcat = 0;
    var revAcat = 0;
    var revAcatAstar = 0;
    var onlystar = 0,
        onlyrev = 0,
        onlycat = 0,
        nothi = 0;

    d3.selectAll('.circleMap').each(function (d) {
        if(d3.select(this).classed('cir-star-selected') && d3.select(this).classed('cir-cat-selected')
            && d3.select(this).classed('cir-rev-selected')){
            revAcatAstar = 1;
        }
        else if(d3.select(this).classed('cir-star-selected') && d3.select(this).classed('cir-cat-selected'))
        {
            starAcat = 1;
        }
        else if(d3.select(this).classed('cir-cat-selected') && d3.select(this).classed('cir-rev-selected')){
            revAcat = 1;
        }
        else if(d3.select(this).classed('cir-star-selected') && d3.select(this).classed('cir-rev-selected')){
            starArev = 1;
        }
        else if(d3.select(this).classed('cir-star-selected')){
            onlystar = 1;

        }
        else if(d3.select(this).classed('cir-rev-selected')){
            onlyrev = 1;

        }
        else if(d3.select(this).classed('cir-cat-selected')){
            onlycat = 1;
        }
        else{
            nothi = 1
        }

    });


    if(revAcatAstar == 1){
        d3.selectAll('.circleMap').each(function (d) {
            if(d3.select(this).classed('cir-star-selected') && d3.select(this).classed('cir-cat-selected')
                && d3.select(this).classed('cir-rev-selected')){
                d3.select(this).classed('cir-mul-selected',true);
            }})}
    else if(starArev == 1){
            d3.selectAll('.circleMap').each(function (d) {
                if(d3.select(this).classed('cir-star-selected') && d3.select(this).classed('cir-rev-selected')){
                    d3.select(this).classed('cir-mul-selected',true);
                }
            })
    }
    else if(starAcat == 1){
        d3.selectAll('.circleMap').each(function (d) {
            if(d3.select(this).classed('cir-star-selected') && d3.select(this).classed('cir-cat-selected')){
                d3.select(this).classed('cir-mul-selected',true);
            }
        })

    }
    else if(revAcat == 1 ){
        d3.selectAll('.circleMap').each(function (d) {
            if(d3.select(this).classed('cir-cat-selected') && d3.select(this).classed('cir-rev-selected')){
                d3.select(this).classed('cir-mul-selected',true);
            }
        })
    }
    else if(nothi == 1 ){
        d3.selectAll('.circleMap').classed('cir-notslected', false);
    }
    else{
        d3.selectAll('.circleMap').each(function (d) {
            if(d3.select(this).classed('cir-star-selected') || d3.select(this).classed('cir-cat-selected')
                || d3.select(this).classed('cir-rev-selected')){
                d3.select(this).classed('cir-mul-selected',true);
            }})}




}