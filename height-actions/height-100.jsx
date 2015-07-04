#target photoshop  
function main(){  
  if(!documents.length) return;  
  var startRulerUnits = app.preferences.rulerUnits;  
  app.preferences.rulerUnits = Units.PIXELS;  
  var doc = activeDocument;  
  var res= doc.resolution;  
  var LB = activeDocument.activeLayer.bounds;  

  var Width= LB[2].value - LB[0].value;  
  var widthPix = 100/Width;  
  var currentWidth = doc.activeLayer.width;  
  
  var Height= LB[3].value - LB[1].value;  
  var heightPix = 100/Height;  
  var currentHeight = doc.activeLayer.height;  

  var newHeight = heightPix * 100;  

  doc.activeLayer.resize( currentWidth , newHeight, AnchorPosition.MIDDLECENTER);   
  app.preferences.rulerUnits = startRulerUnits;  
}  
main(); 
