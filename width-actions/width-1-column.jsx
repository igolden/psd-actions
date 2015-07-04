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
  var currentHeight = activeDocument.activeLayer.height;

  var newWidth = widthPix * 70;  
  doc.activeLayer.resize( newWidth , currentHeight, AnchorPosition.MIDDLECENTER);   
  app.preferences.rulerUnits = startRulerUnits;  
}  
main(); 
