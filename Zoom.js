function zoom(scale) {
    document.body.style.transform = "scale(" + scale + ")";
    document.body.style.transformOrigin = "top left";
    //document.body.style.width = (100 / scale) + "%";
    //document.body.style.height = (100 / scale) + "%";
};
zoom(0.5);
