
//https://teachablemachine.withgoogle.com/models/nhKckxser/

camera= document.getElementById("camera");
Webcam.set({
width:320,
height:250,
image_format:'jpeg',
jpeg_quality:180
});
Webcam.attach(camera);

function capture_image(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_img" src=" '+data_uri+'"/>'
   
});
}
console.log("ml5 version" , ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nhKckxser/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
    
}

function check(){
  img= document.getElementById("selfie_img");
      classifier.classify(img,gotresult);
}

function gotresult(error,results){
if(error){
console.error(error);
    
}
else{
console.log(results);
document.getElementById("result_object_name").innerHTML= results[0].label;
document.getElementById("result_object_accuracy").innerHTML= (results[0].confidence.toFixed(3)) * 100 + "%";
}

}
