#target photoshop  
function main(){  
  if(!documents.length) return;  
  var startRulerUnits = app.preferences.rulerUnits;  
  app.preferences.rulerUnits = Units.PIXELS;  
  var doc = activeDocument;  
  var res= doc.resolution;  
  var LB = activeDocument.activeLayer.bounds;  

  #define width
  var Width= LB[2].value - LB[0].value;  
  var widthPix = 100/Width;  
  var currentWidth = doc.activeLayer.width;  

  #define custom Width
  var newWidth = widthPix * 70;  
  
  #define height
  var Height= LB[3].value - LB[1].value;  
  var heightPix = 100/Height;  
  var currentHeight = doc.activeLayer.height;  

  #define custom height
  var newHeight = heightPix * 70;  

  doc.activeLayer.resize( newSize , newSize, AnchorPosition.MIDDLECENTER);   
  app.preferences.rulerUnits = startRulerUnits;  
}  
main(); 
