#target photoshop  
function main(){  
  if(!documents.length) return;  
  var startRulerUnits = app.preferences.rulerUnits;  
  app.preferences.rulerUnits = Units.PIXELS;  
  var doc = activeDocument;  
  var res= doc.resolution;  
  var LB = activeDocument.activeLayer.bounds;  
  var Width= LB[2].value - LB[0].value;  
  var onePix = 100/Width;  
  var newHeight = onePix * 200;
  var currentWidth = doc.activeLayer.width;  
  doc.activeLayer.resize( currentWidth , newHeight, AnchorPosition.MIDDLECENTER);   
  app.preferences.rulerUnits = startRulerUnits;  
}  
main(); 
