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
  var newHeight = onePix * 100;
  var currentHeight = doc.activeLayer.height;  
  var newWidth = onePix * 670;  
  doc.activeLayer.resize( newWidth , currentHeight, AnchorPosition.MIDDLECENTER);   
  app.preferences.rulerUnits = startRulerUnits;  
}  
main(); 
